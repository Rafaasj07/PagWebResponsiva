// Ativar menu
$(document).ready(function() {
    function mostraMenu() {
        $('header nav#nav-esq ul#menu-central')
            .css('display', 'flex')
            .hide()
            .fadeIn(300);

        $('header nav#nav-esq ul#icone-menu li#menu').hide();
        $('header nav#nav-esq ul#icone-menu li#menux').show();
    }

    function esconderMenu() {
        $('header nav#nav-esq ul#menu-central').fadeOut(300, function() {
            // A função fadeOut já lida com o display: none ao final.
        });

        $('header nav#nav-esq ul#icone-menu li#menu').show();
        $('header nav#nav-esq ul#icone-menu li#menux').hide();
    }

    let controle = true;

    // Clique no botão do menu
    $('header nav#nav-esq ul#icone-menu li#menu, header nav#nav-esq ul#icone-menu li#menux').click(function(event) {
        event.stopPropagation();
        if (controle) {
            mostraMenu();
        } else {
            esconderMenu();
        }
        controle = !controle;
    });

    // Fecha o menu ao clicar fora dele, mas apenas no modo responsivo
    $(document).click(function(event) {
        let menu = $('header nav#nav-esq ul#menu-central');
        let botaoMenu = $('header nav#nav-esq ul#icone-menu li#menu, header nav#nav-esq ul#icone-menu li#menux');
        
        if ($(window).width() <= 663) {
            if (!menu.is(event.target) && menu.has(event.target).length === 0 &&
                !botaoMenu.is(event.target) && botaoMenu.has(event.target).length === 0) {
                
                if (!controle) { // Apenas executa se o menu estiver aberto
                    esconderMenu();
                    controle = true;
                }
            }
        }
    });
});