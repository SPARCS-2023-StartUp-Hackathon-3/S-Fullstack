import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IGenerateStore {
  title: string;
  color: string;
  desc: string;
  imageUrl?: string;
  selectImageUrls?: Array<string>;
  parentId?: number;
  setTitle: (data: string) => void;
  setColor: (data: string) => void;
  setDesc: (data: string) => void;
  setImageUrl: (data: string) => void;
  setSelectImageUrls: (data: Array<string> | undefined) => void;
  setParentId: (data: boolean) => void;
  resetAll: () => void;
}

interface IUserInfoStore {
  id: number;
  username: string;
  setId: (data: number) => void;
  setUsername: (data: string) => void;
}

export const useUserInfoStore = create(
  persist<IUserInfoStore>(
    (set) => ({
      id: 0,
      username: '',
      setId: (data) => {
        set((state) => ({ ...state, id: data }));
      },
      setUsername: (data) => {
        set((state) => ({ ...state, username: data }));
      },
    }),
    {
      name: 'user-info-store',
    }
  )
);

export const useGenerateStore = create(
  persist<IGenerateStore>(
    (set) => ({
      title: '',
      color: '',
      desc: '',
      imageUrl: undefined,
      selectImageUrls: undefined,
      parentId: undefined,
      setTitle: (data) => {
        set((state) => ({ ...state, title: data }));
      },
      setColor: (data) => {
        set((state) => ({ ...state, color: data }));
      },
      setDesc: (data) => {
        set((state) => ({ ...state, desc: data }));
      },
      setImageUrl: (data) => {
        set((state) => ({ ...state, imageUrl: data }));
      },
      setSelectImageUrls: (data) => {
        set((state) => ({ ...state, selectImageUrls: data }));
      },
      setParentId: (data) => {
        set((state) => ({ ...state, isNew: data }));
      },
      resetAll: () => {
        set({
          title: '',
          color: '',
          desc: '',
          imageUrl: undefined,
          selectImageUrls: undefined,
          parentId: undefined,
        });
      },
    }),
    {
      name: 'generate-store',
    }
  )
);
