/*
student Name:Jennifer Fowler, Paul Feaster, and Malik Flowers.
File Name: JavaScript
Date:11/27/2022
*/
//Hamburger menu function
function Hamburger () {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById(ffc-logo);
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display ="none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

$('.like, .dislike').on('click', function() {
    event.preventDefault();
    $('.active').removeClass('active');
    $(this).addClass('active');
});