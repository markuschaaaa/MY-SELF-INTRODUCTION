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

      for(let i = 0; i < 3; i++) {
         const span = document.createElement('span');
         span.classList.add('burger__span')
         burgerButton.append(span)
      }

      pageButtons.classList.add('header__buttons');
      headerWrapper.classList.add('header__wrapper');
      burgerButton.classList.add('burger__button');
      burgerWrapper.classList.add('burger__wrapper');
      name.classList.add('header__name');

      name.innerText = 'Mark'

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
      const burgerSpan = document.querySelectorAll('.burger__span');
      burgerText.classList.add('burger')

      const pageLinks = burgerText.querySelectorAll('a');
      pageLinks.forEach((e)=>{
         e.addEventListener('click',()=>{
            burgerWrapper.classList.remove('active')
         })
      })

      if (window.matchMedia('(min-width < 850px)')) {
         burgerWrapper.classList.remove('active')
      }
      
      body.addEventListener('click', ()=>{
         if(burgerWrapper.classList.contains('active')){
            burgerSpan.forEach((e,i)=>{
               const elem = e as HTMLElement;
               if(i == 0){
                  elem.style.display = 'none';
               }else if(i == 1){
                  elem.style.top = '50%'
                  elem.style.transform = 'translate(-50%, 0%) rotate(45deg)'
               }else if(i == 2){
                  elem.style.top = '50%'
                  elem.style.transform = 'translate(-50%, 0%) rotate(-45deg)'
               }
               elem.style.backgroundColor = '#000'
            })
            body.style.overflowY = 'hidden';
         }else{
            burgerSpan.forEach((e, i)=>{
               const elem = e as HTMLElement;
               if(i == 0){
                  elem.style.display = 'block';
               }else if(i == 1){
                  elem.style.top = 'calc(50% - 5px)'
                  elem.style.transform = 'translate(-50%, 0%) rotate(0deg)'
               }else if(i == 2){
                  elem.style.top = 'calc(50% + 5px)'
                  elem.style.transform = 'translate(-50%, 0%) rotate(0deg)'
               }
               elem.style.backgroundColor = 'white'
            })
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