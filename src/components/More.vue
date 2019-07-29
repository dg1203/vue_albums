<template>
  <button @click="loadMore">Wczytaj więcej</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "More",
  methods: {
    ...mapActions(['loadMore'])
  }
}
</script>

<style>
  button {
    cursor: pointer;
    background: #2c3e50;
    width: 300px;
    height: 50px;
    color: #42b983;
    font-weight: bold;
    margin-top: 25px;
    text-transform: uppercase;
    transition: .3s;
    border: none;
    outline: none;
  }
  button:hover {
    box-shadow: 0px 0px 10px 2px #42b983;
  }
</style>
