import { Feature } from "@/interfaces/places";
import { StateInterface } from "@/store";
import { LngLat } from "@/store/map/actions";
import mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"

export const useMapStore = () => {
    const store = useStore<StateInterface>();

    return {
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),
        //getter 
        isMapReady: computed(() => store.getters['map/isMapReady']),
        //mutations
        setMap: (map: mapboxgl.Map) => store.commit('map/setMap', map),
        setPlaceMarkets: (places: Feature[]) => store.commit('map/setPlaceMarkets', places),
        //actions
        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints', { start, end })

    }
}