import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyClpvcUyl31wMd7DJZQnnzI006S99u9nnM',
        libraries: 'places', 
        region: 'VI',
        language: 'vi'
    }
});