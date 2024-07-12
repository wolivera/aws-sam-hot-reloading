import { APIGatewayProxyResult } from 'aws-lambda';

export class LambdaError extends Error {
    statusCode: number;
    errors?: object[];

    constructor(statusCode: number, message: string, errors?: object[]) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
    }
}

export const lambdaErrorHandler = (err: unknown): APIGatewayProxyResult => {
    if (err instanceof LambdaError) {
        return {
            statusCode: err.statusCode,
            body: JSON.stringify({
                message: err.message,
                errors: err.errors,
            }),
        };
    }

    return {
        statusCode: 500,
        body: JSON.stringify({
            message: 'Internal Server Error',
        }),
    };
};
