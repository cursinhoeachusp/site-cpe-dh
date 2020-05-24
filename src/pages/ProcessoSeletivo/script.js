window.addEventListener('load', function(){
    function animaScroll(){
        let botao = document.getElementById('principal')
        if(botao.checked == false){
            botao.checked = true
        }
    }

    window.addEventListener('scroll', animaScroll)
})