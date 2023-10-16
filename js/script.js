//Menu navbar

let menuIcon= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//Défilement Navbar

var sections = document.querySelectorAll('section');
var navlinks=document.querySelectorAll('header nav a')
 
window.onscroll=() =>{

    sections.forEach(sec => {
        var top= window.scrollY;
        var offset= sec.offsetTop -100;
        var height= sec.offsetHeight;
        var id= sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //Activation navlinks

            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate')
        }
        else{
            sec.classList.remove('show-animate');
        }
    })

    let header= document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
