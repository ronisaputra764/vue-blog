<template>
  <!-- Page Header-->
  <header class="masthead">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">This is Blog i create by bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <h2 v-if="error">{{ error }}</h2>
        <PostList :posts="posts"></PostList>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "../components/Posts/PostList.vue"
import getPost from "../composable/getPost"

export default {
  name: 'HomeView',
  components: {
    PostList
  },
  setup() {
    const { posts, error, load } = getPost()

    load()
    return {posts, error}
  },

  mounted() {
    console.log($('.para').text())
  }
}
</script>

<style scoped>
.masthead {
  background-image: url('../assets/img/home-bg.jpg');
}
</style>
