// Ações de navegação header-nav-menu
$('header nav#nav-esq ul#menu-central li:eq(0)').click(function () {
    $('html, body').animate({ scrollTop: $('header').offset().top }, 100);
});

$('header nav#nav-esq ul#menu-central li:eq(1)').click(function () {
    $('html, body').animate({ scrollTop: $('section.sobre').offset().top }, 100);
});

$('header nav#nav-esq ul#menu-central li:eq(2)').click(function () {
    $('html, body').animate({ scrollTop: $('section.solucao').offset().top }, 100);
});

$('header nav#nav-esq ul#menu-central li:eq(3)').click(function () {
    $('html, body').animate({ scrollTop: $('section.makes').offset().top }, 100);
});

$('header nav#nav-esq ul#menu-central li:eq(4)').click(function () {
    $('html, body').animate({ scrollTop: $('footer').offset().top }, 100);
});

// Ações de navegação footer
$('footer div.footer-container nav.nav-footer ul li:eq(0)').click(function () {
    $('html, body').animate({ scrollTop: $('header').offset().top }, 100);
});

$('footer div.footer-container nav.nav-footer ul li:eq(1)').click(function () {
    $('html, body').animate({ scrollTop: $('section.sobre').offset().top }, 100);
});

$('footer div.footer-container nav.nav-footer ul li:eq(2)').click(function () {
    $('html, body').animate({ scrollTop: $('section.solucao').offset().top }, 100);
});

$('footer div.footer-container nav.nav-footer ul li:eq(3)').click(function () {
    $('html, body').animate({ scrollTop: $('section.makes').offset().top }, 100);
});

$('footer div.footer-container nav.nav-footer ul li:eq(4)').click(function () {
    $('html, body').animate({ scrollTop: $('footer').offset().top }, 100);
});

$('footer div.footer-container .logo-footer a').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 100);
});

/*------------------------*/
/*       ANIMAÇÕES        */
/*------------------------*/

/*------------------------*/
/*         Sobre          */
/*------------------------*/

$('div.sobre-mestre').css('opacity', 0);

$('div.sobre-mestre').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('div.sobre-mestre').addClass('animate__animated animate__fadeInUp animate__normal');
    } else {
        $('div.sobre-mestre').removeClass('animate__animated animate__fadeInUp animate__normal');
    }
}, {
    offset: '65%'
});

/*------------------------*/
/*        Solucao         */
/*------------------------*/

$('div.solucao-texto, #solucao-img').css('opacity', 0);

$('div.solucao-texto').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('div.solucao-texto').addClass('animate__animated animate__fadeInLeft animate__normal');
    } else {
        $('div.solucao-texto').removeClass('animate__animated animate__fadeInLeft animate__normal');
    }
}, {
    offset: '65%'
});

$('#solucao-img').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('#solucao-img').addClass('animate__animated animate__fadeInRight animate__normal');
    } else {
        $('#solucao-img').removeClass('animate__animated animate__fadeInRight animate__normal');
    }
}, {
    offset: '65%'
});

/*------------------------*/
/*         MAKES          */
/*------------------------*/


$('div.makes-container').css('opacity', 0);

$('div.makes-container').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('div.makes-container').addClass('animate__animated animate__fadeInLeft animate__normal');
    } else {
        $('div.makes-container').removeClass('animate__animated animate__fadeInLeft animate__normal');
    }
}, {
    offset: '65%'
});