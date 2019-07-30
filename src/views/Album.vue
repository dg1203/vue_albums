<template>
  <div class="container">
    <Album />
  </div>
</template>

<script>
import Album from '@/components/Album.vue'
export default {
  name: 'album',
  components: {
    Album
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
</style>
