import Page from '../../core/templates/page'

class SkillsPage extends Page {
   static TextObject = {
      MainTitle:"Skills Page",
   }

   constructor(id: string){
      super(id)
   }

   render() {
      const title = this.createHeaderTitle(SkillsPage.TextObject.MainTitle)
      this.container.append(title)
      return this.container
   }
}
export default SkillsPage;