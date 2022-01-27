import { v4 as uuidv4 } from 'uuid';
export const getV4Id = (): string => {
  return uuidv4();
};
