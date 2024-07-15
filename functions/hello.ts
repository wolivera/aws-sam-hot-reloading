import { APIGatewayEvent, Context } from 'aws-lambda';
import { logger } from '@baselime/lambda-logger';
import { lambdaErrorHandler } from '../helpers/error';
import { composeHandler } from '../middleware/compose';

export const handler = async (event: APIGatewayEvent, ctx: Context) => {
    logger.debug(`Received event:`, { event: JSON.stringify(event) } );
    logger.debug(`Received context:`, { context: JSON.stringify(ctx) } );

    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Hello World! Your function executed successfully!',
            }),
        };
    } catch (err) {
        logger.error('Error in get-me', err as Error);

        return lambdaErrorHandler(err);
    }
};

// Apply as many middlewares as you want to the handler. 
// e.g 
// export const lambdaHandler = composeHandler(connectDb(), validateAuth(), setCurrentUser(), handler);
//
export const lambdaHandler = handler;
