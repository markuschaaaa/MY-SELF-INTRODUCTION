import Page from '../../core/templates/page';

class ProjectsPage extends Page{
   static TextObject = {
      MainTitle: "Project Page"
   }

   constructor(id:string){
      super(id);
   }

 
   render(){
      const title = this.createHeaderTitle(ProjectsPage.TextObject.MainTitle);
      this.container.append(title);
      return this.container;
   }
}

export default ProjectsPage;