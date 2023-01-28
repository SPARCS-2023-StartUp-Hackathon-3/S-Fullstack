import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IGenerateStore {
  title: string;
  color: string;
  desc: string;
  imageUrl: string;
  isNew: boolean;
  setTitle: (data: string) => void;
  setColor: (data: string) => void;
  setDesc: (data: string) => void;
  setImg: (data: string) => void;
  setIsNew: (data: boolean) => void;
  resetAll: () => void;
}

export const useGenerateStore = create(
  persist<IGenerateStore>(
    (set) => ({
      title: '',
      color: '',
      desc: '',
      imageUrl: '',
      isNew: true,
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
      setIsNew: (data) => {
        set((state) => ({ ...state, isNew: data }));
      },
      resetAll: () => {
        set({ title: '', color: '', desc: '', imageUrl: '', isNew: true });
      },
    }),
    {
      name: 'generate-store',
    }
  )
);
