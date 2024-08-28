function comecarAtendimento() {
    // Redireciona para a página desejada
    window.location.href = "atendimento.html";
}

function mostrarNivel2(opcao) {
    /* 
    *   Mostra as sub-opções relacionadas ao primeiro menu selecionado que fica localizado no arquivo "atendimento.html" sob a div de classe balão.
    *       - Caso deseje alterar uma opção basta alterar o valor dentro da variável "conteúdo"; deve ser passado como valor ou uma <div></div> ou um <button>
    * utilizando como exemplo: '<button id="subOpcao"    onclick="mostrarNivel3(id)">"Subopção"</button>'
    *       - Onde a id "subOpção" fornece a variável para acessar o submenu responsável por ela, ou seja, caso coloque uma subopção "Informática", a mesma deve estar contida no case da 
    * função "mostrarNivel3()".
    */
    resetarDivsPosteriores('balao-dinamico');
    var conteudo = '';

    switch (opcao) {
        case 'assistenciaEstudantil':
            conteudo =  '<div class="balao balao-dinamico"><!-- Adicione a classe "balao-dinamico" -->' +
                        '<div class="balao balao-dinamico">Qual serviço ?</div>' + 
                        '<button id="cadastroProaes"    onclick="mostrarNivel3(id)">Cadastro no Proaes</button>' +
                        '<button id="atualizacaoProaes" onclick="mostrarNivel3(id)">Atualização de cadastro no Proaes</button>' +
                        '<button id="alteraDados"       onclick="mostrarNivel3(id)">Alteração de Dados bancários</button>' +
                        '<button id="auxilioInclusao"   onclick="mostrarNivel3(id)">Auxílio Inclusão Digital Emergencial</button>' +
                        '</div>';
            document.getElementById('balao-dinamico').innerHTML = conteudo;
            document.getElementById('balao-opcoes-resposta').innerHTML = 'Assistência Estudantil';
            alterarOpacidade('balao-opcoes-resposta', 1);
            alterarOpacidade('balao-dinamico', 1);
            break;
        case 'informatica':
            conteudo =  '<div class="balao balao-dinamico"><!-- Adicione a classe "balao-dinamico" -->' +
                        '<div class="balao balao-dinamico">Escolha uma opção:</div>' + 
                        '<button id="suporteInformatica"    onclick="mostrarNivel3(id)">Suporte a equipamentos de Informática</button>' +
                        '<button id="acessosInstitucionais" onclick="mostrarNivel3(id)">Senhas e acessos institucionais</button>' +
                        '<button id="faleConosco"           onclick="mostrarNivel3(id)">Fale conosco</button>' +
                        '</div>';
            document.getElementById('balao-dinamico').innerHTML = conteudo;
            document.getElementById('balao-opcoes-resposta').innerHTML = 'Informática (Equipamentos e Sistemas)';
            alterarOpacidade('balao-opcoes-resposta', 1);
            alterarOpacidade('balao-dinamico', 1);
            break;
    }
    
    var botaoSelecionado = document.getElementById(opcao);
    botaoSelecionado.classList.add('selected');
}

