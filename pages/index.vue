<template>
  <div>
    {{ test }}
    -
    {{ test2 }}
  </div>
</template>

<script>
import { useTestStore } from "~/stores/test";
import { ref } from "@nuxtjs/composition-api";
import { storeToRefs } from "pinia";
export default {
  async asnycData({ $pinia }) {
    const store = useTestStore($pinia);
    await store.hydrate();
  },
  setup() {
    const store = useTestStore();
    const { test } = storeToRefs(store);
    const test2 = ref(store.test);

    return {
      test,
      test2,
    };
  },
};
</script>
