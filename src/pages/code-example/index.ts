import Page from '../../core/templates/page'

class CodeExample extends Page{
   static TextObject = {
      MainTitle: 'Code Page',
   }

   constructor(id:string){
      super(id)
   }

   render() {
      const title = this.createHeaderTitle(CodeExample.TextObject.MainTitle)
      this.container.append(title)
      return this.container
   }
}

export default CodeExample;