function mostrarNivel3(subOpcao) {
    /* 
    *   Mostra as sub-opções relacionadas ao primeiro menu selecionado que fica localizado no arquivo "atendimento.html" sob a div de classe balão.
    *       - Caso deseje alterar uma opção basta alterar o valor dentro da variável "conteúdo"; deve ser passado como valor ou uma <div></div> ou um <button>
    * utilizando como exemplo: '<button id="subOpcao"    onclick="mostrarNivel4(id)">"Subopção"</button>'
    *       - Onde a id "subOpção" fornece a variável para acessar o submenu responsável por ela, ou seja, caso coloque uma subopção "Informática", a mesma deve estar contida no case da 
    * função "mostrarNivel4()".
    *   Caso não haja botão clicável para direcionar para um submenu novamente, basta utilizar na variável "conteudo1" o seguinte sintaxe: 
    *    
    *   case 'subopcao'   
    *       conteudo1 = 'Mensagem do balão'
    *       document.getElementById('balao-dinamico-resposta').innerHTML = conteudo1;
    *       document.getElementById('balao-dinamico-resposta-nv2').innerHTML = 'Mensagem do balão';
    *       alterarOpacidade('balao-dinamico-resposta-nv2', 1);
    *       alterarOpacidade('balao-dinamico-resposta', 1);
    *       scrollChat();
    */
    resetarDivsPosteriores('balao-dinamico-resposta');
    var conteudo1 = '';
    
    switch (subOpcao) {
        case 'cadastroProaes':
            conteudo1 = 'Acessar o site da Proaeci: <a href="https://proaeci.ufes.br/editais">https://proaeci.ufes.br/editais</a> para mais informações sobre o cadastro.'
            document.getElementById('balao-dinamico-resposta').innerHTML = conteudo1;
            document.getElementById('balao-dinamico-resposta-nv2').innerHTML = 'Cadastro no Proaes';
            alterarOpacidade('balao-dinamico-resposta-nv2', 1);
            alterarOpacidade('balao-dinamico-resposta', 1);
            scrollChat();
            break;
        case 'atualizacaoProaes':
            conteudo1 = 'A atualização cadastral é necessária quando há alteração na composição familiar ou na renda familiar. É necessário enviar e-mail para: <a href="mailto:dasas.ceunes@ufes.br">dasas.ceunes@ufes.br</a>, para agendar o atendimento social da DASAS.'
            document.getElementById('balao-dinamico-resposta').innerHTML = conteudo1;
            document.getElementById('balao-dinamico-resposta-nv2').innerHTML = 'Atualização de Cadastro no Proaes';
            alterarOpacidade('balao-dinamico-resposta-nv2', 1);
            alterarOpacidade('balao-dinamico-resposta', 1);
            scrollChat();
            break;
        case 'alteraDados':
            conteudo1 = 'A alteração de dados bancários é necessária quando o estudante quer trocar a conta bancária que recebe o auxílio do PROAES.<br>É necessário enviar e-mail para: dasas.ceunes@ufes.br, para obter informações detalhadas para a troca dos dados bancários no portal. '
            document.getElementById('balao-dinamico-resposta').innerHTML = conteudo1;
            document.getElementById('balao-dinamico-resposta-nv2').innerHTML = 'Alteração de dados bancários';
            alterarOpacidade('balao-dinamico-resposta-nv2', 1);
            alterarOpacidade('balao-dinamico-resposta', 1);
            scrollChat();
            break;
        case 'auxilioInclusao':
            conteudo1 = 'Acessar o site da Proaeci: <a href="https://proaeci.ufes.br/inclusao-digital-emergencial">https://proaeci.ufes.br/inclusao-digital-emergencial</a>, para mais informações sobre a comprovação de renda.'
            document.getElementById('balao-dinamico-resposta').innerHTML = conteudo1;
            document.getElementById('balao-dinamico-resposta-nv2').innerHTML = 'Auxílio Inclusão digital emergêncial';
            alterarOpacidade('balao-dinamico-resposta-nv2', 1);
            alterarOpacidade('balao-dinamico-resposta', 1);
            scrollChat();
            break;
        case 'suporteInformatica':
            conteudo1 = '<div class="balao balao-dinamico"><!-- Adicione a classe "balao-dinamico" -->' +
                        '<div>Escolha uma opção:</div>' + 
                        '<button id="equipamentoPatrimonio"    onclick="mostrarNivel4(id)">Equipamentos de Informática com registro patrimonial</button>' +
                        '<button id="equipamentoPessoal"       onclick="mostrarNivel4(id)">Equipamentos de Informática pessoal</button>' +
                        '<button id="tutoriais"                onclick="mostrarNivel4(id)">Tutoriais e orientações</button>' +
                        '</div>';
            document.getElementById('balao-dinamico-resposta').innerHTML = conteudo1;
            document.getElementById('balao-dinamico-resposta-nv2').innerHTML = 'Suporte a equipamentos de Informática';
            alterarOpacidade('balao-dinamico-resposta-nv2', 1);
            alterarOpacidade('balao-dinamico-resposta', 1);
            scrollChat();
            break;
        case 'acessosInstitucionais':
            conteudo1 = '<div class="balao balao-dinamico"><!-- Adicione a classe "balao-dinamico" -->' +
                        '<div>Escolha uma opção:</div>' + 
                        '<button id="acessos"               onclick="mostrarNivel4(id)">SIE, Protocolo, Portal Admnistrativo, Acadêmico, Reservas</button>' +
                        '<button id="internet"              onclick="mostrarNivel4(id)">Internet EDUROAM</button>' +
                        '<button id="hospedagem"            onclick="mostrarNivel4(id)">Hospedagem de Sites</button>' +
                        '<button id="gsuite"                onclick="mostrarNivel4(id)">G-Suíte UFES</button>' +
                        '<button id="senhaUnica"            onclick="mostrarNivel4(id)">Senha Única (login.unico@ufes.br)</button>' +
                        '<button id="senhaComp"             onclick="mostrarNivel4(id)">Senha computadores institucionais</button>' +
                        '<button id="email"             onclick="mostrarNivel4(id)">Email</button>' +
                        '</div>';
            document.getElementById('balao-dinamico-resposta').innerHTML = conteudo1;
            document.getElementById('balao-dinamico-resposta-nv2').innerHTML = 'Senhas e acessos institucionais';
            alterarOpacidade('balao-dinamico-resposta-nv2', 1);
            alterarOpacidade('balao-dinamico-resposta', 1);
            scrollChat();
            break;
        case 'faleConosco':
            conteudo1 = 'E-mail: <a href="mailto:suporte.saomateus@ufes.br">suporte.saomateus@ufes.br</a>, Telegram basta clicar no link: <a href="https://t.me/ti_saomateus">https://t.me/ti_saomateus</a>, pelo seu celular'
            document.getElementById('balao-dinamico-resposta').innerHTML = conteudo1;
            document.getElementById('balao-dinamico-resposta-nv2').innerHTML = 'Fale conosco';
            alterarOpacidade('balao-dinamico-resposta-nv2', 1);
            alterarOpacidade('balao-dinamico-resposta', 1);
            scrollChat();
            break;
    }
}

