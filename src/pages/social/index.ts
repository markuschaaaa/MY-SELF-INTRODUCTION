import Page from '../../core/templates/page';

class SocailPage extends Page{
   static TextObject = {
      MainTitle: "Social Page"
   }

   constructor(id:string){
      super(id);
   }

 
   render(){
      const title = this.createHeaderTitle(SocailPage.TextObject.MainTitle);
      this.container.append(title);
      return this.container;
   }
}

export default SocailPage;