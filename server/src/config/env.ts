import cacheEnv from '../utils/cacheEnv';

const env = {
    PORT: cacheEnv('PORT', 5000),
    API_PREFIX: cacheEnv('API_PREFIX', '/api'),
    MONGO_URI:  cacheEnv('MONGO_URI', 'Hello'),
    BASE_URL: cacheEnv('BASE_URL'),
    API_KEY: cacheEnv('API_KEY')
}

export default env