function mostrarNivel4(opcao2){
    /* 
    *   Mostra as sub-opções relacionadas ao primeiro menu selecionado que fica localizado no arquivo "atendimento.html" sob a div de classe balão.
    *       - Caso deseje alterar uma opção basta alterar o valor dentro da variável "conteúdo"; deve ser passado como valor ou uma <div></div> ou um <button>
    * utilizando como exemplo: '<button id="subOpcao"    onclick="mostrarNivel5(id)">"Subopção"</button>'
    *       - Onde a id "subOpção" fornece a variável para acessar o submenu responsável por ela, ou seja, caso coloque uma subopção "Informática", a mesma deve estar contida no case da 
    * função "mostrarNivel5()".
    *   Caso não haja botão clicável para direcionar para um submenu novamente, basta utilizar na variável "conteudo1" o seguinte sintaxe: 
    *    
    *   case 'opcao2'   
    *       conteudo2 = 'mensagem do balão';
    *       document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
    *       document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'Mensagem do Balão';
    *       alterarOpacidade('balao-dinamico-resposta-nv3', 1);
    *       alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
    *       scrollChat();
    */
    resetarDivsPosteriores('balao-dinamico-resposta-nivel4');
    var conteudo2 = '';

    switch (opcao2){
        case 'equipamentoPatrimonio':
            conteudo2 = 'Abrir ticket no endereço eletrônico: <a href="http://atendimento.ufes.br">http://atendimento.ufes.br</a> selecionando tópico de ajuda "CEUNES / informática" e informando problema, patrimônio do equipamento, telefone de contato, prédio, sala. O maior número de informações possível.';
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'Equipamentos de Informática com registro patrimonial';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
        case 'equipamentoPessoal':
            conteudo2 = 'Orientações e tutoriais no endereço eletrônico: <a href="http://dtin.saomateus.ufes.br">http://dtin.saomateus.ufes.br</a> outras informações favor entrar em contato via e-mail suporte.saomateus@ufes.br';
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'Equipamentos de Informática pessoal';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
        case 'tutoriais':
            conteudo2 = 'Acesse: <a href="https://informatica.saomateus.ufes.br/tutoriais-e-orientacoes">https://informatica.saomateus.ufes.br/tutoriais-e-orientacoes</a>';
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'Tutoriais e orientação';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
        case 'acessos':
            conteudo2 = 'Acessar o endereço eletrônico: <a href="https://dtin.saomateus.ufes.br/cadastros-e-habilitacao-aos-sistemas-institucionais">https://dtin.saomateus.ufes.br/cadastros-e-habilitacao-aos-sistemas-institucionais</a> preencher o formulário correspondente e anexar a um Documento Avulso conforme orientações divulgadas.';
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'SIE, Protocolo, Portal Admnistrativo, Acadêmico, Reservas';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
        case 'internet':
            conteudo2 = 'Com o sua senha única, o mesmo usuário de acesso aos portais aluno, professor e servidor, leia as instruções e siga o tutorial correspondente ao seu dispositivo no endereço eletrônico: <a href="https://sti.ufes.br/eduroam">https://sti.ufes.br/eduroam</a>';
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'Internet EDUROAM';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
        case 'hospedagem':
            conteudo2 = 'Procedimentos, dúvidas e demais orientações no eletrônico: <a href="https://sti.ufes.br/hospedagem-de-sitios">https://sti.ufes.br/hospedagem-de-sitios</a>';
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'Hospedagem de sites';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
        case 'gsuite':
            conteudo2 = 'Procedimentos, dúvidas e demais orientações no eletrônico: <a href="https://sti.ufes.br/gsuite">https://sti.ufes.br/gsuite</a>';
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'G-Suíte UFES';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
        case 'senhaUnica':
            conteudo2 = '<div class="balao balao-dinamico">' +
                        '<div>Escolha uma opção:</div>' + 
                        '<button id="alterarSenha"                onclick="mostrarNivel5(id)">Alterar Senha</button>' +
                        '<button id="recuperarSenha"              onclick="mostrarNivel5(id)">Recuperação de Senha / Primeiro Acesso</button>' +
                        '</div>';
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'Senha Única (login.unico@ufes.br)';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
        case 'senhaComp':
            conteudo2 = 'Ative seu login único em: <a href="https://atendimento.saomateus.ufes.br/senha">https://atendimento.saomateus.ufes.br/senha</a> e em seguida faça logon no domínio CEUNES no computador.'
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'Senha computadores institucionais';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
        case 'email':
            conteudo2 = '<div class="balao balao-dinamico">' +
                        '<div>Escolha uma opção:</div>' + 
                        '<button id="ativarLeitura"                onclick="mostrarNivel5(id)">Ativar Leitura pelo gmail.com</button>' +
                        '<button id="problemas"                    onclick="mostrarNivel5(id)">Identificação de Problemas</button>' +
                        '<button id="alterarSenhaEmail"            onclick="mostrarNivel5(id)">Alterar senha, Recuperar e Primeiro acesso</button>' +
                        '</div>';
            document.getElementById('balao-dinamico-resposta-nivel4').innerHTML = conteudo2;
            document.getElementById('balao-dinamico-resposta-nv3').innerHTML = 'Email';
            alterarOpacidade('balao-dinamico-resposta-nv3', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel4', 1);
            scrollChat();
            break;
    }
}

function mostrarNivel5(opcao3){
    /* 
    *   Mostra as sub-opções relacionadas ao primeiro menu selecionado que fica localizado no arquivo "atendimento.html" sob a div de classe balão.
    *       - Caso deseje alterar uma opção basta alterar o valor dentro da variável "conteúdo"; deve ser passado como valor ou uma <div></div> ou um <button>
    * utilizando como exemplo: '<button id="subOpcao"    onclick="mostrarNivel6(id)">"Subopção"</button>'
    *       - Onde a id "subOpção" fornece a variável para acessar o submenu responsável por ela, ou seja, caso coloque uma subopção "Informática", a mesma deve estar contida no case da 
    * função "mostrarNivel6()".
    *   Caso não haja botão clicável para direcionar para um submenu novamente, basta utilizar na variável "conteudo1" a seguinte sintaxe: 
    *    
    *   case 'opcao3'   
    *       conteudo3 = opcao3
    *       document.getElementById('balao-dinamico-resposta-nivel5').innerHTML = conteudo3;
    *       document.getElementById('balao-dinamico-resposta-nv4').innerHTML = 'Mensagem do Balão';
    *       alterarOpacidade('balao-dinamico-resposta-nv4', 1);
    *       alterarOpacidade('balao-dinamico-resposta-nivel5', 1);
    *       scrollChat();
    */
    
    resetarDivsPosteriores('balao-dinamico-resposta-nivel5');

    var conteudo3 = '';

    switch(opcao3){

        case 'alterarSenha':
            conteudo3 = 'Procedimentos, dúvidas e demais orientações no eletrônico: <a href="https://senha.ufes.br/site/alteraSenha">https://senha.ufes.br/site/alteraSenha</a>';
            document.getElementById('balao-dinamico-resposta-nivel5').innerHTML = conteudo3;
            document.getElementById('balao-dinamico-resposta-nv4').innerHTML = 'Alterar Senha';
            alterarOpacidade('balao-dinamico-resposta-nv4', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel5', 1);
            scrollChat();
            break;
        case 'recuperarSenha':
            conteudo3 = 'Procedimentos, dúvidas e demais orientações no eletrônico <a href="https://senha.ufes.br/site/recuperaCredenciais">https://senha.ufes.br/site/recuperaCredenciais</a>';
            document.getElementById('balao-dinamico-resposta-nivel5').innerHTML = conteudo3;
            document.getElementById('balao-dinamico-resposta-nv4').innerHTML = 'Recuperação de Senha / Primeiro Acesso';
            alterarOpacidade('balao-dinamico-resposta-nv4', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel5', 1);
            scrollChat();
            break;
        case 'ativarLeitura':
            conteudo3 = 'Usuário irá logar no ambiente do gmail.com com usuário único @ufes.br, deverá seguir as orientações do eletrônico <a href="https://senha.ufes.br/site/ativaGmail">https://senha.ufes.br/site/ativaGmail</a>'
            document.getElementById('balao-dinamico-resposta-nivel5').innerHTML = conteudo3;
            document.getElementById('balao-dinamico-resposta-nv4').innerHTML = 'Ativar Leitura pelo gmail.com';
            alterarOpacidade('balao-dinamico-resposta-nv4', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel5', 1);
            scrollChat();
            break;
        case 'problemas':
            conteudo3 = 'Se o destinatário reclama de não recebimento de mensagens ou atrasos, envie um e-mail com cópia para você que a fila de saída de mensagens é única e saberá se está ocorrendo atrasos internos a UFES ou no destinatário. Para abrir ticket diretamente com a equipe gestora do serviço, acessar o endereço eletrônico http://atendimento.ufes.br selecionando tópico de ajuda "TECNOLOGIA DA INFORMAÇÃO / E-mail / Institucional" e informando problema e os testes já realizados, telefone de contato, hora do incidente. O maior número de informações possível.'
            document.getElementById('balao-dinamico-resposta-nivel5').innerHTML = conteudo3;
            document.getElementById('balao-dinamico-resposta-nv4').innerHTML = 'Identificação de Problemas';
            alterarOpacidade('balao-dinamico-resposta-nv4', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel5', 1);
            scrollChat();
            break;
        case 'alterarSenhaEmail':
            conteudo3 = '<div class="balao balao-dinamico">' +
                        '<div>Escolha uma opção:</div>' + 
                        '<button id="alterarEmail"                     onclick="mostrarNivel6(id)">Alterar Senha</button>' +
                        '<button id="recuperarSenhaEmail"              onclick="mostrarNivel6(id)">Recuperação de Senha / Primeiro Acesso</button>' +
                        '</div>';
            document.getElementById('balao-dinamico-resposta-nivel5').innerHTML = conteudo3;
            document.getElementById('balao-dinamico-resposta-nv4').innerHTML = 'Alterar senha, Recuperar e Primeiro acesso';
            alterarOpacidade('balao-dinamico-resposta-nv4', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel5', 1);
            scrollChat();
            break;
    }
}


function mostrarNivel6(opcao4){
    /*
    * Último submenu disponível, caso deseje criar mais algum, basta seguir o esqueleto:
    *
    * function mostrarNivelN(){
    *   var conteudoN = '';
    * 
    *   Switch(opcaoN){
    *       case 'opcaoN':
    *           conteudo4 = 'mensagem';
    *           document.getElementById('balao-dinamico-resposta-nivel6').innerHTML = conteudoN;
    *           document.getElementById('balao-dinamico-resposta-nv5').innerHTML = 'Mensagem do balão';
    *           alterarOpacidade('balao-dinamico-resposta-nv5', 1);
    *           alterarOpacidade('balao-dinamico-resposta-nivel6', 1);
    *           scrollChat();
    *           break;
    *       }
    * } 
    * Para a funcao mostrarNivelN() funcionar se torna necessário haver um case nesta funcao mostrarNivel6() gerando um submenu, com botões do tipo: '<button id="opçãoN" onclick="mostrarNivelN(id)">Descrição do botão</button>'
    * 
    * Deve-se também adicionar ao arquivo atendimento.html a seguinte div: <div id="balao-dinamico-resposta-nivelN" class="balao-opcoes1 delay-show transition-delay"></div>
    */
    resetarDivsPosteriores('balao-dinamico-resposta-nivel6');

    var conteudo4 = '';

    switch(opcao4){
        case 'alterarEmail':
            conteudo4 = 'Procedimentos, dúvidas e demais orientações no eletrônico: <a href="https://senha.ufes.br/site/alteraSenha">https://senha.ufes.br/site/alteraSenha</a>';
            document.getElementById('balao-dinamico-resposta-nivel6').innerHTML = conteudo4;
            document.getElementById('balao-dinamico-resposta-nv5').innerHTML = 'Alterar Senha';
            alterarOpacidade('balao-dinamico-resposta-nv5', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel6', 1);
            scrollChat();
            break;
        
        case 'recuperarSenhaEmail':
            conteudo4 = 'Procedimentos, dúvidas e demais orientações no eletrônico <a href="https://senha.ufes.br/site/recuperaCredenciais">https://senha.ufes.br/site/recuperaCredenciais</a>'
            document.getElementById('balao-dinamico-resposta-nivel6').innerHTML = conteudo4;
            document.getElementById('balao-dinamico-resposta-nv5').innerHTML = 'Recuperação de Senha / Primeiro Acesso';
            alterarOpacidade('balao-dinamico-resposta-nv5', 1);
            alterarOpacidade('balao-dinamico-resposta-nivel6', 1);
            scrollChat();
            break;
    }

}


function scrollChat() {
    /*
    *Rola o chat automaticamente para a ultima div a mostra
    */
    var chatDiv = document.querySelector('.chat');
    chatDiv.scrollTop = chatDiv.scrollHeight;
}

function alterarOpacidade(elementoId, novaOpacidade) {
    /*
    * Todas as divs de submenu já se encontram criadas, porém estão ocultas e não clicáveis para o usuário, esta função habilita a opacidade das mesma, e permite que se tornem clicáveis.
    */
    var elemento = document.getElementById(elementoId);
    if (elemento) {
        elemento.style.opacity = novaOpacidade;
    } else {
        console.error("Elemento não encontrado com o ID: " + elementoId);
    }
}

function resetarDivsPosteriores(nivelAtual) {
    /*
    * Função responsável por atualizar a ultima div. Caso o usuário tenha selecionado uma opção errada, se no menu anterior escolher outra opção, está função atualiza a div para a opção selecionada.
    */
    var divsPosteriores = [
        'balao-opcoes-resposta',
        'balao-dinamico',
        'balao-dinamico-resposta-nv2',
        'balao-dinamico-resposta',
        'balao-dinamico-resposta-nv3',
        'balao-dinamico-resposta-nivel4',
        'balao-dinamico-resposta-nv4',
        'balao-dinamico-resposta-nivel5',
        'balao-dinamico-resposta-nv5',
        'balao-dinamico-resposta-nivel6'
    ];

    // Oculta todas as divs posteriores à div atual
    for (var i = divsPosteriores.indexOf(nivelAtual) + 1; i < divsPosteriores.length; i++) {
        var div = document.getElementById(divsPosteriores[i]);
        if (div) {
            div.innerHTML = '';
            alterarOpacidade(divsPosteriores[i], 0);
        }
    }
}