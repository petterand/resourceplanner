import Vue from 'vue';
import template from './project-component.tpl.html';
import TeamMembers from '../../services/TeamMembers';

const ProjectComponent = Vue.extend({
   template,
   props: ['name'],
   data: () => ({
      teamMembers: TeamMembers.getAllMembers(),
      numRows: 5
   })
});

export default ProjectComponent;