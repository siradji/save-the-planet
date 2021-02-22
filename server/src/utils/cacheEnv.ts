const cache: any = {};

const cacheEnv = (key: string | number, defaultValue?: string | number): string | number | undefined => {
  
    if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env!`);
  }

  if (cache[key]) return cache[key];

  cache[key] = process.env[key];

  return process.env[key];
};

export default cacheEnv