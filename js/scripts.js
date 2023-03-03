/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let list = document.getElementById('produto_lista')

let card_product = `
<div class="col mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src=":img_prd" alt=":alt_img" loading="lazy" />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">:title</h5>
                <!-- Product price-->
                :price
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Comprar</a>
            </div>
        </div>
    </div>
</div>
`

document.addEventListener("DOMContentLoaded", (event) => {
    list.textContent = '';
    fetch('https://dummyjson.com/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data.products
        })
        .then(produtos => {
            loadProducts(produtos)
        })
});

let loadProducts = (products) => {
    for (let i = 0; i < products.length; i++) {
        let card = card_product
            .replace(':img_prd', products[i].images[0])
            .replace(':title', products[i].title)
            .replace(':price', `R$ ${(parseFloat(products[i].price.toString()).toFixed(2)).toString().replace('.', ',')}`)
            .replace(':alt_img', products[i].description)
        list.innerHTML += card
    }
}