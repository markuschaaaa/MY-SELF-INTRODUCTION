import Page from '../../core/templates/page'

class CodeExample extends Page{
   static TextObject = {
      MainTitle: 'Code Page',
   }

   constructor(id:string){
      super(id)
   }

   renderCodeExample(){
      const codeExampleWrapper = document.createElement('div');
      const codeExampleContainer = document.createElement('div');
      const codeExampleText = document.createElement('div');
      const codeExampleP = document.createElement('p');
      const codeExamplePre = document.createElement('pre');
      const codeExampleCode = document.createElement('code');

      codeExampleWrapper.classList.add('code__wrapper');
      codeExampleContainer.classList.add('code__container');
      codeExampleText.classList.add('code__text');

      codeExampleCode.innerHTML = `
           async setEvents(){
            this.createProductContainer();
            const dataUrl = 'https://dummyjson.com/products/' + this.id?.split('/')[1];
            let productInfo = await this.getFetch(dataUrl);

            const popupClose = document.querySelector('.popup__close') as HTMLElement;
            popupClose.addEventListener('click', (e)=>{
               const popUp = document.querySelector('.popup') as HTMLElement;
               popUp.classList.remove('open');
               e.preventDefault();
            })

            const popupBody = document.querySelector('.popup__body') as HTMLElement;
            popupBody.addEventListener('click', (e)=>{
               const popUp = document.querySelector('.popup') as HTMLElement;
               popUp.classList.remove('open');
               e.preventDefault();
            });

            const productImage = document.querySelectorAll('.product__image');
            productImage.forEach((element) => {
               element.addEventListener('click', () => {
               const thisImage = element.querySelector('img')
               const newSrc = (thisImage as HTMLImageElement).src;
               const newImg = document.querySelector('.main_img img') as HTMLImageElement;
               newImg.src = newSrc
            });
            });
         }
      `
      codeExamplePre.append(codeExampleCode)
      codeExampleP.append(codeExamplePre)
      codeExampleText.append(codeExampleP)

      codeExampleContainer.append(codeExampleText)
      codeExampleWrapper.append(codeExampleContainer);
      this.container.appendChild(codeExampleWrapper);
   }

   render() {
      this.renderCodeExample();
      return this.container
   }
}

export default CodeExample;