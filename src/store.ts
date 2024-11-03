import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  order?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (search: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (search) => set(() => ({ gameQuery: { search } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, order } })),
}));

export default useGameQueryStore;