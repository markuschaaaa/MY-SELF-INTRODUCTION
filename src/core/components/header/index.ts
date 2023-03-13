import Component from "../../templates/components";
import { PageIds } from "../../../pages/app";


const Buttons = [
   {
      id: PageIds.MainPage,
      text: 'Main Page',
   },
   {
      id: PageIds.SkillsPage,
      text: 'Skills Page',
   },
   {
      id: PageIds.CodeExample,
      text: 'CodeExample Page',
   },
   {
      id: PageIds.ProjectsPage,
      text: 'Project Page',
   },
   {
      id: PageIds.SocailPage,
      text: 'Social Page',
   }
]

class Header extends Component {
   constructor(tagName: string, className: string){
      super(tagName, className);
   }

   renderPageButtons(){
      const pageButtons = document.createElement('div');
      const headerWrapper = document.createElement('div');
      const name = document.createElement('div');
      pageButtons.classList.add('header__buttons');
      headerWrapper.classList.add('header__wrapper');
      name.classList.add('header__name');
      name.innerText = 'Mark'
      Buttons.forEach((button)=>{
         const buttonHTML = document.createElement('a');
         buttonHTML.href = `#${button.id}`;
         buttonHTML.innerText = button.text;
         pageButtons.append(buttonHTML);
      })
      headerWrapper.appendChild(name);
      headerWrapper.appendChild(pageButtons);
      this.container.append(headerWrapper)
      
      window.addEventListener('scroll', () =>{
         let value = window.scrollY;
         if(value >= 20){
            const header = document.querySelector('.header') as HTMLElement;
            header.classList.add('header__active')
         }else{
            const header = document.querySelector('.header') as HTMLElement;
            header.classList.remove('header__active')
         }
      })
   }

   render(){
      this.renderPageButtons()
      return this.container
   }
}

export default Header