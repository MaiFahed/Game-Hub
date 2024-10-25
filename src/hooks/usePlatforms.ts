import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
 
const APIClient = new apiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
  queryKey:['platforms'],
  queryFn: APIClient.getAll,
  staleTime: 24*60*60*1000,
})

export default usePlatforms