const mainMenu=document.querySelector('.mainmenu');
const openMenu=document.querySelector('.openmenu');
const closeMenu=document.querySelector('.closemenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
   mainMenu.style.display='flex';
   mainMenu.style.right='0';

}

function close(){
    mainMenu.style.right='-100%';
    
}
