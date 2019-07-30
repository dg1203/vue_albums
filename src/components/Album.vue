<template>
  <div class="container">
    <h1 v-if="album">
      {{ album.title }}
    </h1>
    <div v-for="photo in photos" :key="photo.id" class="photo">
      <img :src="photo.url" />
      <div class="layer">{{photo.title}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'Album',
  computed: mapGetters(['allAlbums']),
  methods: {
    async fetchPhotos() {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.$route.params.albumId}`);
      this.photos = response.data
    }
  },
  data() {
    return {
      album: null,
      photos: []
    }
  },
  created() {
    const albumSelected = this.allAlbums.filter(album => album.id === parseInt(this.$route.params.albumId))
    this.album = albumSelected[0];
    this.fetchPhotos();
  }
}
</script>

<style>
  .container {
    width: 100%;
  }
  h1 {
    width: 100%;
  }
  .photo_container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
  }
  .photo {
    width: 200px;
    height: 200px;
    display: flex;
    position: relative;
    margin: 15px 0px;
    overflow: hidden;
  }
  .photo .layer {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 100%;
    background: rgba(0, 0, 0, .7);
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  }
  .photo:hover .layer {
    margin-top: 0%;
  }
  .photo img {
    width: 100%;
    height: 100%;;
  }
</style>
