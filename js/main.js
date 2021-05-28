const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close-button');

const toggleMenu = (event)=>{
    menu.classList.toggle('is-open');
};

menuButton.addEventListener('click', toggleMenu);

closeMenuButton.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', function () {
    var navs = document.querySelectorAll('.menu-link');
    for( var i = 0; i < navs.length; i++ ){
        navs[i].addEventListener('click', selectMenu(i), false);
    }
    
    function selectMenu(iterator) {
        return function() {
            var parents = document.querySelectorAll('.menu-link');
            parents.forEach(function(item, iter) {
                item.classList.remove('active');
    
                if(iterator == iter) {
                    item.classList.add('active');
                }
            });
    
            var topMenu = document.querySelectorAll('.menu-link');
    
            topMenu.forEach(function(item, iter) {
                item.classList.add('hide');
               if(iterator == iter) {
                   item.classList.remove('hide');
               }
            });
        }
    }
});


