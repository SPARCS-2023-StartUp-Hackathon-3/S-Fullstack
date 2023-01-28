import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IGenerateStore {
  title: string;
  color: string;
  desc: string;
  imageUrl: string;
  parentId: number;
  setTitle: (data: string) => void;
  setColor: (data: string) => void;
  setDesc: (data: string) => void;
  setImg: (data: string) => void;
  setParentId: (data: boolean) => void;
  resetAll: () => void;
}

export const useGenerateStore = create(
  persist<IGenerateStore>(
    (set) => ({
      title: '',
      color: '',
      desc: '',
      imageUrl: '',
      parentId: 0,
      setTitle: (data) => {
        set((state) => ({ ...state, title: data }));
      },
      setColor: (data) => {
        set((state) => ({ ...state, color: data }));
      },
      setDesc: (data) => {
        set((state) => ({ ...state, desc: data }));
      },
      setImg: (data) => {
        set((state) => ({ ...state, imageUrl: data }));
      },
      setParentId: (data) => {
        set((state) => ({ ...state, isNew: data }));
      },
      resetAll: () => {
        set({ title: '', color: '', desc: '', imageUrl: '', parentId: 0 });
      },
    }),
    {
      name: 'generate-store',
    }
  )
);
