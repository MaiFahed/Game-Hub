import axios from "axios";

const apiKey = "157ea6479f584f33b7def369c84e77df";


export interface FetchResponse <T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

export default apiClient;
