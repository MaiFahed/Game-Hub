import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import ms from "ms";
import { Platform } from "../entities/Platform";

const APIClient = new apiClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
  queryKey:['platforms'],
  queryFn: APIClient.getAll,
  staleTime: ms('24h'),
})

export default usePlatforms