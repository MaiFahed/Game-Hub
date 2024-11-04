import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import { Game } from "./useGames";

const APIClient = new apiClient<Game>('/games');

const useDetailGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => APIClient.get(slug),
})

export default useDetailGame