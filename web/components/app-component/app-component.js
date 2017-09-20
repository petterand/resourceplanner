import Vue from 'vue';
import template from './app-component.tpl.html';

const AppComponent = Vue.extend({
   template,
   created() {
      console.log('App started');
   }
});

export default AppComponent;