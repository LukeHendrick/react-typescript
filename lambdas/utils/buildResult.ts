export const buildResult = (statusCode: number, body: string) => {
    console.log(`Building Result Status Code: ${statusCode}, Body: ${body}`)
    return {
        statusCode,
        body
    }
}