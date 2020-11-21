<template>
 <div class="home">
   IMPREDDIT
 </div>

</template>

<script setup>
  import API from '../lib/API'

  async function getPosts() {
    const postsData = await API.getPosts('all')
    console.log(postsData);
  }

  getPosts()


</script>
