$(function(){
    // ibg
    function ibg(){
        $.each($('.ibg'), function(index, val){
            if($(this).find('img').length>0){
                $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
            }
        });
    }
    ibg();
    // /ibg

    // Плавная прокрутка к якорю================================================
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });
    // /Плавная прокрутка к якорю================================================

    // Webp ====================================================================
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }

        testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }
        else{
            document.querySelector('body').classList.add('no-webp');
        }
    });
    // /Webp ====================================================================

});

let headerForm = document.querySelector('.header__form');
let posRelative = document.querySelectorAll('.pos-relative');
let headerFormLink = document.querySelector('.header__form a');
let headerFormBtn = document.querySelector('.header__form button');

headerFormLink.onclick = function(){
	if(window.matchMedia("(max-width: 767.98px)").matches){
		headerForm.classList.add('active');
	}
}

headerFormBtn.onclick = function(){
	if(window.matchMedia("(max-width: 767.98px)").matches){
		headerForm.classList.remove('active');
	}
}

// $(function(){

    // $('.header__form a').click(function(){
    //     // if($(window).width() <= 767.98){
    //         $('.header__form').addClass('active');
    //     // }
    // });

    // $('.header__form button').click(function(){
    //     // if($(window).width() <= 767.98){
    //         $('.header__form').removeClass('active');
    //     // }
    // });

// });
