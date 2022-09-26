import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


mapboxgl.accessToken = 'pk.eyJ1Ijoic2F3dWEwOSIsImEiOiJjbDg5ZTEyeXIwMTV6M3BxdXN3NHNiMHl6In0.RfVwqrldH79NK2ByPCEcZQ';
if (!navigator.geolocation) {
    throw new Error('Tu navegador no soporta el GeoLocation')
}

createApp(App).use(store).use(router).mount('#app')
