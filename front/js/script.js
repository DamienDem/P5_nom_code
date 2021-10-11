
const items = document.getElementById('items');
let products = [];
const getProducts = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => products = data );
    console.log(products);
};
const productsDisplay = async () => {
    await getProducts ();

    items.innerHTML = products.map((product) => 
    `
    <a href="./product.html?id=${product._id}">
    <article>
    <img src="${product.imageUrl}" alt="${product.altTxt}, ${product.name}">
    <h3 class="productName">${product.name}</h3>
    <p class="productDescription">${product.description}</p>
    </article>
    </a>
    `)
    .join("");
}
    productsDisplay();





