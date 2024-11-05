<template>
    <h1 v-if="error">{{ error }}</h1>

    <div v-if="post">
        <!-- Page Header-->
        <header class="masthead">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ post.title }}</h1>
                            <span class="meta-post" style="margin-right: 15px" v-for=" tag in post.tags" :key="tag">{{
                                tag
                                }}</span>

                            <!-- <button style="padding: 2px;" class="btn btn-danger" @click="handleDelete">Delete</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template> 

<script>
import getSinglePost from "../../composable/getSinglePost"
import { useRouter } from 'vue-router'
import { myCollection } from '@/firebase/config'
import { deleteDoc, doc } from 'firebase/firestore'

export default {
    props: ['id'],
    setup(props) {

        const route = useRouter()
        
        const { post, error, load } = getSinglePost(props.id)
        load()

        const handleDelete = async () => {
            await deleteDoc(doc(myCollection, props.id))

            route.push({
                name: 'home'
            })
        }

        return { post, error, handleDelete }
    }
}
</script>

<style scoped>
.masthead {
    background-image: url('../../../public/img/post-bg.jpg')
}
</style>