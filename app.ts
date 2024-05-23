import makeAllRequests from "./modules";

const bootstrap = () => {
    makeAllRequests()
        .then(() => console.debug('Executed all requests successfully!'));
}

bootstrap();