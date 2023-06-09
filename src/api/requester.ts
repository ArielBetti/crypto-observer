import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const requester = (config?: AxiosRequestConfig, contentType?: string) => {
  const service = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    ...config,
  });

  service.interceptors.request.use(
    (req) => {
      // @ts-expect-error
      req.headers = {
        'Content-Type': contentType || 'application/json',
        ...config?.headers,
      };

      return req;
    },
    (error) => Promise.reject(error)
  );

  service.interceptors.response.use(
    (res) => res,
    (error) => Promise.reject(error)
  );

  return {
    async get<T>(uri: string): Promise<AxiosResponse<T>> {
      const response = await service.get<T>(uri);
      return response;
    },
    async post<T>(uri: string, data: unknown): Promise<AxiosResponse<T>> {
      const response = await service.post<T>(uri, data);
      return response;
    },
    async put<T>(uri: string, data: unknown): Promise<AxiosResponse<T>> {
      const response = await service.put<T>(uri, data);
      return response;
    },
    async patch<T>(uri: string, data: unknown): Promise<AxiosResponse<T>> {
      const response = await service.patch<T>(uri, data);
      return response;
    },
    async delete<T>(uri: string, data: unknown): Promise<AxiosResponse<T>> {
      const response = await service.delete<T>(uri, { data });
      return response;
    },
  };
};
