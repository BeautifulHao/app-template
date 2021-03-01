import { axiosInstance } from './request';

const login = (userName: string, password: string) => {
  return axiosInstance.post('/api/login', { userName, password });
};

export { login };
