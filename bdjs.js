// opacity code for heding//
const hero = document.querySelector(".headr");
const scrollAmount = -700;
const namel = document.querySelector("#name ");
const logo = document.querySelector('#logo ');
window.addEventListener('scroll',(event)=>{
    const {top} = hero.getBoundingClientRect();
    if(top - window.innerHeight <scrollAmount){
        namel.style.opacity = 0;
        logo.style.opacity = 1;
    }
    else{
        namel.style.opacity= 1;
        logo.style.opacity = 1;
    }
})
//code end here//


