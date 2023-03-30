import Page from '../../core/templates/page';

class ProjectsPage extends Page{
   static TextObject = {
      MainTitle: "Project Page"
   }

   constructor(id:string){
      super(id);
   }

   async setProjects(){
      const projectsWrapper = document.createElement('div');
      const projectsContainer = document.createElement('div');
      
      projectsWrapper.classList.add('projects__wrapper');
      projectsContainer.classList.add('projects__container');

      const projectsArr = ['Online-Zoo\n is one of my first projects to provide information about the animals in the zoo, as well as customer testimonials. You can learn more by following the link to the project itself.', 'Bird-Quiz \n This is an online quiz in which the user is invited to listen to birdsong and guess what kind of bird it was. At the end the results are summarized and displayed on the screen.  You can find out more by following the link to the project itself.', 'Mini-Game \n This is the most usual spotting. A game familiar to many since childhood. You can learn more by following the link to the project itself.', 'Online-Store \n is a ready-to-use online store project that implements pagination, verification, search, sorting, local storages, and more. You can learn more by following the link to the project itself.']

      projectsArr.forEach((e,i)=>{
         const projectsItemWrap = document.createElement('div');
         const projectsItemBox = document.createElement('div');
         const projectsItemImg = document.createElement('img');
         const projectsItemDescription = document.createElement('div');

         projectsItemWrap.classList.add('item__wrapper');
         projectsItemBox.classList.add('item__box');
         projectsItemImg.classList.add('item__img');
         projectsItemDescription.classList.add('item__description');

         projectsItemDescription.innerText = e;

         if(i == 0){
            projectsItemImg.src = '/src/assets/projects/zoo.png'
         }else if(i == 1){
            projectsItemImg.src = '/src/assets/projects/bird.png'
         }else if(i == 2){
            projectsItemImg.src = '/src/assets/projects/pyatnashki.png'
         }else if(i == 3){
            projectsItemImg.src = '/src/assets/projects/store.png'
         }
         if(i == 0 || i == 2){
             projectsItemBox.append(projectsItemDescription, projectsItemImg)
         }else{
         projectsItemBox.append(projectsItemImg, projectsItemDescription)
         }

         projectsItemWrap.append(projectsItemBox)
         projectsContainer.append(projectsItemWrap)
      })

      projectsWrapper.append(projectsContainer)
      this.container.appendChild(projectsWrapper);
      return this.container
   }
 

   async showItem(){
      const targets = document.querySelectorAll('.item__wrapper');
      const wrapper = document.querySelectorAll('.projects__wrapper');

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
      targets.forEach(lazyLoad)
      wrapper.forEach(lazyLoad)
   }
   render(){
      this.setProjects().then((data) => {this.showItem()})
      
      return this.container;
   }
}

export default ProjectsPage;