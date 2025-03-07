import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "019d6288ddbf4c6c801a161e29d08a7d",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // "config" is for our useGames hook because we pass extra parameters in the query
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };

  get = (id: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((response) => response.data);
  };
}

export default APIClient;
