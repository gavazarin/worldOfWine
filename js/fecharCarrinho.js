const fecharCarrinho = document.querySelector('.fechar-carrinho')
fecharCarrinho.addEventListener('click', function() {
    document.getElementById('carrinho-dropdown').checked = false
})