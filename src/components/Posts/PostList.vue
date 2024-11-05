<template>

    <div v-for="post in posts" :key="post.id">
        <div class="post-preview">
            <PostSingle :post="post"></PostSingle>
        </div>

        <hr class="my-4" />
    </div>


</template>

<script>
import PostSingle from './PostSingle.vue'
export default {
    components: {
        PostSingle
    },
    props: ["posts"]
}
</script>

<style></style>