import { create } from 'zustand';

interface SearchTextStore {
  searchText: string,
  setSearchText: (text: string) => void;
}
const useSearchTextStore = create<SearchTextStore>((set) => ({
  searchText: '',
  setSearchText: (text) => set({ searchText: text })
}));

export default useSearchTextStore;