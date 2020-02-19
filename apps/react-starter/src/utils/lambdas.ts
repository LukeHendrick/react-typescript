import env from '../config';
import AWS from 'aws-sdk';
export const adminLambda = async (body: any) => {
    const lambda = new AWS.Lambda({region: env.region});
    const invokeParams: any = {
        FunctionName: env.adminLambdaFunction,
        Payload: JSON.stringify(body),
        InvocationType: "RequestResponse"
    };
    return lambda.invoke(invokeParams).promise();
}

export const helloLambda = async (body: any) => {
    const lambda = new AWS.Lambda({region: env.region});
    const invokeParams: any = {
        FunctionName: env.helloLambdaFunction,
        Payload: JSON.stringify(body),
        InvocationType: "RequestResponse"
    };
    return lambda.invoke(invokeParams).promise();
}