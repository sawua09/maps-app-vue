import { createStore } from 'vuex';
import mapModule from './map';
import { MapState } from './map/state';

// My custom modules
import placesModule from './places';
import { PlacesState } from './places/state';


export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  places: PlacesState,
  map: MapState,
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule,
  }
})