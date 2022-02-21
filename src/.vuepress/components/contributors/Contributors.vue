<script setup lang="ts">
import contributors from './contributors.json'
</script>

<template>
  <div flex="~ wrap gap-1" justify-center>
    <a v-for="c of contributors" :key="c" :href="`https://github.com/${c}`">
      <img :src="`https://github.com/${c}.png`" rounded-full h-10 w-10>
    </a>
  </div>
</template>

<style>
.justify-center,[justify-center=""]{justify-content:center;}
.rounded-full,[rounded-full=""]{border-radius:9999px;}
.h-10,[h-10=""]{height:2.5rem;}
w-10,[w-10=""]{width:2.5rem;}
.flex-wrap,[flex-wrap=""],[flex~="wrap"]{flex-wrap:wrap;}
.gap-1,[flex~="gap-1"]{grid-gap:0.25rem;gap:0.25rem;}


</style>
