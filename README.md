## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository, with support for deployment to Google Cloud run.

The main differences from the base NestJS project are:
- Installation of the ```@nestjs/config package```.
- Server listening port will use the ```PORT``` Environment variable if set.
- A global prefix (e.g. ```/api/```) can be set with ```GLOBAL_PREFIX``` environment variable. If not set, no prefix is configured.
- Addition of a 2 step builder Dockerfile, .dockerignore. 
- Addition of .gcloudignore

TODO
- Add in support for Bearer token verification.

## Installation

```bash
$ npm install
```
Create a ```.env``` file if you wish to set environment variables locally.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

### Quick Deployment
Clicking this button from your Github repo will deploy the code straight to Cloud Run.

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

### Manual Deployment

The following will build and deploy the current source directory to a new service. (Replace ```SERVICE``` with the name you want for your service)
```bash
gcloud beta run deploy SERVICE --source .
```


## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
