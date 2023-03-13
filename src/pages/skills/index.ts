import Page from '../../core/templates/page'

class SkillsPage extends Page {
   static TextObject = {
      MainTitle:"Skills Page",
   }

   constructor(id: string){
      super(id)
   }

   addSkills(){
      const skillsWrapper = document.createElement("div");
      const skillsContainer = document.createElement("div");
      const skillsItemOne = document.createElement("div");
      const skillsItemTwo = document.createElement("div");

      skillsWrapper.classList.add('skills__wrapper');
      skillsContainer.classList.add('skills__container');
      skillsItemOne.classList.add('skills__item');
      skillsItemTwo.classList.add('skills__item');

      skillsItemOne.innerHTML = "My Softskills:"
      skillsItemTwo.innerHTML = "My Hardskills:"

      skillsContainer.append(skillsItemOne, skillsItemTwo)
      skillsWrapper.appendChild(skillsContainer);
      this.container.append(skillsWrapper);
   }

   render() {
      this.addSkills()
      return this.container
   }
}
export default SkillsPage;