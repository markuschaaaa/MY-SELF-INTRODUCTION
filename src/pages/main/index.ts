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

      mainContainerWrap.classList.add('preview__wrapper');
      mainContainer.classList.add('preview__container');
      mainImageContainer.classList.add('preview__img');
      mainTextContainer.classList.add('preview__text');
      mySelfImg.classList.add('preview__self-img');
      forestImage.classList.add('preview__forest');
      mySelfImg.src = "/src/assets/mountains/programmerpng.png";
      forestImage.src = "/src/assets/mountains/mountain.png";
      
      this.container.append(mainContainerWrap)
      mainContainerWrap.append(mainContainer,forestImage)
      mainTextContainer.append(title)
      mainImageContainer.append(mySelfImg)
      mainContainer.append(mainImageContainer, mainTextContainer)

      window.addEventListener('scroll', () =>{
         let value = window.scrollY;
         mainTextContainer.style.opacity = String( 1 - value/1000);
         mainImageContainer.style.opacity = String( 1 - value/500);
         mainTextContainer.style.marginTop = value * 1.2 + 'px';
      })
   }
   async secondPart(){
      const aboutMeWrapp = document.createElement('div');
      const aboutMeContainer = document.createElement('div');
      const aboutMeImgBox = document.createElement('div');
      const aboutMeText = document.createElement('div');
      const aboutMeImg = document.createElement('img');

      aboutMeWrapp.classList.add('aboutme__wrapper');
      aboutMeContainer.classList.add('aboutme__container');
      aboutMeImgBox.classList.add('aboutme__img-box');
      aboutMeImg.classList.add('aboutme__img')
      aboutMeText.classList.add('aboutme__text');


      aboutMeImg.src = "/src/assets/window.png"
      aboutMeText.innerText = `I am a second-year student at Minsk State Linguistic University, and I am passionate about programming. I have been studying programming since high school, and in parallel to my university studies, I have taken various courses to enhance my knowledge and skills in programming. Through these courses, I have had the opportunity to work collaboratively in teams and engage in several projects. I am enthusiastic about the intersection between language and technology and eager to explore the endless possibilities this field offers.`      
      aboutMeImgBox.append(aboutMeImg)
      aboutMeContainer.append(aboutMeText,aboutMeImgBox)
      aboutMeWrapp.append(aboutMeContainer)
      this.container.append(aboutMeWrapp)

      window.addEventListener("scroll", () =>{
         let value = window.scrollY;
         aboutMeText.style.top = -740 + value/1.2 + 'px';
         aboutMeText.style.opacity = String( 0 + value/2000);
         if(value > 1050){
            aboutMeText.style.top = 100 + 'px';
            aboutMeText.style.opacity = '1'
         }
      })
      
   }
   async showItem(){
      const targets = document.querySelectorAll('.preview__self-img');
      const aboutImg = document.querySelectorAll('.aboutme__img')
      const wrapper = document.querySelectorAll('.preview__wrapper')
      const lazyLoad = (target: any) => {
         const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry =>{
               if(entry.isIntersecting){
                  const elem = entry.target;
                  elem.classList.add('done') 
                  observer.disconnect();
               }
            })
         });
         io.observe(target)
      }
      targets.forEach(lazyLoad)
      aboutImg.forEach(lazyLoad)
      wrapper.forEach(lazyLoad)
   }

   render(){
      this.mainPart().then((data) => {this.secondPart()}).then((data) => {this.showItem()})
      return this.container;
   }
}

export default MainPage;