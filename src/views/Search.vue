<template>
  <h1 class="text-3xl font-bold underline">Search</h1>
  <listed-coin v-for="coin in coins" :key="coin.id" :coin="coin" />
</template>
<script>
import ListedCoin from "../components/ListedCoin.vue";
export default {
  components: { ListedCoin },
  data() {
    return {
      coins: [
        {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "BTC",
          market_cap_rank: 1,
          thumb:
            "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
          large:
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        },
        {
          id: "wrapped-bitcoin",
          name: "Wrapped Bitcoin",
          symbol: "WBTC",
          market_cap_rank: 18,
          thumb:
            "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png",
          large:
            "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png",
        },
        {
          id: "bitcoin-cash",
          name: "Bitcoin Cash",
          symbol: "BCH",
          market_cap_rank: 25,
          thumb:
            "https://assets.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png",
          large:
            "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png",
        },
        {
          id: "bitcoin-cash-sv",
          name: "Bitcoin SV",
          symbol: "BSV",
          market_cap_rank: 68,
          thumb: "https://assets.coingecko.com/coins/images/6799/thumb/BSV.png",
          large: "https://assets.coingecko.com/coins/images/6799/large/BSV.png",
        },
        {
          id: "bitcoin-gold",
          name: "Bitcoin Gold",
          symbol: "BTG",
          market_cap_rank: 141,
          thumb:
            "https://assets.coingecko.com/coins/images/1043/thumb/bitcoin-gold-logo.png",
          large:
            "https://assets.coingecko.com/coins/images/1043/large/bitcoin-gold-logo.png",
        },
        {
          id: "interest-bearing-bitcoin",
          name: "Interest Bearing Bitcoin",
          symbol: "IBBTC",
          market_cap_rank: 260,
          thumb:
            "https://assets.coingecko.com/coins/images/15500/thumb/ibbtc.png",
          large:
            "https://assets.coingecko.com/coins/images/15500/large/ibbtc.png",
        },
        {
          id: "bitcoin-diamond",
          name: "Bitcoin Diamond",
          symbol: "BCD",
          market_cap_rank: 319,
          thumb:
            "https://assets.coingecko.com/coins/images/1254/thumb/bitcoin-diamond.png",
          large:
            "https://assets.coingecko.com/coins/images/1254/large/bitcoin-diamond.png",
        },
        {
          id: "oxbitcoin",
          name: "0xBitcoin",
          symbol: "0XBTC",
          market_cap_rank: 1026,
          thumb:
            "https://assets.coingecko.com/coins/images/4454/thumb/0xbtc.png",
          large:
            "https://assets.coingecko.com/coins/images/4454/large/0xbtc.png",
        },
        {
          id: "bitcoin-2",
          name: "Bitcoin 2",
          symbol: "BTC2",
          market_cap_rank: 1067,
          thumb:
            "https://assets.coingecko.com/coins/images/5925/thumb/bitcoin2_logo256.png",
          large:
            "https://assets.coingecko.com/coins/images/5925/large/bitcoin2_logo256.png",
        },
        {
          id: "bitcoinz",
          name: "BitcoinZ",
          symbol: "BTCZ",
          market_cap_rank: 1422,
          thumb:
            "https://assets.coingecko.com/coins/images/1004/thumb/BTCZ_LOGO-1.png",
          large:
            "https://assets.coingecko.com/coins/images/1004/large/BTCZ_LOGO-1.png",
        },
        {
          id: "mirrored-bitcoin",
          name: "Mirrored Bitcoin",
          symbol: "MBTC",
          market_cap_rank: 1560,
          thumb:
            "https://assets.coingecko.com/coins/images/14058/thumb/mirror_logo_transparent.png",
          large:
            "https://assets.coingecko.com/coins/images/14058/large/mirror_logo_transparent.png",
        },
        {
          id: "bitcoinstaking",
          name: "BitcoinStaking",
          symbol: "BSK",
          market_cap_rank: 1639,
          thumb:
            "https://assets.coingecko.com/coins/images/12978/thumb/bsk.png",
          large:
            "https://assets.coingecko.com/coins/images/12978/large/bsk.png",
        },
      ],
    };
  },
};
</script>