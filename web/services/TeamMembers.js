let members = [
   {
      name: 'Petter',
      role: 'TL'
   },
   {
      name: 'Pierre',
      role: 'Developer'
   },
   {
      name: 'Susanne',
      role: 'Test'
   }
];

function getAllMembers() {
   return members;
}

const TeamMembers = {
   getAllMembers: getAllMembers
};

export default TeamMembers;