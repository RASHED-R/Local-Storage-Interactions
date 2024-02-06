const productField = document.getElementById('product-field');
const quantityField = document.getElementById('quantity-field');
const productList = document.getElementById('product-list');

// add product 
const addProduct = () => {
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = ''
    quantityField.value = ''
    displayAddProduct(product, quantity)
    saveProductInLocalStorage(product, quantity);
}

// display in ui
const displayAddProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerHTML = `${product} : ${quantity}`
    productList.appendChild(li);
}

// check the item is it in the local storage or not
const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart'); // check cart is in local storage or not
    if (storedCart) {
        cart = JSON.parse(storedCart); // if cart is in local storage then parse it in JSON format
    }
    return cart; // if not in local storage then return empty object
}

// save product in localStorage
const saveProductInLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart()
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart); // we need to stringify the key and value without that we cannot save it in local storage.
    localStorage.setItem('cart', cartStringify); // save it in local storage
}


// get the value from local storage and display it on ui

const displayProductFromLocalStorage = () => {
    const saveProduct = getStoredShoppingCart(); // get the object which is in already saved in local storage
    for (const product in saveProduct) { // get the product from object using for in loop
        const quantity = saveProduct[product]
        displayAddProduct(product, quantity) // display the everything which is saved in local storage.
    }
}
displayProductFromLocalStorage();