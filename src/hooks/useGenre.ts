import Genres from "../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// for dynamic data
// const useGenre = () => useData<Genre>('/genres');

// static data
const useGenre = () => ({data: Genres, isLoading: false, error: null});
export default useGenre

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenre = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };
// export default useGenre;