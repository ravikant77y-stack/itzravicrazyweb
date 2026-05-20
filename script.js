let cart = [];

/* SEARCH PRODUCTS */

function searchProducts(){

let input =
document
.getElementById("searchInput")
.value
.toLowerCase();

let products =
document
.querySelectorAll(".product");

products.forEach(product=>{

let text =
product.innerText.toLowerCase();

if(text.includes(input)){

product.style.display="block";

}else{

product.style.display="none";

}

});

}

/* CATEGORY FILTER */

function filterCategory(category){

let sections =
document.querySelectorAll(".category-section");

if(category==="all"){

sections.forEach(section=>{

section.style.display="block";

});

return;

}

sections.forEach(section=>{

if(section.classList.contains(category)){

section.style.display="block";

}else{

section.style.display="none";

}

});

}

/* ADD TO CART */

function addToCart(name,price,qty){

qty = parseInt(qty);

let existing =
cart.find(item=>item.name===name);

if(existing){

existing.qty += qty;

}else{

cart.push({
name:name,
price:price,
qty:qty
});

}

updateCart();

}

/* UPDATE CART */

function updateCart(){

let cartBox =
document.getElementById("cart");

if(!cartBox)return;

cartBox.innerHTML="";

let total = 0;

cart.forEach(item=>{

let subtotal =
item.price * item.qty;

total += subtotal;

cartBox.innerHTML += `

<div style="
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:12px;
padding:12px;
background:rgba(255,255,255,0.08);
border-radius:12px;
gap:10px;
">

<div>

<b>${item.name}</b><br>

${item.qty} pcs

</div>

<div>

₹${subtotal}

</div>

</div>

`;

});

cartBox.innerHTML += `

<h2 style="
margin-top:20px;
text-align:right;
">

Total: ₹${total}

</h2>

`;

}

/* WHATSAPP ORDER */

function sendWhatsApp(){

let name =
document.getElementById("name").value;

let phone =
document.getElementById("phone").value;

let address =
document.getElementById("address").value;

let note =
document.getElementById("note").value;

if(name==="" || phone==="" || address===""){

alert("Please fill all customer details");

return;

}

if(cart.length===0){

alert("Cart is empty");

return;

}

let message =
`*CRAXX ORDER*%0A%0A`;

message +=
`*Customer Name:* ${name}%0A`;

message +=
`*Phone:* ${phone}%0A`;

message +=
`*Address:* ${address}%0A`;

message +=
`*Note:* ${note}%0A%0A`;

message +=
`*Order Details:*%0A`;

let total = 0;

cart.forEach(item=>{

let subtotal =
item.price * item.qty;

total += subtotal;

message +=
`• ${item.name} × ${item.qty} pcs = ₹${subtotal}%0A`;

});

message +=
`%0A*Total Amount:* ₹${total}`;

let whatsappNumber =
"919930328353";

let url =
`https://wa.me/${whatsappNumber}?text=${message}`;

window.open(url,"_blank");

}