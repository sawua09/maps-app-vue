import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: '5',
        language: 'es',
        access_token: 'pk.eyJ1Ijoic2F3dWEwOSIsImEiOiJjbDg5ZTEyeXIwMTV6M3BxdXN3NHNiMHl6In0.RfVwqrldH79NK2ByPCEcZQ'
    }
})

export default searchApi;