<template>
    <!-- Page Header-->
    <header class="masthead">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>Clean Blog</h1>
                        <span class="subheading">Post by tag</span>
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
                <PostList :posts="postsWithTag"></PostList>
            </div>
        </div>
    </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue"
import getPost from "@/composable/getPost"
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: 'Tag',
    components: {
        PostList
    },
    setup() {
        const route = useRoute()
        const { posts, error, load } = getPost()

        load()

        const postsWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })

        return { posts, postsWithTag, error }
    },

    mounted() {
        console.log($('.para').text())
    }
}
</script>

<style scoped>
.masthead {
    background-image: url('../../../public/img/post-sample-image.jpg');
}
</style>