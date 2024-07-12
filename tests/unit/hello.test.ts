import { APIGatewayEvent, Context } from "aws-lambda";
import { handler } from "../../functions/hello";

describe('hello', () => {
    it('should return a message', async () => {
        const result = await handler({} as APIGatewayEvent, {} as Context);

        expect(result.statusCode).toBe(200);
        expect(result.body).toStrictEqual(JSON.stringify({ message: 'Hello World!' }));
    });
});
