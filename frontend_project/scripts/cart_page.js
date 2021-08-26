var data_cart = document.getElementById("cart_values");
var num = 0;
var price = 0;
var amt = document.getElementById("amount")

function appendCart(el) {
    var div = document.createElement('div');
    var divname = document.createElement('div');
    divname.setAttribute("Id", "divName")
    var divprice = document.createElement('div');
    divname.innerHTML = `${el.name}    `;
    var divxprice = document.createElement("div")
    divxprice.setAttribute("Id" , "divXPrice")
    divxprice.innerHTML = `₹${el.xprice}`
    divprice.innerHTML = `₹${el.price}`;
    var btn = document.createElement("button");
    btn.innerHTML = 'X';
    div.append(btn, divname, divxprice, divprice);
    data_cart.append(div);
    btn.addEventListener('click', function () {
        removeFromCart(el);
    });
}

function showCart() {
    let data = JSON.parse(localStorage.getItem("cart"));
    data_cart.innerHTML = null;
    num = 0;
    price = 0;
    data.forEach(function (el) {
        num++;
        price = price + Number(el.price);
        appendCart(el);
    });
    netContent();
    
}
showCart();

function netContent() {
    let pr = document.getElementById("total");
    let divNet = document.getElementById("rate");
    divNet.innerHTML = null;
    let div1 = document.createElement('div');
    div1.setAttribute("Id", "divAmt")
    let div2 = document.getElementById('cartNum');
    div2.style.textAlign ="center"
    div2.style.borderRadius = "50%"
    div2.style.color = "white"
    div2.style.backgroundColor = "#DF1E2E"
    div1.innerHTML = `₹${price}`;
    div2.innerHTML = `${num}`;
    divNet.append(div1);
    pr.innerHTML = div1.innerHTML
    
}

function ApplyPromo() {
    let pr = document.getElementById("total");
    const promo = document.getElementById("couponcode").value;
    if (promo == "masai30") {
        price = Math.floor(price * .7);
    }
    pr.innerHTML = `₹${price}`
    
}

function checkOut() {
    var container = document.getElementById("container");
    container.style.visibility = 'visible';
    var forBg = document.getElementById("backgroundBlock")
    forBg.style.opacity = ".1"
    forBg.style.backgroundColor = "black"
}

function removeFromCart(obj) {
    let divAmt = document.getElementById("divAmt")
    let pr = document.getElementById("total")
    let data = JSON.parse(localStorage.getItem("cart"));
    var pos = data.map(function (e) {
        return e.name;
    }).indexOf(`${obj.name}`);
    data.splice(pos, 1);
    localStorage.setItem('cart', JSON.stringify(data));
    pr.innerHTML = null
    divAmt.innerHTML = null
    showCart();
}
function empty_cart() {
    let shopcar = document.getElementById("shopCart")
    shopcar.style.marginTop = "10%"
    localStorage.clear()
    let cartval = document.getElementById("cartNum")
    cartval.innerHTML = null
    showCart();
}

const content = document.getElementById('content');
const red = document.getElementById('red');
const paymentBox = document.getElementById('paymentBox');
const p_amt = document.getElementById("amount")
const pr = document.getElementById('total');
amount.innerHTML = pr.innerHTML;
function card() {

    content.innerHTML = null;
    content.append(red);
    const card = document.createElement('div');
    card.setAttribute('Id', 'credit_card')
    card.innerHTML = `<div class = 'card'>
    <div class = 'div1'>
    <label for='cardNumber'>Card Number</label><br>
    <input type="text" id="cardNumber" placeholder="Card Number">
    </div>
    <div class = 'div2'>
    <label for = 'expiry_date' style="width:100px;">Expiry</label><br>
    <input type="text" id="expiry_date" placeholder="Expiry Date" style="width:60px;">
    </div>
    <div class = 'div3'>
    <label for = 'card_name'>Card Name</label><br>
    <input type="text" id="card_name" placeholder="Card Name">
    </div>
    <div class = 'div4'>
    <label for = 'cvv'>Cvv</label><br>
    <input type="text" id="cvv" placeholder="Cvv" style="width:60px;">
    </div>
    
    </div>`;
    content.append(card);
    
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('class', 'checkbox')
    content.append(checkbox);
    const rem = document.createElement('div');
    rem.setAttribute('class', 'remember')
    rem.innerHTML = 'Remember Card';
    content.append(rem);
    const checkout = document.createElement('button');
    checkout.addEventListener('click',success);
    checkout.setAttribute('Id', 'checkout');
    checkout.innerHTML = `PAY ${pr.innerHTML}`;
    paymentBox.append(checkout);
    content.style.overflow = 'hidden';
    p_amt.innerHTML = pr.innerHTML
}

function success(){
    window.location.href = 'success.html'
}