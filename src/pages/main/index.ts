import Page from '../../core/templates/page';

class MainPage extends Page{
   static TextObject = {
      MainTitle: "Main Page: Skills, Code-Example, my Projects, Social Networks"
   }

   constructor(id:string){
      super(id);
   }

 
   render(){
      const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
      this.container.append(title);
      return this.container;
   }
}

export default MainPage;