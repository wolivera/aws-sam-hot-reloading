# AWS SAM Hot Reloading

This repository contains a blueprint or boilerplate code for getting started with developing and testing an AWS lambda project using locally [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html). The project is using TypeScript, transpiling and bundling your source and modules, aiming to have a hot-reloading functionality. The motivation behind this project is explained in this [post]([https://medium.com/](https://medium.com/@liams_o/aws-sam-cli-speed-up-development-with-this-configuration-7439b8dc6c8e)).

![AWSSamHotReloading-DEMO-ezgif com-optimize](https://github.com/user-attachments/assets/973871f5-6545-41c1-b240-4c281b5cbb6a)

[Loom Demo](https://www.loom.com/share/ecd10102ce1e41d9b5130627e3207895?sid=9b50aec9-3c20-43cc-9bc7-2adcd5eae679)


## :information_source: Installing

- Install [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- Install the dependencies by running `pnpm`

Once set up, make sure that you have Docker running.

## :computer: Getting Started 

`pnpm build`
- Cleans `dist` and `.aws-sam` directory (if either exist)
- Bundles and minifies your code in outputs to `dist`

`pnpm start:watch`
- Run this in a separate console window to watch for changes in your source code and automatically transpile and bundle your code to `dist` directory.

`pnpm start:dev`
- Creates a local HTTP server in Docker to run your serverless application locally
- In your browser or any REST API client, a GET request to http://localhost:3000/ping will invoke the lambda.

`pnpm test`
- Runs unit tests using Jest and generates coverage report

`pnpm test:e2e`
- Runs end-to-end tests using Jest and generates coverage report

## :test_tube: Running Tests

The tests are written using Jest and there are two type of tests in place: unit and integration.

You can run the unit tests using the following command:

`pnpm test`
For the integration tests you have some minor steps before. First, make your the project is compiled and then start the local server using the following command in the root directory:

`pnpm start:test`

This will spin the local server using the `test` environment and a local `env.json` file. Then, your tests also need a `.env` file in place with the required environment variables. You can create a `.env` file and add the required environment variables. Finally, you can run the integration tests using the following command:

`pnpm test:e2e`
