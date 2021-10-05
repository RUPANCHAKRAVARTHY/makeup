const first_container = document.createElement("div");
first_container.setAttribute("class", "first_container");
document.body.append(first_container);
const second_container = document.createElement("div");
second_container.setAttribute("class", "second_container");
first_container.append(second_container);
const third_container = document.createElement("div");
third_container.setAttribute("class", "third_container");
first_container.append(third_container);
async function getdetails() {
    
        const url = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
        const data = await url.json();
        console.log(data);
        data.forEach((product) => createProduct(product));     
    
}
getdetails();
function createProduct({ brand, name, price, price_sign, image_link, product_link, description }) {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `
        <div class = "image_container">
            <img src = "${image_link}" alt = "Product Image">
        </div>
        <div class = "product_info">
            <p class = "brand">${brand}</p>
            <p class = "name">${name}</p>
            <p class = "price">${price}${price_sign}</p>
        </div>
        <div class = "more_details">
                <a href = "${product_link}" target = "_blank">CLICK TO BUY</a>
                <p class = "show_description">Description</p>
                <div class = "description">
                    ${description}
                </div>
        <div>`;
    third_container.append(container);    
}