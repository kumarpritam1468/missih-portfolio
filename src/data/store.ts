import { create } from 'zustand';

type Store = {
    menuOpen: boolean
    setMenuOpen: (arg0: boolean) => void
}

const useStore = create<Store>((set) => ({
    menuOpen: false,
    setMenuOpen: (isOpen: boolean) => set({ menuOpen: isOpen }),
}));

export default useStore;
