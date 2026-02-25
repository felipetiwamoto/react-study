import { create } from "zustand";

type Category = {
    id: number;
    name: string;
};

type CategoryStore = {
    categories: Category[];
    add: (name: string) => void;
    update: (id: number, newName: string) => void;
    remove: (id: number) => void;
};

export const useCategoriesStore = create<CategoryStore>((set) => ({
    categories: [],
    add: (name: string): void => set((state: any) => ({
        categories: [...state.categories, { id: Date.now(), name }]
    })),
    update: (id: number, newName: string): void => set((state: any) => ({
        categories: state.categories.map((c: any) => c.id === id ? { ...c, name: newName } : c)
    })),
    remove: (id: number): void => set((state: any) => ({
        categories: state.categories.filter((c: any) => c.id !== id)
    }))
}))
