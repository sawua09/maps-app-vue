import { useMapStore, usePlacesStore } from "@/composables"
import { defineComponent, onMounted, ref, watch } from "vue"
import mapboxgl from "mapbox-gl";


export default defineComponent({
    name: 'MapView',
    setup() {
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const mapElement = ref<HTMLDivElement>()
        const { setMap } = useMapStore()
        const initMap = async () => {
            if (!mapElement.value) throw new Error('El Div no existe');
            if (!userLocation.value) throw new Error('user location no existe');
            await Promise.resolve()
            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value,
                zoom: 15
            });

            const myLocationPopup = new mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(
                    `
                <h4>Aquí Estoy</h4>
                <p>${userLocation.value}</p>
                `
                )

            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map);
            setMap(map);
        }
        onMounted(() => {
            if (isUserLocationReady.value) return initMap()
            console.log('No tengo localización aún');
        })
        watch(
            isUserLocationReady, (newVal) => {
                if (isUserLocationReady.value) initMap()

            }
        )
        return {
            isUserLocationReady,
            mapElement
        }
    }
})