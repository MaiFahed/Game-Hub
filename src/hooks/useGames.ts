import { GameQuery } from "./../App";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const APIClient = new apiClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      APIClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.order,
          search: gameQuery.search,
        },
      }),
  });
export default useGames;
