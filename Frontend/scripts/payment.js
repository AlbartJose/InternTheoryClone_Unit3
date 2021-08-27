    var content = document.getElementById('content');
    var red = document.getElementById('red');
var paymentBox = document.getElementById('paymentBox');
    var total = document.getElementById("total");


function card() {
    content.innerHTML = null;
    content.append(red);
    var card = document.createElement('div');
    card.setAttribute('id', 'credit_card')
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
    let rem = document.createElement('div');
    rem.setAttribute('class', 'remember')
    rem.innerHTML = 'Remember Card';
    content.append(rem);
    let checkout = document.createElement('button');
    checkout.setAttribute('id', 'checkout');
    checkout.innerHTML = total;
    paymentBox.append(checkout);
    content.style.overflow = 'hidden';
}
