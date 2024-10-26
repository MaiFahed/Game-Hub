import { useQuery } from "@tanstack/react-query";
import Genres from "../data/Genres";
import apiClient from "../services/apiClient";
import ms from 'ms'

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const APIClient = new apiClient<Genre>('/genres');
const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: APIClient.getAll,
  staleTime: ms('24h'), //24h refresh the data after 24h
  initialData: {count: Genres.length, next: null, results: Genres }
})

export default useGenre