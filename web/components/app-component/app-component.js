import Vue from 'vue';
import template from './app-component.tpl.html';
import ProjectComponent from '../project-component/project-component.js';

Vue.component('project', ProjectComponent);

function monthDiff(d1, d2) {
   return d2.getMonth() - d1.getMonth() + (12 * (d2.getFullYear() - d1.getFullYear()));
}

function dateToString(d) {
   return d.toLocaleDateString('sv-se', { month: 'long' });
}

function getMonthArray() {
   var months = [];
   var startDate = new Date();
   startDate.setMonth(startDate.getMonth() - 3);
   months.push(dateToString(startDate));
   var endDate = new Date(startDate.getFullYear() + 1, 11, 31);
   var diff = monthDiff(startDate, endDate);
   for (var i = 0; i < diff; i++) {
      startDate.setMonth(startDate.getMonth() + 1);
      months.push(dateToString(startDate));
   }

   return months;
}


const AppComponent = Vue.extend({
   template,
   created() {

   },
   data: () => ({
      projects: ['BYOx', 'FIRST', 'ALGOT'],
      months: getMonthArray()
   })
});

export default AppComponent;