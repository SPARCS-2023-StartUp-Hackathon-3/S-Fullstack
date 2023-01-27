import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create<any>(
  persist(
    (set) => ({
      testData: [],
      setTestData: (select: any) => {
        set((state: any) => ({ ...state, testData: select }));
      },
      resetData: () => {
        set((state: any) => ({ ...state, testData: [] }));
      },
    }),
    { name: 'user-StoreName' }
  )
);
