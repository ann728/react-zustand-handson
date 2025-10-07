import {create} from 'zustand';
import {persist} from "zustand/middleware";

const useStore = create(
    persist(
        (set) => ({
            count: 0,//初期値
            text: '',//初期値

            increment: () => set((state) => ({count: state.count + 1})),//状態を更新するためのset関数
            decrement: () => set((state) => ({count: state.count - 1})),
            setText: (newText) => set({text: newText})
        }),
        // localStorageに保存されるキー名
        {name:'app-storage',}
        ));

export default useStore;