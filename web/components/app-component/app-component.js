import Vue from 'vue';
import template from './app-component.tpl.html';
import ProjectComponent from '../project-component/project-component.js';

Vue.component('project', ProjectComponent);

const AppComponent = Vue.extend({
   template,
   created() {

   },
   data: () => ({
      projects: ['BYOx', 'FIRST', 'ALGOT']
   })
});

export default AppComponent;