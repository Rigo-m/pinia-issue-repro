import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({
    test: "a",
  }),
  actions: {
    async hydrate() {
      return new Promise((resolve) => setTimeout(resolve, 500));
    },
  },
});
