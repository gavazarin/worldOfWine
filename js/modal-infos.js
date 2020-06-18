function mostrarModalExp(modalID) {
    const modalInfo = document.getElementById(modalID);
    modalInfo.classList.add('mostrar-info-exp');
}
const openInfo2exp = document.querySelector('.infos-2exp');
openInfo2exp.addEventListener('click', function() {
    mostrarModalExp('modal-info-2exp');
})
const openInfo3exp = document.querySelector('.btn-3exp');
openInfo3exp.addEventListener('click', function() {
    mostrarModalExp('cards-3exp');
})
const openInfo6exp = document.querySelector('.btn-6exp');
openInfo6exp.addEventListener('click', function() {
    mostrarModalExp('cards-6exp');
})
const openInfoPrata = document.querySelector('.btn-prata');
openInfoPrata.addEventListener('click', function() {
    mostrarModalExp('cards-prata');
})
const openInfoWine = document.querySelector('.btn-wine');
openInfoWine.addEventListener('click', function() {
    mostrarModalExp('cards-wine');
})
const openInfoCork = document.querySelector('.btn-cork');
openInfoCork.addEventListener('click', function() {
    mostrarModalExp('cards-cork');
})
const openInfoFashion = document.querySelector('.btn-fashion');
openInfoFashion.addEventListener('click', function() {
    mostrarModalExp('cards-fashion');
})
const openInfoVessels = document.querySelector('.btn-vessels');
openInfoVessels.addEventListener('click', function() {
    mostrarModalExp('cards-vessels');
})
const openInfoChocolate = document.querySelector('.btn-chocolate');
openInfoChocolate.addEventListener('click', function() {
    mostrarModalExp('cards-chocolate');
})


// function fecharBilhetes(bilhetesID) {
//     const modal = document.getElementById(bilhetesID);
//     modal.classList.remove('mostrar');
// }
// const close2exp = document.querySelector('.close-2exp');
// close2exp.addEventListener('click', function() {
//     fecharBilhetes('cards-2exp');
// })
// const close3exp = document.querySelector('.close-3exp');
// close3exp.addEventListener('click', function() {
//     fecharBilhetes('cards-3exp');
// })
// const close6exp = document.querySelector('.close-6exp');
// close6exp.addEventListener('click', function() {
//     fecharBilhetes('cards-6exp');
// })
// const closePrata = document.querySelector('.close-prata');
// closePrata.addEventListener('click', function() {
//     fecharBilhetes('cards-prata');
// })
// const closeWine = document.querySelector('.close-wine');
// closeWine.addEventListener('click', function() {
//     fecharBilhetes('cards-wine');
// })
// const closeCork = document.querySelector('.close-cork');
// closeCork.addEventListener('click', function() {
//     fecharBilhetes('cards-cork');
// })
// const closeFashion = document.querySelector('.close-fashion');
// closeFashion.addEventListener('click', function() {
//     fecharBilhetes('cards-fashion');
// })
// const closeVessels = document.querySelector('.close-vessels');
// closeVessels.addEventListener('click', function() {
//     fecharBilhetes('cards-vessels');
// })
// const closeChocolate = document.querySelector('.close-chocolate');
// closeChocolate.addEventListener('click', function() {
//     fecharBilhetes('cards-chocolate');
// })