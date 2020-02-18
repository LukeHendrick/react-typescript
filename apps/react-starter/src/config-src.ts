const env = {
    clientId: '%CF:CognitoUserPoolClientId%',
    webDomain: '%CF:WebDomain%',
    cognitoDomain: "%CF:CognitoDomain%",
    region: '%CF:Region%',
    userPoolId: '%CF:CognitoUserPoolId%',
    identityPoolId: "%CF:CognitoIdentityPoolId%",
    scopes: ['phone', 'email', 'openid', 'profile'],
    cognitoAdminGroup: "%CF:CognitoAdminGroup%",
    helloLambdaFunction: "%CF:HelloLambda%",
    adminLambdaFunction: "%CF:AdminLambda%"
}

export default env