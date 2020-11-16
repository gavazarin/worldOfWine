function mostrarBilhetes(bilhetesID) {
    const bilhetes = document.getElementById(bilhetesID);
    bilhetes.classList.add('mostrar');
}
const open2exp = document.querySelector('.btn-2exp');
open2exp.addEventListener('click', function() {
    mostrarBilhetes('cards-2exp');
})
const open3exp = document.querySelector('.btn-3exp');
open3exp.addEventListener('click', function() {
    mostrarBilhetes('cards-3exp');
})
// const open6exp = document.querySelector('.btn-6exp');
// open6exp.addEventListener('click', function() {
//     mostrarBilhetes('cards-6exp');
// })
const openPrata = document.querySelector('.btn-prata');
openPrata.addEventListener('click', function() {
    mostrarBilhetes('cards-prata');
})
const openWine = document.querySelector('.btn-wine');
openWine.addEventListener('click', function() {
    mostrarBilhetes('cards-wine');
})
const openCork = document.querySelector('.btn-cork');
openCork.addEventListener('click', function() {
    mostrarBilhetes('cards-cork');
})
// const openFashion = document.querySelector('.btn-fashion');
// openFashion.addEventListener('click', function() {
//     mostrarBilhetes('cards-fashion');
// })
const openVessels = document.querySelector('.btn-vessels');
openVessels.addEventListener('click', function() {
    mostrarBilhetes('cards-vessels');
})
const openChocolate = document.querySelector('.btn-chocolate');
openChocolate.addEventListener('click', function() {
    mostrarBilhetes('cards-chocolate');
})


function fecharBilhetes(bilhetesID) {
    const modal = document.getElementById(bilhetesID);
    modal.classList.remove('mostrar');
}
const close2exp = document.querySelector('.close-2exp');
close2exp.addEventListener('click', function() {
    fecharBilhetes('cards-2exp');
})
const close3exp = document.querySelector('.close-3exp');
close3exp.addEventListener('click', function() {
    fecharBilhetes('cards-3exp');
})
// const close6exp = document.querySelector('.close-6exp');
// close6exp.addEventListener('click', function() {
//     fecharBilhetes('cards-6exp');
// })
const closePrata = document.querySelector('.close-prata');
closePrata.addEventListener('click', function() {
    fecharBilhetes('cards-prata');
})
const closeWine = document.querySelector('.close-wine');
closeWine.addEventListener('click', function() {
    fecharBilhetes('cards-wine');
})
const closeCork = document.querySelector('.close-cork');
closeCork.addEventListener('click', function() {
    fecharBilhetes('cards-cork');
})
// const closeFashion = document.querySelector('.close-fashion');
// closeFashion.addEventListener('click', function() {
//     fecharBilhetes('cards-fashion');
// })
const closeVessels = document.querySelector('.close-vessels');
closeVessels.addEventListener('click', function() {
    fecharBilhetes('cards-vessels');
})
const closeChocolate = document.querySelector('.close-chocolate');
closeChocolate.addEventListener('click', function() {
    fecharBilhetes('cards-chocolate');
})