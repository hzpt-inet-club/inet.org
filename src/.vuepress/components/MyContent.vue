<script setup lang="ts">
import {datas} from './datas'
</script>

<template>
<div>
  <ul>
    <li v-for="(value,key) in datas" v-bind:key="key">
      <b>{{value.name}}</b>
      <a :href="value.link" style="float:right;text-decoration:none">Read more →</a>
      <ul v-if="value.next">
        <li v-for="(data,key) in value.nextValue" v-bind:key="key">
          <b>{{data.name}}</b>
          <a :href="data.link" style="float:right;text-decoration:none">Read more →</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<style>

</style>
