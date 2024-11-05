import { myCollection } from '@/firebase/config'
import { getDocs } from 'firebase/firestore'
import { ref } from 'vue'

const getPost = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await getDocs(myCollection)
            posts.value = res.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        } catch (err) {
            error.value = err.message
        }
    }
    return { posts, error, load }
}
export default getPost