<template>
    <div>
        
    </div>

    <!-- Page Header-->
    <header class="masthead" >
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="page-heading">
                        <h1>Crate new Post</h1>

                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="my-5">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-floating">
                                <input class="form-control" type="text" placeholder="Tittle"
                                    v-model="title" />
                                <label for="name">Title</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A title is required.
                                </div>
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Body" style="height: 12rem"
                                    v-model="body"></textarea>
                                <label for="message">Input body post</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A Body is required.
                                </div>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" type="text" placeholder="Input Tags" v-model="tag" @keydown.enter.prevent="handleKeyDown"/>
                                <label for="name">Tags</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">Tags is required.</div>
                                <span style="margin-right: 15px;" v-for="tag in tags" :key="tag"> {{ tag }}</span>
                            </div>
                            <br />

                            <div class="d-none">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a
                                        href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>

                            <div class="d-none" id="submitErrorMessage">
                                <div class="text-center text-danger mb-3">Error sending message!</div>
                            </div>
                            <!-- Submit Button-->
                            <button class="btn btn-primary text-uppercase "
                                type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<script>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { addDoc } from 'firebase/firestore'
import { myCollection } from '@/firebase/config'

export default {
    setup() {
        const route = useRouter()

        const title = ref("")
        const body = ref("")
        const tag = ref("")
        const tags = ref([])

        const handleKeyDown = () => {
            tags.value.push(tag.value)
            tag.value = ""
        }

        const handleSubmit = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            }
            await addDoc(myCollection, post)

            route.push({
                name: 'home'
            })
        }

        return { title, body, tag, tags, handleSubmit, handleKeyDown}
    }

}
</script>

<style scoped>
.masthead {
    background-image: url('../../../public/img/post-bg.jpg')
}
</style>