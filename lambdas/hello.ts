import { buildResult } from './utils/buildResult';

module.exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event, null, 2));
    callback(null, buildResult(200, "OK"))   
}