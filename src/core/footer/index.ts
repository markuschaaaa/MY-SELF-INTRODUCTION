import Component from "../templates/components";
import { PageIds } from "../../pages/app";

class Footer extends Component {
   constructor(tagName: string, className: string){
      super(tagName, className);
   }
   renderFooter(){
      console.log("renderFooter")
      const footerWrap = document.createElement("div");
      const footerContainer = document.createElement("div");
      const footerItem = `
      <p class="footer__item">Mark Chumakov</p>
      <p class="footer__item">2023</p>
      <a href="https://github.com/markuschaaaa"><img src="/src/assets/logos/gitt.png" class="footer__item" alt="gitlogo"></img></a>
      `

      footerWrap.classList.add('footer__wrapper');
      footerContainer.classList.add('footer__container');

      this.container.append(footerWrap);
      footerWrap.append(footerContainer)
      footerContainer.innerHTML = footerItem
   }

    render(){
      this.renderFooter();
      return this.container
   }
}
export default Footer;