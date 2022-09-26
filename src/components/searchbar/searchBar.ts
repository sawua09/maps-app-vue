import { usePlacesStore } from "@/composables";
import { computed, defineComponent, ref } from "vue";
import SearchResults from '../searchresults/searchResults.vue';
export default defineComponent({
    name: 'searchBar',
    components: { SearchResults },
    setup() {
        const debounceTimeout = ref()
        const debounceValue = ref('')
        const { searchPlacesByTerm } = usePlacesStore();

        return {
            debounceValue,
            searchTerm: computed({
                get() {
                    return debounceValue.value
                },
                set(val: string) {
                    if (debounceTimeout.value) clearTimeout(debounceTimeout.value)
                    debounceTimeout.value = setTimeout(() => {
                        debounceValue.value = val
                        searchPlacesByTerm(val)
                    }, 1000)
                }
            })
        }
    },
})