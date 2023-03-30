import Component from "../../templates/components";
import { PageIds } from "../../../pages/app";


const Buttons = [
   {
      id: PageIds.MainPage,
      text: 'Main',
   },
   {
      id: PageIds.SkillsPage,
      text: 'Skills',
   },
   {
      id: PageIds.CodeExample,
      text: 'Code Example',
   },
   {
      id: PageIds.ProjectsPage,
      text: 'Projects',
   },
   {
      id: PageIds.SocailPage,
      text: 'Social',
   }
]

class Header extends Component {
   constructor(tagName: string, className: string){
      super(tagName, className);
   }

   async renderPageButtons(){
      const body = document.querySelector('body') as HTMLElement;
      const pageButtons = document.createElement('div');
      const headerWrapper = document.createElement('div');
      const name = document.createElement('div');
      const burgerButton = document.createElement('div');
      const burgerWrapper = document.createElement('div');

      pageButtons.classList.add('header__buttons');
      headerWrapper.classList.add('header__wrapper');
      burgerButton.classList.add('burger__button');
      burgerWrapper.classList.add('burger__wrapper');
      name.classList.add('header__name');

      name.innerText = 'Mark'
      burgerButton.innerHTML = 'X'

      burgerButton.addEventListener('click', () =>{
         burgerWrapper.classList.toggle('active')
      })

      Buttons.forEach((button)=>{
         const buttonHTML = document.createElement('a');
         buttonHTML.href = `#${button.id}`;
         buttonHTML.innerText = button.text;
         pageButtons.append(buttonHTML);
      })
      const clone = pageButtons.cloneNode(true);
      burgerWrapper.append(clone)
      headerWrapper.append(name,pageButtons,burgerButton,burgerWrapper);
      
     
      this.container.append(headerWrapper)
      
      window.addEventListener('scroll', () =>{
         let value = window.scrollY;
         if(value >= 1){
            const header = document.querySelector('.header') as HTMLElement;
            header.classList.add('header__active')
         }else{
            const header = document.querySelector('.header') as HTMLElement;
            header.classList.remove('header__active')
         }
      })
   }

   async setBurger(){
      const burgerWrapper = document.querySelector('.burger__wrapper') as HTMLElement;
      const burgerText = burgerWrapper.querySelector('.header__buttons') as HTMLElement;
      const burgerButton = document.querySelector('.burger__button') as HTMLElement;
      const body = document.querySelector('body') as HTMLElement;
      burgerText.classList.add('burger')

      const pageLinks = burgerText.querySelectorAll('a');
      pageLinks.forEach((e)=>{
         e.addEventListener('click',()=>{
            burgerWrapper.classList.remove('active')
         })
      })

      if (window.matchMedia('(min-width < 768px)')) {
         burgerWrapper.classList.remove('active')
      }
      
      body.addEventListener('click', ()=>{
         if(burgerWrapper.classList.contains('active')){
            console.log('test')
            burgerButton.style.color = '#000'
            body.style.overflowY = 'hidden';
         }else{
            burgerButton.style.color = 'white'
            body.style.overflowY = 'scroll';
         }
      })
   }

   render(){
      this.renderPageButtons().then((data) =>{this.setBurger()})
      return this.container
   }
}

export default Header