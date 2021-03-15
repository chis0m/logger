import { config } from 'dotenv';
config();

let env = {
    APP: process.env.APP_NAME,
    URL: process.env.APP_URL,
    PORT: process.env.PORT,
    ENV: process.env.NODE_ENV?.trim() || 'development'
};

switch (env.ENV) {
    case 'production':
        env.PORT = process.env.PORT;
        env.URL = process.env.URL;
        break;
    case 'development':
        env.URL = process.env.URL;
        env.PORT = process.env.DEV_PORT;
        break;
    default:
        env.PORT = process.env.PORT;
        env.URL = process.env.PORT;
        break;
}

export default env;