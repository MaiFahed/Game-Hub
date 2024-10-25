import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse <T> {
  count: number;
  results: T[];
}

const apiKey = "157ea6479f584f33b7def369c84e77df";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

class apiClient<T>{
  endpoint: string;

  constructor(endpoint: string){
    this.endpoint=endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data)
  }

}

export default apiClient;
