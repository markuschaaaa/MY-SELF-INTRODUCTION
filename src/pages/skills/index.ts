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
      const skillsItemWrapper = document.createElement("div");
      const skillsItemOne = document.createElement("div");
      const skillsItemTwo = document.createElement("div");
      const skillsItemThree = document.createElement("div");

      const images = ['css.png', 'html.png', 'js.png', 'git.png', 'gitt.png', 'node.png', 'sass.png', 'ts.png']

      skillsWrapper.classList.add('skills__wrapper');
      skillsContainer.classList.add('skills__container');
      skillsItemWrapper.classList.add('skillsitem__wrapper');
      skillsItemOne.classList.add('skills__item');
      skillsItemTwo.classList.add('skills__item');
      skillsItemThree.classList.add('skills__stack');

      skillsItemThree.innerText = 'My stack is:'
      images.forEach((e)=>{
         const img = document.createElement('img');
         img.classList.add('skills__img')
         img.src = `/src/assets/logos/` + e;

         skillsItemThree.append(img)
      })

      skillsItemOne.innerHTML = `My Softskills:\n<ul class="skills__list"><li>Teamwork</li><li>Reliability and result orientation</li><li>Determined and conscientious</li><li>Self-Motivation and Independence</li><li>Communication</li></ul>`
      skillsItemTwo.innerHTML = `My Hardskills:\n<ul class="skills__list"><li>Object-oriented programming (OOP) languages.</li><li>BEM-block element modifier methodology</li><li>Git version control</li></ul>`;

      skillsItemWrapper.append(skillsItemOne,skillsItemTwo)
      skillsContainer.append(skillsItemWrapper,skillsItemThree)
      skillsWrapper.appendChild(skillsContainer);
      this.container.append(skillsWrapper);
   }

   render() {
      this.addSkills()
      return this.container
   }
}
export default SkillsPage;