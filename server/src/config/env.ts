import cacheEnv from '../utils/cacheEnv';

const env = {
    PORT: cacheEnv('PORT', 5000),
    API_PREFIX: cacheEnv('API_PREFIX', '/api')
}

export default env