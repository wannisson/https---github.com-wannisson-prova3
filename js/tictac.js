angular.module("tictac", []).
controller("game", function($scope,$timeout,$interval) {

        var carta1 = 0;
        var carta2 = 0;
        var cont = 0;
        
        $scope.totalPontos = 0;
        $scope.totalErros = 0;

        $scope.tempoRestante = null;

        $scope.exibeBotao = true;

        $scope.venceu = false;
        $scope.perdeu = false;
         $scope.teste = 0;



        $scope.iniciarJogo = function(){   



        $scope.tabuleiro = [
        {nome: "imagens/10.png",selecionando: true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/10.png",selecionando: true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/1.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/1.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/2.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/2.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/3.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/3.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/4.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/4.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/5.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/5.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/6.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/6.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/7.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/7.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/8.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/8.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/9.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false},
        {nome: "imagens/9.png",selecionando : true,fundo: "imagens/fundo.png",bloqueado: false}];	
    

        embaralharCartas();
        $timeout(esconderCartas,1999);
        
        $scope.totalPontos = 0;
        $scope.totalErros = 0;
        $scope.tempoRestante = null;
        $scope.iniciarTempo();
        $scope.exibeBotao = false;


        function esconderCartas() {
            debugger;

            for(i = 0; i < $scope.tabuleiro.length; i++){
            if($scope.tabuleiro[i] != null){
                var aux = $scope.tabuleiro[i];

                if(aux.selecionando === true){
                   aux.selecionando = false;

                }
            }
            }
        }

    }


            $scope.iniciarTempo = function() {
            
            $scope.textoTempo = "TEMPO DE JOGO";

            $scope.tempoRestante = $interval(function() {
                $scope.textoTempo = new Date();
            }, 3000);

            };

                    
            $scope.reiniciar = function(){

                $scope.paraTempo();
                $scope.iniciarJogo();
            };

            $scope.jogar = function(pos) {
            
                if ($scope.tabuleiro[pos]) {
                    if(cont == 0){
                    carta1 =  $scope.tabuleiro[pos];
                    carta1.selecionando = true;
                    carta1.bloqueado = true;
                    cont++;
                   
                    if(carta1.bloqueado == true){
                        return;
                    }

                    return;
                }else if(cont == 1){
                carta2 = $scope.tabuleiro[pos];
                cont++;
                carta2.selecionando = true;
                carta2.bloqueado = true;
                
                
                if(carta2.bloqueado == true){
                        return;
                    }     
                
                    }else{
                        
                $timeout(verifica(carta1,carta2),1999);
                cont = 0;
                if(carta1.bloqueado || carta2.bloqueado == true){
                    return;

                }


                $scope.jogar(pos);
                    }
                
            }
        }

        function verifica(carta1,carta2){

        if(carta1.nome.valueOf() == carta2.nome.valueOf()){

                carta1.selecionando = true;
                carta2.selecionando = true;
                carta1.bloqueado = true;
                carta2.bloqueado  = true;
                $scope.totalPontos = $scope.totalPontos + 1;
                
                $scope.teste++;
                var qtd = $scope.teste;
                debugger;
                verificaGanhou(qtd);
                }else{

                carta1.selecionando = false;
                carta2.selecionando= false;
                carta1.bloqueado = false;
                carta2.bloqueado = false;
                $scope.totalErros = $scope.totalErros + 1;
                }


            }



            function verificaGanhou(qtd){
                if($scope.teste == 9  && $scope.totalPontos > $scope.totalErros){
                    $scope.venceu = true;
                    debugger;
                }else if($scope.teste == 9  && $scope.totalPontos < $scope.totalErros){
                    $scope.perdeu = true;
                }
            }

            function embaralharCartas() {

                var i = $scope.tabuleiro.length, j, tempi, tempj;
                if(i == 0) return false;
                while( --i) {
                    j = Math.floor(Math.random() * (i + 1));
                    tempi = $scope.tabuleiro[i];
                    tempj = $scope.tabuleiro[j];
                    $scope.tabuleiro[i] = tempj;
                    $scope.tabuleiro[j] = tempi;
                } 
            }

            
            });