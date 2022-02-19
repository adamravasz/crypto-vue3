<template>
  <h1 class="text-3xl font-bold underline">
    Coin: {{ coinId}}
  </h1>
</template>

<script>
export default {
    computed: {
        coinId() {
            return this.$route.params.id;
        },
    },
};
</script>