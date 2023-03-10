import Page from '../../core/templates/page';

class MainPage extends Page{
   static TextObject = {
      MainTitle: "Hi, i'm Mark and i'm a frontend developer."
   }

   constructor(id:string){
      super(id);
   }

   async mainPart(){
      const mainContainerWrap = document.createElement('div');
      const mainContainer = document.createElement('div');
      const mainImageContainer = document.createElement('div');
      const mainTextContainer = document.createElement('div');
      const mySelfImg = document.createElement('img');
      const forestImage = document.createElement('img');
      const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);

      // second block
      const secondSection = document.createElement('div');
      secondSection.classList.add('second__container');


      mainContainerWrap.classList.add('preview__wrapper');
      mainContainer.classList.add('preview__container');
      mainImageContainer.classList.add('preview__img');
      mainTextContainer.classList.add('preview__text');
      mySelfImg.classList.add('preview__self-img');
      forestImage.classList.add('preview__forest');
      mySelfImg.src = "/src/assets/me.png";
      forestImage.src = "/src/assets/mountains/mountain.png";

      // second block
      
      this.container.append(mainContainerWrap)
      this.container.append(secondSection)
      secondSection.innerText = 'TEST'
      mainContainerWrap.append(mainContainer,forestImage)
      mainTextContainer.append(title)
      mainImageContainer.append(mySelfImg)
      mainContainer.append(mainImageContainer, mainTextContainer)

      window.addEventListener('scroll', () =>{
         let value = window.scrollY;
         mainTextContainer.style.opacity = String( 1 - value/1000);
         mainImageContainer.style.opacity = String( 1 - value/500);
         mainTextContainer.style.marginTop = value * 1.2 + 'px';
         forestImage.style.bottom = -90 + -value * 0.13 + 'px';
      })
   }

   render(){
      this.mainPart()
      return this.container;
   }
}

export default MainPage;