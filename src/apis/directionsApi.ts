import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoic2F3dWEwOSIsImEiOiJjbDg5ZTEyeXIwMTV6M3BxdXN3NHNiMHl6In0.RfVwqrldH79NK2ByPCEcZQ'
    }
})

export default directionsApi;