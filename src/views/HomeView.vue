<template>
  <MapView></MapView>
  <searchBar></searchBar>
  <myLocationBtn></myLocationBtn>
  <tripDetails></tripDetails>
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/mapview/MapView.vue'
import myLocationBtn from '@/components/myLocationBtn/myLocationBtn.vue'
import searchBar from '@/components/searchbar/searchBar.vue';
import tripDetails from '@/components/tripDetails/tripDetails.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, myLocationBtn, searchBar, tripDetails },
  setup(){
    usePlacesStore();
  }
});
</script>
