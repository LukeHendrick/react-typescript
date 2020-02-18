import { CognitoAuth, CognitoAuthOptions, CognitoAuthSession } from 'amazon-cognito-auth-js';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk';
import jwt_decode from 'jwt-decode';
import env from '../config'


export class AuthUtil {
    authData: CognitoAuthOptions = {
        ClientId: env.clientId,
        AppWebDomain: `${env.cognitoDomain}.auth.${env.region}.amazoncognito.com`,
        TokenScopesArray: env.scopes,
        RedirectUriSignIn: window.location.origin,
        RedirectUriSignOut: window.location.origin,
        UserPoolId: env.userPoolId
    };

    cognitoAuth: CognitoAuth = new CognitoAuth(this.authData);
    userPool: CognitoUserPool = new CognitoUserPool({
        UserPoolId: env.userPoolId,
        ClientId: env.clientId
    })

    constructor() {
        this.cognitoAuth.useCodeGrantFlow();
    }

    userHandler = async () => {
        return new Promise((resolve, reject) => {
            this.cognitoAuth.userhandler = {
                onSuccess: (result: any) => {
                    this.getCreds();
                    resolve(result)
                },
                onFailure: (err: any) => {
                    reject(err)
                }
            }
        })
    }


    public isAuthenticated() {
        return new Promise(async (resolve) => {
            let user = this.userPool.getCurrentUser();
            if (user) {
                resolve(true)
            }
            const curUrl = window.location.href;
            if (window.location.search.startsWith("?code=")) {
                this.cognitoAuth.parseCognitoWebResponse(curUrl);
                try {
                    await this.userHandler();
                    user = this.userPool.getCurrentUser();
                    if (user) resolve(true)
                } catch (err) {
                    resolve(false);
                }
            }
            resolve(false);
        })
    }
    public isAdmin() {
        let user = this.userPool.getCurrentUser();
        if (user) {
            let isAdmin;
            Object.keys(localStorage).forEach(key => {
                if (key.endsWith('idToken')) {
                    const decodedToken: any = jwt_decode(localStorage[key])
                    if (decodedToken['cognito:groups'] && (decodedToken['cognito:groups']).includes(env.cognitoAdminGroup)) {
                        isAdmin = true;
                    } else {
                        isAdmin = false;
                    }
                }
            })
            return isAdmin
        } else {
            return false
        }
    }
    public initAuth() {
        this.cognitoAuth.getSession()
    }

    public signOut() {
        this.cognitoAuth.signOut();
        window.location.href = `https://${this.authData.AppWebDomain}/logout?response_type=code&client_id=${env.clientId}&redirect_uri=${window.location.origin}`
    }

    public getCreds() {
        const user = this.userPool.getCurrentUser();
        if (user) {
            user.getSession((err: any, session: CognitoAuthSession) => {
                if (err) {
                    throw err;
                }
                const token = session.getIdToken().getJwtToken();
                const identityPoolId = env.identityPoolId;
                const login = `cognito-idp.${env.region}.amazonaws.com/${env.userPoolId}`
                const Logins = {
                    [login]: token
                }
                AWS.config.region = env.region;
                const cogCreds = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: identityPoolId,
                    Logins
                })
                if (cogCreds.expired) {
                    cogCreds.refreshPromise();
                }
                AWS.config.credentials = cogCreds;
            })
        }

    }
}