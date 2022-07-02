const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function sectionTransition(){
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    allSections.addEventListener('click', (event) =>{
        const id = event.target.dataset.id;
        if(id){
            /*sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            });

            event.target.classList.add('active');*/

            sections.forEach((sec) =>{
                sec.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

sectionTransition();