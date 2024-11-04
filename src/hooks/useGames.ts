import { useInfiniteQuery} from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse } from "../services/apiClient";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const APIClient = new apiClient<Game>('/games');

const useGames = () =>{
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      APIClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.order,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'), //24h  
  });
}
export default useGames;
