var preloader=document.getElementById('preloader');
var prepre=document.getElementById('prepre');
var lander=document.getElementById('lander');
var clicker=document.getElementById('clicker');
var smolmenu=document.getElementById('chotamenu');
var expanded=document.getElementById('expanded');
var openerbutton=document.getElementById('opener');
var closerbutton=document.getElementById('closer');

function preloaderok(){
    prepre.style.display='none';

    // preloader.style.transform='translateY(-100%)';
    preloader.style.filter='blur(0)';
    // preloader.style.display='none';
    lander.style.zIndex='10';

}
function chotamenuopen(){
    smolmenu.style.display='flex';
    expanded.style.display='flex';
    smolmenu.style.transform='translateY(0)';
    openerbutton.style.display='none';
    closerbutton.style.display='inline';

}
function closesmolmenu(){
    openerbutton.style.display='inline';
    closerbutton.style.display='none';
    smolmenu.style.display='none';
    expanded.style.display='none';

}
closerbutton.addEventListener('click',closesmolmenu);
openerbutton.addEventListener('click' , chotamenuopen);
// chotamenuopen();
preloaderok();
