<template>
  <router-link
    :to="`/coin/${coin.id}`"
    class="flex items-center px-2 py-3 bg-gray-100 hover:bg-gray-200"
  >
    <img :src="coin.large" class="h-10 w-10" />
    <div class="ml-2 flex-1">
      <div class="font-semibold">
        {{ coin.name }}
      </div>

      <div>
        {{ coin.symbol }}
      </div>
    </div>

    <div class="text-lg text-green-700">{{ coin.market_cap_rank }}</div>
  </router-link>
</template>

<script>
export default {
  props: ["coin"],
};
</script>