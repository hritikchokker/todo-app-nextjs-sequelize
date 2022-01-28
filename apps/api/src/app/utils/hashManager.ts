import { hash, compare, hashSync } from 'bcryptjs';
export const createHash = (str: string, salt = 10): Promise<any> => {
  return new Promise((resolve, reject) => {
    hash(str, salt, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve(hash);
    });
  });
};

export const createHashSync = (str: string, salt = 10) => {
  return hashSync(str, salt);
};
export const decryptHash = (str: string, hash: string) => {
  return new Promise((resolve, reject) => {
    compare(str, hash).then(resolve).catch(reject);
  });
};
