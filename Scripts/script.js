// Aguarda o carregamento completo do documento HTML antes de executar o script
$(document).ready(function () {

    // Função para exibir o menu de navegação responsivo
    function mostraMenu() {
        // Interrompe qualquer animação em andamento no menu para evitar conflitos.
        // Define o display do menu para 'flex' (para layout de coluna) e sua opacidade inicial para 0 (invisível).
        // Em seguida, anima a opacidade de 0 para 1 em 300 milissegundos para um efeito de fade-in.
        $('header nav#nav-esq ul#menu-central').stop(true, true).css({
            'display': 'flex',
            'opacity': 0
        }).animate({
            'opacity': 1
        }, 300);

        // Esconde o ícone de menu hambúrguer e exibe o ícone de fechar (X).
        $('header nav#nav-esq ul#icone-menu li#menu').hide();
        $('header nav#nav-esq ul#icone-menu li#menux').show();
    }

    // Função para esconder o menu de navegação responsivo
    function esconderMenu() {
        // Interrompe qualquer animação em andamento no menu.
        // Anima a opacidade do menu de 1 para 0 em 300 milissegundos para um efeito de fade-out.
        // Uma função de callback é executada após a conclusão da animação para definir o display como 'none' (completamente escondido).
        $('header nav#nav-esq ul#menu-central').stop(true, true).animate({
            'opacity': 0
        }, 300, function () {
            $(this).css('display', 'none');
        });

        // Exibe o ícone de menu hambúrguer e esconde o ícone de fechar (X).
        $('header nav#nav-esq ul#icone-menu li#menu').show();
        $('header nav#nav-esq ul#icone-menu li#menux').hide();
    }

    // Variável de controle para o estado do menu:
    // 'true' significa que o menu está fechado (e o ícone de hambúrguer está visível).
    // 'false' significa que o menu está aberto (e o ícone 'X' está visível).
    let controle = true;

    // Adiciona um ouvinte de evento de clique aos ícones de menu (hambúrguer e X).
    $('header nav#nav-esq ul#icone-menu li#menu, header nav#nav-esq ul#icone-menu li#menux').click(function (event) {
        // Impede a propagação do evento de clique para elementos pai (como o documento),
        // evitando que o menu se feche imediatamente após ser aberto.
        event.stopPropagation();

        // Verifica o estado atual do menu usando a variável 'controle'.
        if (controle) {
            mostraMenu(); // Se estiver fechado, mostra o menu.
        } else {
            esconderMenu(); // Se estiver aberto, esconde o menu.
        }
        controle = !controle; // Inverte o estado do controle para o próximo clique.
    });

    // Adiciona um ouvinte de evento de clique ao documento para fechar o menu ao clicar fora dele.
    // Esta funcionalidade é ativa apenas em telas menores (modo responsivo).
    $(document).click(function (event) {
        let menu = $('header nav#nav-esq ul#menu-central'); // Referência ao elemento do menu.
        let botaoMenu = $('header nav#nav-esq ul#icone-menu li#menu, header nav#nav-esq ul#icone-menu li#menux'); // Referência aos botões do menu.

        // Verifica se a largura atual da janela é menor ou igual ao breakpoint mobile (794px).
        if ($(window).width() <= 794) {
            // Verifica se o clique não ocorreu dentro do menu e nem nos botões de menu.
            if (!menu.is(event.target) && menu.has(event.target).length === 0 &&
                !botaoMenu.is(event.target) && botaoMenu.has(event.target).length === 0) {

                // Se o menu estiver "aberto" (controle é 'false'), esconde o menu e reseta o controle.
                if (!controle) {
                    esconderMenu();
                    controle = true;
                }
            }
        }
    });

    // Adiciona um ouvinte de evento de redimensionamento da janela.
    // Isso gerencia a transição do menu entre os layouts desktop e mobile.
    $(window).resize(function () {
        // Se a largura da janela for maior que o breakpoint mobile (794px),
        // assume-se o layout desktop.
        if ($(window).width() > 794) {
            // Garante que o menu esteja visível, com layout flex e opacidade total,
            // adequado para a navegação em desktop.
            $('header nav#nav-esq ul#menu-central').css({
                'display': 'flex',
                'opacity': 1
            });
            // Esconde ambos os ícones do menu hambúrguer/X, pois não são usados no desktop.
            $('header nav#nav-esq ul#icone-menu li#menu').hide();
            $('header nav#nav-esq ul#icone-menu li#menux').hide();
            // Reseta o controle para 'true' para manter a consistência do estado.
            controle = true;
        } else { // Se a largura da janela for menor ou igual ao breakpoint mobile (794px),
            // assume-se o layout mobile.
            // Se o menu está no estado "fechado" (controle é 'true'),
            // garante que ele esteja completamente escondido e os ícones corretos estejam visíveis.
            if (controle) {
                $('header nav#nav-esq ul#menu-central').css('display', 'none');
                $('header nav#nav-esq ul#icone-menu li#menu').show();
                $('header nav#nav-esq ul#icone-menu li#menux').hide();
            } else { // Se o menu está no estado "aberto" (controle é 'false'),
                // garante que ele permaneça visível e os ícones corretos estejam visíveis.
                $('header nav#nav-esq ul#menu-central').css('display', 'flex');
                $('header nav#nav-esq ul#icone-menu li#menu').hide();
                $('header nav#nav-esq ul#icone-menu li#menux').show();
            }
        }
    });

    // Dispara o evento de redimensionamento uma vez logo que a página é carregada.
    // Isso define o estado inicial correto do menu (visível em desktop, escondido em mobile)
    // com base na largura da tela do usuário no momento do carregamento.
    $(window).resize();
});