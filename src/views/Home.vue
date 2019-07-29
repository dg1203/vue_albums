<template>
  <div class="home">
    <Albums />
    <More />
  </div>
</template>

<script>
// @ is an alias to /src
import Albums from '@/components/Albums.vue'
import More from '@/components/More.vue'

export default {
  name: 'home',
  components: {
    Albums,
    More
  }
}
</script>
