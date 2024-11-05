import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import { Trailer } from "../entities/Trailer";


const useTrailers = (gameId: number) => {
    const APIClient = new apiClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: APIClient.getAll,
})}

export default useTrailers

