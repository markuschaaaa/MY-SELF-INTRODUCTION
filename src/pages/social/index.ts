import Page from '../../core/templates/page';

class SocailPage extends Page{
   static TextObject = {
      MainTitle: "Social Page"
   }

   constructor(id:string){
      super(id);
   }

   setSocial(){
      const socialWrapper = document.createElement('div');
      const socialContainer = document.createElement('div');
      const socialInnerBox = document.createElement('div');
      const socials = ['gmai.png', 'inst.png', 'linked.png', 'phone.png', 'telegram.png', 'vk.png']


      socialWrapper.classList.add('social__wrapper');
      socialContainer.classList.add('social__container');
      socialInnerBox.classList.add('social__box');


      socials.forEach((e) => {
         const socialItem = document.createElement('div');
         const socialImg = document.createElement('img');
         const socialText = document.createElement('p');

         socialItem.classList.add('social__item');
         socialImg.classList.add('social__img');
         socialText.classList.add('social__text');
         
         socialImg.src = '/src/assets/logos/' + e;
         socialItem.append(socialImg, socialText);
         socialInnerBox.append(socialItem);
      })
      
      socialContainer.append(socialInnerBox)
      socialWrapper.append(socialContainer);
      this.container.append(socialWrapper)
   }
 
   render(){
      this.setSocial()
      return this.container;
   }
}

export default SocailPage;