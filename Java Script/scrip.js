
// Hiện thanh menu và nút scroptop 
var menu = document.querySelector('.menu');
var nuttop = document.querySelector('.nuttop');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        menu.classList.add('doimenu');
        nuttop.classList.add('hiennut');
    }
    else {
        menu.classList.remove('doimenu');
        nuttop.classList.remove('hiennut');
    }

})

// Click hiện form dn
$(function () {
    $('.hiendn').hide();
    $('.beetwen_right .dndk').click(function () {
        $('.hiendn').show();
    });
    $('.user_menu').click(function () {
        $('.hiendn').show();
    });
    $('.hiendn .form_submit').click(function () {
        $('.hiendn').hide();
    });
    $('.hiendn .clcol').click(function () {
        $('.hiendn').hide();
    });
});

// Click hien messenger 
$(function () {
    $('.hien_mode').hide();
    $('.mesenger img').click(function () {
        $('.hien_mode').show();
    });
    $('.mode_mesenger .sub').click(function () {
        $('.hien_mode').hide();
    });
    $('.mode_mesenger .clmax').click(function () {
        $('.hien_mode').hide();
    });
});


//hien password
$(document).ready(function () {
    $('.eye').click(function () {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('bx-show bx-hide');
        if ($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });
});


// Click form -> to sam pham 
// $('.last .todosp ul li:nth-child(1) ').click(function (e) {
//     e.preventDefault();
//     $('html,body').animate({ scrollTop: $('.phan1').offset().top - 165 }, 1000);
// });

// $('.last .todosp ul li:nth-child(2) ').click(function (e) {
//     e.preventDefault();
//     $('html,body').animate({ scrollTop: $('.phan2').offset().top - 165 }, 1000);
// });

// $('.last .todosp ul li:nth-child(3) ').click(function (e) {
//     e.preventDefault();
//     $('html,body').animate({ scrollTop: $('.phan3').offset().top - 165 }, 1000);
// });

// $('.last .todosp ul li:nth-child(4) ').click(function (e) {
//     e.preventDefault();
//     $('html,body').animate({ scrollTop: $('.phan4').offset().top - 165 }, 1000);
// });

// When the user clicks on, scroll to the top of the document
$('.nuttop').click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 1000);
});

// Chuyển động Slide 
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// hieu ứng lăn chuột 
$(function () {
    new WOW().init();
});

// Popup
$(function () {
    $('.phu_desktop').show();
    $(function () {
        var myFnc = function () {
            $('.phu_desktop').first().remove();
        };
        setTimeout(myFnc, 7000);
    });
    $('.phu_desktop .brow_desktop i').click(function () {
        $('.phu_desktop').hide();
    });
});

//deley website loading 
// $('.main').slideUp(200).delay(2000).fadeIn(1000);

//deley loading website
$(function () {
    var myFnc = function () {
        $('.loading_web').first().remove();
    };
    setTimeout(myFnc, 2500);
});

// dongmenu
$(function () {
    $('.nutnutmenu').click(function () {
        $('.an_menu').show();
        $('.dong_last').slideToggle();
        $('.beetwen_center').slideToggle();
    });
    $('.an_menu').click(function () {
        $('.an_menu').slideToggle();
        $('.dong_last').slideToggle();
        $('.beetwen_center').slideToggle();
    });
});

//click xổ menu con




// var nuut = document.getElementsByClassName('td_cha');
// var ndd = document.getElementsByClassName('td_con');
// for (let i = 0; i < nuut.length; i++) {
//     nut[i].omClick=function(){

//     if (this.classList[1] == 'biendoi') {
//         var ndhienthi = this.getAttribute('data-hienthi');
//         var hienthind = document.getElementsById(ndhienthi);
//         hienthind.classList.remove('xuathien');
//     }
//     else {
//         for (var k = 0; k < nuut.length; k++) {
//             nuut[k].classList.remove('biendoi');
//         }
//         this.classList.toggle('biendoi');

//         var ndhienthi = this.getAttribute('data-hienthi');
//         var hienthind = document.getElementById(ndhienthi);
//         for (var i = 0; i < ndd.length; i++) {
//             nd[i].classList.remove('xuathien');
//         }
//         hienthind.classList.toggle('xuathien');
//     }
            
//     }
// }

