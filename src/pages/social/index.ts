import Page from '../../core/templates/page';

class SocailPage extends Page{
   static TextObject = {
      MainTitle: "Social Page"
   }

   constructor(id:string){
      super(id);
   }

   async setSocial(){
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
         const socialText = document.createElement('a');

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
   
   async setSocialItem(){
      const socialLinks = ['mailto:chumakoff03@gmail.com', 'https://instagram.com/markuschaaaa', 'www.beispiel.com', 'callto:+375(33)313-10-56', 'https://t.me/markuschaaaa', 'https://vk.com/markushaaaaa']
      const socialNames = ['Gmail: chumakoff03@gmail.com', 'Instagram: markuschaaaa', 'Linkedin: www.beispiel.com', 'Phone Number: +375(33)313-10-56', 'Telegram: https://t.me/markuschaaaa', 'VKontakte: https://vk.com/markushaaaaa']
      const item = document.querySelectorAll('.social__text');
      item.forEach((e, i)=>{
        let elem = e as HTMLLinkElement;
        e.innerHTML = `${socialNames[i]}`;
        elem.href = `${socialLinks[i]}`;
      })
   }

   async showItem(){
      const item = document.querySelectorAll('.social__item');
      const wrapper = document.querySelectorAll('.social__wrapper');

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
      item.forEach(lazyLoad)
      wrapper.forEach(lazyLoad)
   }
   render(){
      this.setSocial().then((data) => {this.setSocialItem()}).then((data) => {this.showItem()})
      return this.container;
   }
}

export default SocailPage;