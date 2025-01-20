const buttonAjouterPanier1 = document.getElementById("btn1");
const buttonAjouterPanier2 = document.getElementById("btn2");
const buttonAjouterPanier3 = document.getElementById("btn3");
console.log(buttonAjouterPanier1);
console.log(buttonAjouterPanier2);
console.log(buttonAjouterPanier3);

buttonAjouterPanier1.addEventListener('click', () => {
    alert('Article  1 ajouté au panier');
});

buttonAjouterPanier2.addEventListener('click', () => {
    alert('Article  2 ajouté au panier');
});

buttonAjouterPanier3.addEventListener('click', () => {
    alert('Article 3 ajouté au panier');
});