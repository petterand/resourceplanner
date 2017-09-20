import vue from 'vue';

import AppComponent from './components/app-component/app-component.js';

new vue({
   el: '#app',
   components: {
      'resource-plan-app': AppComponent
   }
})