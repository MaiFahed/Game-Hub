import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import { Screenshot } from "../entities/Screenshot";


const useScreenshots = (gameId: number) => {
    const APIClient = new apiClient<Screenshot>(`/games/${gameId}/screenshots`);
    return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: APIClient.getAll,
})}

export default useScreenshots

