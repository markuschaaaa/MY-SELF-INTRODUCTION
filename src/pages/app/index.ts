import Header from "../../core/components/header";
import Footer from "../../core/footer";
import Page from "../../core/templates/page";
import MainPage from "../main";
import SkillsPage from "../skills";
import CodeExample from "../code-example";
import ProjectsPage from "../projects";
import SocailPage from "../social";


export const enum PageIds{
   MainPage = 'main-page',
   SkillsPage = 'skills-page',
   CodeExample = 'codeexample-page',
   ProjectsPage = 'projects-page',
   SocailPage = 'social-page',
}

class App{
   private static container: HTMLElement = document.body;
   private static defaultPageId:string = 'current-page'
   private initialPage: MainPage;
   private header: Header;
   private footer: Footer;

   constructor(){
      this.initialPage = new MainPage('main-page')
      this.header = new Header('header','header')
      this.footer = new Footer('footer', 'footer')
   }

   static renderNewPage(idPage:string){
     const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
     if(currentPageHTML){
      currentPageHTML.remove();
     }
      let page: Page | null = null;

      if(idPage === PageIds.MainPage){
         page = new MainPage(idPage);
      }else if(idPage === PageIds.SkillsPage){
         page = new SkillsPage(idPage);
      }else if(idPage === PageIds.CodeExample){
         page = new CodeExample(idPage);
      }else if(idPage === PageIds.ProjectsPage){
         page = new ProjectsPage(idPage);
      }else if(idPage === PageIds.SocailPage){
         page = new SocailPage(idPage);
      }
      if(page){
         const pageHTML = page.render();
         pageHTML.id = App.defaultPageId;
         App.container.append(pageHTML);
         const footer = document.querySelector('footer');
         footer ? footer.before(pageHTML) : App.container.append(pageHTML);
      }
   }

   private async enableRouteChange(){
      window.addEventListener('hashchange',()=>{
         const hash = window.location.hash.slice(1)
         App.renderNewPage(hash)
      })
   }


   run(){
      App.container.append(this.header.render())
      App.renderNewPage('social-page')
      this.enableRouteChange()
      App.container.append(this.footer.render())
   }
}

export default App;