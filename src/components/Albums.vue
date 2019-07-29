<template>
  <div>
    <h1>Albums list</h1>
    <div class="container">
      <div v-for="album in allAlbums" :key="album.id" class="card">
        {{ album.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Albums",
  computed: mapGetters(['allAlbums']),
  methods: {
    ...mapActions(['fetchAlbums'])
  },
  created() {
    this.fetchAlbums()
  }
}
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 31%;
    justify-content: space-around;
    background: #42b983;
    box-shadow: 0px 0px 10px 2px #2c3e50;
    margin: 15px 0px;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s;
  }
  .card:hover {
    box-shadow: 0px 0px 10px 4px #2c3e50;
  }
</style>

