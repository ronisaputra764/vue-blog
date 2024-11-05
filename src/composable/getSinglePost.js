import { ref } from 'vue'
import { myCollection } from '@/firebase/config'
import { getDoc, doc } from 'firebase/firestore'


const getSinglePost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {

        try {
            const res = await getDoc(doc(myCollection, id))

            if (res.exists()) {
                post.value = { id: res.id, ...res.data() }
            } else {
                error.value = 'Dokumen tidak ditemukan'
            }

        } catch (err) {
            error.value = err.message
        }
    }
    return { post, error, load }
}
export default getSinglePost