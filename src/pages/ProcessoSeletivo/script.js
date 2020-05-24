window.addEventListener('load', function(){
    function verificarStatus(){
        let datasProvas = document.querySelectorAll('data')
        let botoes = document.querySelectorAll('.inscrever')
        let tempo = document.querySelectorAll('.tempo')
        let datas = []
        let dataAtual = new Date()

        for(let indice of datasProvas){
            datas.push(new Date(indice.value))
        }

        for(let i = 0; i<datas.length; i++){
            let diferenca = datas[i].getTime() - dataAtual.getTime()
            if(diferenca < 0){
                botoes[i].appendChild(document.createTextNode('Encerrado'))
                tempo[i].appendChild(document.createTextNode(' Fechado'))
            }else{
                diferenca = Math.ceil(diferenca / (1*24*60*60*1000))
                botoes[i].appendChild(document.createTextNode('Inscreva-se'))
                tempo[i].appendChild(document.createTextNode(' ' + diferenca + ' dias para a prova'))
                botoes[i].classList.add('poteiro')
            }
        }
        
    }

    verificarStatus()

    window.addEventListener('scroll', function(){
        let botao = document.getElementById('principal')
        if(botao.checked == false){
            botao.checked = true
        }
    })
})