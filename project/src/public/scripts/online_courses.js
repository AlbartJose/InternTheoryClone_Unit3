let i = 0;

function itstark(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    let cart = {
        name: "IT Starter Pack (4 Courses)",
        xprice: 32999,
        price: 15999
    }
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd1")
    itAdd.textContent = "Checkout"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    localStorage.setItem("cart", JSON.stringify(arr));
}
function finance(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    let cart = {
        name:"Finance Starter Pack",
        xprice: 23999,
        price:11999
    }
    
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd2")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function digital(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    let cart = {
        name:"Digital Marketing Course",
        xprice: 11999,
        price:5999
    }
    
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd3")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function stock(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    
    let cart = {
        name:"Stock Market Course",
        xprice: 11999,
        price:15999
    }
    
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd4")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function data(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    let cart = {
        name:"Data Analytics",
        xprice: 11999,
        price:5999
    }
    
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd5")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    localStorage.setItem("cart", JSON.stringify(arr));
}
function web(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    let cart = {
        name:"Web Development Course",
        xprice: 7999,
        price:3999
    }
    
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd6")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function android(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    let cart = {
        name:"Android App Development",
        xprice: 7999,
        price:3999
    }
    
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd7")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function itstart2(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    let cart = {
        name:"IT Starter Pack-2 (2 Courses)",
        xprice: 7999,
        price:3999
    }
    
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd8")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function advanced(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    let cart = {
        name:"Advanced Excel Course",
        xprice: 5999,
        price:2999
    }
    
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd9")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
function rpro(event){
    event.preventDefault()
    icon.style.marginTop = "initial"
    let cart = {
        name:"R Programming Course",
        xprice: 5999,
        price:2999
    }
    
    let arr;
    arr = localStorage.getItem("cart");
    
    if (arr == null) {
        arr = [];   
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    var itAdd = document.getElementById("itAdd10")
    itAdd.textContent = "CHECKOUT"
    const nam = cart.name;
    const found = arr.some(el => el.name === nam);
    if (found) {
        return;
    }
    arr.push(cart);
    let div2 = document.getElementById('cartNum');
    div2.innerHTML = `${++i}`
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    
    localStorage.setItem("cart", JSON.stringify(arr));
}
const    icon = document.getElementById("shopCart")
icon.addEventListener("click", function(){
    window.location.href ="cart_page.html"
})
icon.style.marginTop = "10%"