import {create} from "zustand"

interface SideBarState {
    isOpen: boolean
    setIsOpen: (isLoading: boolean) => void
}

export const useGeneratorStore = create<SideBarState>()((set) => ({
    isOpen: true,
    setIsOpen: (isOpen: boolean) => set({isOpen})
}))