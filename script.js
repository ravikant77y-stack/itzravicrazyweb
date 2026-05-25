let cart = [];

let customerOrders = {};

fetch("orders.json")
.then(response => response.json())
.then(data => {

customerOrders = data;

});

/* CUSTOMER DATABASE */

let customers = [

{
name:"Falak General Stores",
phone:"9368890158",
address:"Jogeshwari"
},

{
name:"Omair Medical",
phone:"Not Available",
address:"Near Salman Medical, Jogeshwari"
},

{
name:"Gurukripa Pan Bidi Shop",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"Alete Sweet Stores",
phone:"9870203313",
address:"Near Usha Pan Bidi Shop"
},

{
name:"Usha Pan Shop",
phone:"Not Available",
address:"Amboli"
},

{
name:"Bhavani Ramji Stores",
phone:"Not Available",
address:"Amboli"
},

{
name:"Umar Bakery And General Stores",
phone:"7304821412",
address:"Near Central Society Medical, Bhawani Mata Road, Amboli"
},

{
name:"Jay Shri Store",
phone:"Not Available",
address:"Near Maa Laxmi General Store"
},

{
name:"Ramdev Super Market",
phone:"Not Available",
address:"Veera Desai Road"
},

{
name:"Salman Medical",
phone:"Not Available",
address:"Near Omair Medical, Jogeshwari"
},

{
name:"Aasha General Store",
phone:"Not Available",
address:"Not Available"
},

{
name:"Sangeeta Store",
phone:"Not Available",
address:"Near Hardik General Store"
},

{
name:"Popular Dairy",
phone:"Not Available",
address:"SV Road"
},

{
name:"KGN Stores",
phone:"7409538409",
address:"Near Yash Grain Store, Haji Gafoor Lane, Amboli"
},

{
name:"Yash Grain Stores",
phone:"8898419927",
address:"Near Medicare Medical, Sugra Bai Chawl, Amboli"
},

{
name:"Sahyog Medical",
phone:"Not Available",
address:"Not Available"
},

{
name:"Badiram Chaurasiya",
phone:"9038841837",
address:"Near Arwah Dairy, Jogeshwari Flyover, Near Jogeshwari Dhaba"
},

{
name:"Aarey Stall",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"Best Nagar Grahak Sahkari Sanstha",
phone:"8419938710",
address:"Opposite Galat Oil Depot, Best Nagar"
},

{
name:"Shree Sai Kirana Stores",
phone:"8355849241",
address:"MHB Colony Chawl 2"
},

{
name:"Honey Bakery",
phone:"9833752799",
address:"Jai Matadi Marg, Near ATC TVS Showroom"
},

{
name:"Shivshakti Medical",
phone:"9167458756",
address:"Near Bharat Bakery"
},

{
name:"Bharat Bakery And General Store",
phone:"Not Available",
address:"Motilal Nagar 1, Road No 1, Goregaon"
},

{
name:"Naaz Bakery And General Stores",
phone:"8356141741",
address:"Best Nagar"
},

{
name:"SK Balaji Store",
phone:"Not Available",
address:"Not Available"
},

{
name:"JK Store",
phone:"Not Available",
address:"Bhagat Singh Nagar"
},

{
name:"Krishna Medical",
phone:"Not Available",
address:"Vivek College, Siddharth Nagar, Goregaon"
},

{
name:"Sagar Bakery",
phone:"Not Available",
address:"Satkar Road"
},

{
name:"National Dairy",
phone:"Not Available",
address:"Near Sagar Bakery, Jogeshwari"
},

{
name:"Shree Ganesh Medical",
phone:"8655490337",
address:"Yadav Nagar, Jogeshwari"
},

{
name:"SR Kirana Store (Sonairam)",
phone:"8291076308",
address:"Shakar Road, Makoi Chawl, Near Amar Yadav Davakhana, Jogeshwari Station"
},

{
name:"Anshika Dairy",
phone:"8850990317",
address:"Opposite SR Kirana Store (Sonairam)"
},

{
name:"Om Sai Marketing",
phone:"Not Available",
address:"Near Ganesh Medical"
},

{
name:"Salim Khan General Stores",
phone:"Not Available",
address:"Near Rite Medical 2"
},

{
name:"New Hindustan Bakery",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"NR Gupta Kirana Store",
phone:"Not Available",
address:"Opposite Persia Darbar"
},

{
name:"Venus Chemist",
phone:"Not Available",
address:"Markaz Views, SV Road, Jogeshwari Main Signal"
},

{
name:"Al Sana Store",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"Prince Bakery",
phone:"Not Available",
address:"Near National Super Market, Aksa Masjid Road"
},

{
name:"Javed General Store",
phone:"9833495520",
address:"Behind HP Petrol Pump, Near Salman Medical"
},

{
name:"Amber Super Market",
phone:"Not Available",
address:"Amrut Nagar Colony, Near A To Z Store, Jogeshwari West"
},

{
name:"Patel Bakery",
phone:"9967442095",
address:"Jogeshwari"
},

{
name:"Ayat General Store",
phone:"Not Available",
address:"Near Good Luck Bakery, Amrut Nagar, Ashnaya Apartment"
},

{
name:"Lucky General Stores",
phone:"Not Available",
address:"Near Goodluck Bakery"
},

{
name:"New Carona Medical",
phone:"Not Available",
address:"Near Danish"
},

{
name:"A To Z General Store",
phone:"Not Available",
address:"Not Available"
},

{
name:"Simnani Medical",
phone:"Not Available",
address:"Near Jogeshwari Station"
},

{
name:"Arwah Dairy",
phone:"Not Available",
address:"Jogeshwari Station"
},

{
name:"Metro Mini Mart",
phone:"Not Available",
address:"Near Arwah Dairy, Kohinoor Apartment, Station Road"
},

{
name:"Shree Kharghar",
phone:"9619193389",
address:"Plot No 72, Near Ambe Mata Mandir, 1 No Road, Near Station"
},

{
name:"Laxmi Mart",
phone:"9322215925",
address:"Jawahar Nagar, Near Jain Mandir Bus Stop"
},

{
name:"Pragati Super Mart",
phone:"Not Available",
address:"Goregaon West, Jawahar Nagar"
},

{
name:"Bhakti Corner",
phone:"9167080256",
address:"Near Tirupati General Store"
},

{
name:"Ratna Farsan And Dry Fruits",
phone:"Not Available",
address:"Jawahar Nagar"
},

{
name:"Ashtvinayak Food Spot",
phone:"9920206022",
address:"Jawahar Nagar, Near Ratna Farsan"
},

{
name:"Kiran General Store And Mangalore Store",
phone:"Not Available",
address:"Not Available"
},

{
name:"Shiv Medical",
phone:"9772197690",
address:"Near MK Gupta General Store"
},

{
name:"Betsa Kerala Mart",
phone:"Not Available",
address:"MG Road, Behind Manthan Hotel"
},

{
name:"Sai Super Market",
phone:"9930700701",
address:"Near Betsa Kerala Mart"
},

{
name:"Al Sifa General Store",
phone:"7666931515",
address:"Near Beet Chowki"
},

{
name:"SN General Store",
phone:"9867320532",
address:"Motilal Nagar No 2, MG Road, Khandaan Gully"
},

{
name:"Apna Bakery",
phone:"6396283030",
address:"Near Uncle Shop, Khandaan Gully"
},

{
name:"Uncle Shop",
phone:"7900066618",
address:"Motilal Nagar, Road No 3, Badi Masjid"
},

{
name:"Royal Bakery",
phone:"8279509033",
address:"Near Uncle Shop"
},

{
name:"Maharashtra Pan Bidi",
phone:"Not Available",
address:"Near Apna Bakery, Goregaon West, Moti Nagar No 2"
},

{
name:"Rubi Store",
phone:"Not Available",
address:"Goregaon West"
},

{
name:"Rathore Medical",
phone:"Not Available",
address:"Ram Mandir West Station Road, Near 2 Minutes"
},

{
name:"Gulshan Bakery Stores",
phone:"6393367883",
address:"Shop No 14, Sagar CHS, MMRDA Colony, Ram Mandir Road, Opposite Sangam Provision"
},

{
name:"Danish Bakery And General Store",
phone:"9870828954",
address:"Ram Mandir Road, Shop No 11, Near Gudiya General Store"
},

{
name:"New Jugnu",
phone:"Not Available",
address:"Jogeshwari"
},

{
name:"Jai Bhavani Dairy",
phone:"9082039302",
address:"Near Mahadev Dairy, Ram Mandir Road"
},

{
name:"Mahadev Dairy Farm",
phone:"885301275",
address:"Shivdham Co Op Housing Society, MMRDA Complex, Opposite Aman Store"
},

{
name:"Laxmi Dairy",
phone:"8445725121",
address:"Near Jai Ambika Stationery"
},

{
name:"Utkarsh Medical",
phone:"Not Available",
address:"Ram Mandir Road"
},

{
name:"Mr Mart",
phone:"Not Available",
address:"Near Sidra General Store"
},

{
name:"Sidra Store",
phone:"Not Available",
address:"Near Ambika Store"
},

{
name:"Jai Ambika Stationery Store",
phone:"Not Available",
address:"Ram Mandir Road, Near Utkarsh Medical"
},

{
name:"Naba Medical",
phone:"Not Available",
address:"Near Laxmi Dairy"
},

{
name:"New Ratnadeep Store",
phone:"Not Available",
address:"Goregaon West, SV Road, Near Gokul Restaurant And Bar"
},

{
name:"Corner Stone",
phone:"Not Available",
address:"Dindoshi, Gokuldham"
},

{
name:"Nagrik Dhanaya",
phone:"9819069820",
address:"Gokuldham Market, Near Hariom Medical, Goregaon East"
},

{
name:"Ashtvinayak General Store",
phone:"Not Available",
address:"Amboli, Near Ambe Chemist"
},

{
name:"Bhavani General Store",
phone:"9892869384",
address:"Near Sumit Pan Shop And Bhavani Ramji Store, Kevni Pada, Amboli"
},

{
name:"Sumit Pan Shop",
phone:"Not Available",
address:"Amboli"
},

{
name:"Nandu Stores",
phone:"Not Available",
address:"Shree Rameshwar Society, Near Radiant Smiles"
}

];

function normalizeCustomerName(name){

return name.trim().toLowerCase();

}

function getSavedCustomers(){

return JSON.parse(
localStorage.getItem("savedCustomers")
)||[];

}

function mergeCustomerLists(baseCustomers, savedCustomers){

let customerMap = {};

baseCustomers
.forEach(customer=>{

customerMap[normalizeCustomerName(customer.name)] = customer;

});

savedCustomers
.forEach(customer=>{

customerMap[normalizeCustomerName(customer.name)] = customer;

});

return Object
.values(customerMap)
.sort((a,b)=>a.name.localeCompare(b.name));

}

function refreshCustomers(){

customers =
mergeCustomerLists(
customers,
getSavedCustomers()
);

}

function saveCustomerDetails(name, phone, address){

let customer = {
name:name.trim(),
phone:phone.trim(),
address:address.trim()
};

let savedCustomers =
getSavedCustomers();

let existingIndex =
savedCustomers.findIndex(savedCustomer=>
normalizeCustomerName(savedCustomer.name) === normalizeCustomerName(customer.name)
);

if(existingIndex >= 0){

savedCustomers[existingIndex] = customer;

}else{

savedCustomers.push(customer);

}

localStorage.setItem(
"savedCustomers",
JSON.stringify(savedCustomers)
);

refreshCustomers();

}

function selectCustomerFromData(customerData){

selectCustomer(
JSON.parse(
decodeURIComponent(customerData)
)
);

}

refreshCustomers();

/* CUSTOMER AUTOFILL */

function showCustomerSuggestions(){

let input =
document.getElementById("name")
.value
.toLowerCase();

let box =
document.getElementById(
"customerSuggestions"
);

box.innerHTML = "";

if(input.length < 1)return;

customers
.filter(customer=>
customer.name
.toLowerCase()
.includes(input)
)
.slice(0,12)
.forEach(customer=>{

box.innerHTML += `

<div
class="customer-suggestion"
onclick="selectCustomerFromData(
'${encodeURIComponent(JSON.stringify(customer))}'
)"
>

${customer.name}

</div>

`;

});

}

function selectCustomer(customer){

document.getElementById("name").value =
customer.name;

document.getElementById("phone").value =
customer.phone;

document.getElementById("address").value =
customer.address;

document.getElementById(
"customerSuggestions"
).innerHTML = "";

showLastOrder(
customer.name
);

}

/* SEARCH PRODUCTS */

let productSearchCache = null;

let searchFrame = null;

function getProductSearchCache(){

if(productSearchCache){

return productSearchCache;

}

productSearchCache =
Array.from(
document.querySelectorAll(".product")
).map(product=>({

element:product,
text:[
product.querySelector("h3")?.textContent || "",
product.querySelector(".info")?.textContent || "",
product.closest(".category-section")?.querySelector(".category h2")?.textContent || ""
].join(" ").toLowerCase()

}));

return productSearchCache;

}

function getProductCatalog(){

return JSON.parse(
localStorage.getItem("productCatalog")
)||{};

}

function getCategorySection(category){

return document.querySelector(
`.category-section.${category || "savouries"} .products`
) || document.querySelector(".category-section.savouries .products");

}

function createProductCard(product){

let safeName =
product.name.replaceAll("'","\\'");

return `
<div class="product" data-custom-product="true">
<img loading="lazy" src="${product.image || ""}">
<div class="product-content">
<h3>${product.name}</h3>
<p class="info">${product.gram || ""} • Custom product</p>
<p id="last-${product.name.replaceAll(" ","-")}" class="last-product-order"></p>
<div class="product-bottom">
<p class="price">₹${product.price || 0}</p>
<button class="add-btn" onclick="addToCart(this,'${safeName}',${product.price || 0})">ADD</button>
</div>
</div>
</div>
`;

}

function applyProductCatalog(){

let catalog =
getProductCatalog();

Object
.values(catalog)
.forEach(product=>{

let existing =
Array.from(
document.querySelectorAll(".product")
).find(card=>
card.querySelector("h3")?.textContent.trim() === product.name
);

if(existing){

let image =
existing.querySelector("img");

let info =
existing.querySelector(".info");

let price =
existing.querySelector(".price");

let button =
existing.querySelector(".add-btn");

if(image && product.image){

image.src = product.image;

}

if(info){

info.innerText =
`${product.gram || ""} • Custom product`;

}

if(price){

price.innerText =
`₹${product.price || 0}`;

}

if(button){

button.setAttribute(
"onclick",
`addToCart(this,'${product.name.replaceAll("'","\\'")}',${product.price || 0})`
);

}

let targetSection =
getCategorySection(product.category);

if(targetSection && existing.parentElement !== targetSection){

targetSection.appendChild(existing);

}

}else{

let section =
getCategorySection(product.category);

if(section){

section.insertAdjacentHTML(
"beforeend",
createProductCard(product)
);

}

}

});

productSearchCache = null;
productPriceCache = null;

}

function searchProducts(){

let input =
document
.getElementById("searchInput")
.value
.toLowerCase();

if(searchFrame){

cancelAnimationFrame(searchFrame);

}

searchFrame =
requestAnimationFrame(()=>{

getProductSearchCache()
.forEach(product=>{

product.element.style.display =
product.text.includes(input) ? "" : "none";

});

document
.querySelectorAll(".category-section")
.forEach(section=>{

let hasVisibleProduct =
Array.from(
section.querySelectorAll(".product")
).some(product=>product.style.display !== "none");

section.style.display =
hasVisibleProduct ? "" : "none";

});

searchFrame = null;

});

}

window.addEventListener(
"load",
()=>{

applyProductCatalog();
getProductSearchCache();

}
);

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

function createCartKey(productName, gram, unit){

return [
productName,
gram || "",
unit || ""
].join("__");

}

function getSelectedProductVariant(button, productName, fallbackPrice){

let product =
button.closest(".product");

let select =
product ? product.querySelector(".size-select") : null;

if(!select){

return {
key:createCartKey(productName,"",""),
productName:productName,
name:productName,
gram:"",
unit:"",
price:fallbackPrice
};

}

let option =
select.options[select.selectedIndex];

let gram =
option.dataset.gram || "";

let unit =
option.dataset.unit || "";

let price =
Number(option.dataset.price || fallbackPrice);

return {
key:createCartKey(productName,gram,unit),
productName:productName,
name:productName,
gram:gram,
unit:unit,
price:price
};

}

function updateAddButtonQty(button){

let productName =
button.dataset.productName;

let variant =
getSelectedProductVariant(
button,
productName,
Number(button.dataset.basePrice || 75)
);

let item =
cart.find(item=>item.key === variant.key);

let remaining =
getRemainingStockForVariant(variant);

if(remaining !== null && remaining <= 0){

button.disabled = true;
button.innerText = "OUT OF STOCK";
return;

}

button.disabled = false;

button.innerText =
item ? item.qty : "ADD";

}

function updateProductPrice(product, price){

let priceBox =
product.querySelector(".price");

if(priceBox){

priceBox.innerText =
`₹${price}`;

}

}

function getVariantStockKey(variant){

return variant.gram === "52gm" ? "52gm__pcs" : "original";

}

function getStoredStock(){

return JSON.parse(
localStorage.getItem("stock")
)||{};

}

function getStockValueForVariant(variant){

let stock =
getStoredStock();

if(!stock.hasOwnProperty(variant.productName)){

return null;

}

let value =
stock[variant.productName];

if(typeof value === "number"){

return variant.gram === "52gm" ? 0 : Number(value);

}

if(value && typeof value === "object"){

return Number(value[getVariantStockKey(variant)] || 0);

}

return null;

}

function getCartQtyForVariant(variant){

let item =
cart.find(item=>item.key === variant.key);

return item ? Number(item.qty) : 0;

}

function getRemainingStockForVariant(variant){

let stockValue =
getStockValueForVariant(variant);

if(stockValue === null){

return null;

}

return Math.max(
0,
stockValue - getCartQtyForVariant(variant)
);

}

function updateProductStockStatus(button){

let product =
button.closest(".product");

if(!product){

return;

}

let status =
product.querySelector(".stock-status");

if(!status){

status =
document.createElement("p");

status.className = "stock-status";

let lastOrder =
product.querySelector(".last-product-order");

if(lastOrder){

lastOrder.after(status);

}else{

product.querySelector(".product-content").appendChild(status);

}

}

let variant =
getSelectedProductVariant(
button,
button.dataset.productName,
Number(button.dataset.basePrice || 75)
);

let remaining =
getRemainingStockForVariant(variant);

product.classList.remove("is-low-stock","is-out-stock");
button.disabled = false;

if(remaining === null){

status.innerText = "";

return;

}

if(remaining <= 0){

status.innerText = "Out of stock";
product.classList.add("is-out-stock");
button.disabled = true;
button.innerText = "OUT OF STOCK";
return;

}

if(remaining <= 10){

status.innerText =
`Low stock: ${remaining} remaining`;
product.classList.add("is-low-stock");

}else{

status.innerText = "";

}

}

function updateAllProductStockStatus(){

document
.querySelectorAll(".add-btn")
.forEach(button=>{

updateProductStockStatus(button);
updateAddButtonQty(button);

});

}

function initializeProductSizes(){

document
.querySelectorAll(".product")
.forEach(product=>{

let button =
product.querySelector(".add-btn");

let info =
product.querySelector(".info");

let bottom =
product.querySelector(".product-bottom");

let priceBox =
product.querySelector(".price");

if(!button || !bottom || product.querySelector(".size-select")){

return;

}

let action =
button.getAttribute("onclick") || "";

let match =
action.match(/addToCart\(this,'(.+)',(\d+)\)/);

if(!match){

return;

}

let productName =
match[1];

let catalogProduct =
getProductCatalog()[productName] || {};

let basePrice =
Number(match[2]);

let pcsPrice =
Number(catalogProduct.pcsPrice || 15);

let gramMatch =
info ? info.textContent.match(/\d+\s*gm/i) : null;

let baseGram =
gramMatch ? gramMatch[0].replace(/\s+/g,"") : "";

let baseGramLabel =
baseGram || "Original";

button.dataset.productName = productName;
button.dataset.basePrice = basePrice;

if(priceBox){

priceBox.dataset.baseText =
priceBox.innerText;

}

let select =
document.createElement("select");

select.className = "size-select";
select.setAttribute("aria-label",`${productName} size`);

select.innerHTML =
`
<option data-gram="${baseGram}" data-price="${basePrice}" data-unit="">${baseGramLabel} - ₹${basePrice}</option>
<option data-gram="52gm" data-price="${pcsPrice}" data-unit="pcs">52gm - ₹${pcsPrice} pcs</option>
`;

select.addEventListener(
"change",
()=>{

let option =
select.options[select.selectedIndex];

updateProductPrice(
product,
Number(option.dataset.price || basePrice)
);

updateProductStockStatus(button);
updateAddButtonQty(button);

}
);

bottom.insertBefore(select,bottom.firstChild);

updateProductPrice(product,basePrice);
updateProductStockStatus(button);

});

}

window.addEventListener(
"load",
()=>{

applyProductCatalog();
initializeProductSizes();

}
);

window.addEventListener(
"storage",
event=>{

if(event.key === "stock"){

updateAllProductStockStatus();

}

}
);

function addToCart(button, productName, price) {

let variant =
getSelectedProductVariant(
button,
productName,
price
);

let item =
cart.find(item=>item.key === variant.key);

let remaining =
getRemainingStockForVariant(variant);

if(remaining !== null && remaining <= 0){

alert("This product is out of stock");

updateProductStockStatus(button);

return;

}

let qty =
item ? item.qty : 0;

qty++;

button.innerText = qty;

cart = cart.filter(item => item.key !== variant.key);

cart.push({
key:variant.key,
productName:variant.productName,
name:variant.name,
gram:variant.gram,
unit:variant.unit,
price: variant.price,
qty: qty
});

updateCart();

document
.querySelectorAll(".add-btn")
.forEach(button=>{

updateProductStockStatus(button);
updateAddButtonQty(button);

});

}

function removeItem(key){

let item = cart.find(item => item.key === key);

if(!item) return;

item.qty--;

if(item.qty <= 0){
cart = cart.filter(item => item.key !== key);
}

updateCart();

document
.querySelectorAll(".add-btn")
.forEach(button=>{

updateProductStockStatus(button);
updateAddButtonQty(button);

});

}

/* UPDATE CART */

function updateCart(){

let cartBox =
document.getElementById("cart");

if(!cartBox)return;

if(cart.length===0){

cartBox.innerHTML="";

updateCartBubbles();

return;

}

let total = 0;

let rows =
cart.map(item=>{

let subtotal =
item.price * item.qty;

total += subtotal;

let displayName =
item.gram ? `${item.name} (${item.gram})` : item.name;

let unitText =
item.unit ? ` ${item.unit}` : "";

return `

<div class="cart-row">

<div>

<b>${displayName}</b><br>

${item.qty}${unitText}

</div>

<div>

₹${subtotal}

<button
onclick="removeItem('${item.key}')"
class="cart-remove-btn"
>

Remove

</button>

</div>

</div>

`;

});

cartBox.innerHTML =
rows.join("") +
`

<h2 class="cart-total">

Total: ₹${total}

</h2>

`;

updateCartBubbles();

}

function getCartSummary(){

return cart.reduce(
(summary,item)=>{

let qty =
Number(item.qty || 0);

let amount =
Number(item.price || 0) * qty;

if(item.unit === "pcs"){

summary.pcsQty += qty;
summary.pcsAmount += amount;

}else{

summary.pattiQty += qty;
summary.pattiAmount += amount;

}

summary.totalQty += qty;
summary.totalAmount += amount;

return summary;

},
{
pattiQty:0,
pcsQty:0,
totalQty:0,
pattiAmount:0,
pcsAmount:0,
totalAmount:0
}
);

}

function ensureCartBubbles(){

let bubbles =
document.getElementById("cartBubbles");

if(bubbles){

return bubbles;

}

bubbles =
document.createElement("div");

bubbles.id = "cartBubbles";
bubbles.className = "cart-bubbles";
bubbles.innerHTML =
`
<div class="cart-bubble cart-bubble-patti">
<span class="cart-bubble-icon">🛒</span>
<strong id="pattiBubbleCount">0</strong>
<small>Patti</small>
</div>
<div class="cart-bubble cart-bubble-pcs">
<span class="cart-bubble-icon">▣</span>
<strong id="pcsBubbleCount">0</strong>
<small>PCS</small>
</div>
`;

document.body.appendChild(bubbles);

return bubbles;

}

function updateCartBubbles(){

let summary =
getCartSummary();

let bubbles =
ensureCartBubbles();

let pattiBubble =
bubbles.querySelector(".cart-bubble-patti");

let pcsBubble =
bubbles.querySelector(".cart-bubble-pcs");

document.getElementById("pattiBubbleCount").innerText =
summary.pattiQty;

document.getElementById("pcsBubbleCount").innerText =
summary.pcsQty;

pattiBubble.hidden =
summary.pattiQty === 0;

pcsBubble.hidden =
summary.pcsQty === 0;

bubbles.hidden =
summary.totalQty === 0;

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

saveCustomerDetails(
name,
phone,
address
);

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

let pattiItems =
cart.filter(item=>item.unit !== "pcs");

let pcsItems =
cart.filter(item=>item.unit === "pcs");

let total = 0;

let totalPatti = 0;

let totalPcs = 0;

let pattiAmount = 0;

let pcsAmount = 0;

pattiItems.forEach(item=>{

let subtotal =
item.price * item.qty;

total += subtotal;
pattiAmount += subtotal;
totalPatti += item.qty;

message +=
`• ${item.name} × ${item.qty}%0A`;

});

if(pattiItems.length){

message +=
`%0A*Total Patti:* ${totalPatti}`;

message +=
`%0A*Net:* ₹7.5`;

message +=
`%0A*Patti Amount:* ₹${pattiAmount}%0A`;

}

if(pattiItems.length && pcsItems.length){

message +=
`%0A`;

}

if(pcsItems.length){

let pcsGroups =
{};

pcsItems.forEach(item=>{

let key =
Number(item.price || 0);

if(!pcsGroups[key]){

pcsGroups[key] = [];

}

pcsGroups[key].push(item);

});

Object
.keys(pcsGroups)
.forEach(price=>{

message +=
`%0A*PCS Products - Net ₹${price}*%0A`;

pcsGroups[price].forEach(item=>{

let subtotal =
item.price * item.qty;

total += subtotal;
pcsAmount += subtotal;
totalPcs += item.qty;

message +=
`• ${item.name} × ${item.qty} pcs%0A`;

});

});

message +=
`%0A*Total PCS:* ${totalPcs}`;

message +=
`%0A*PCS Amount:* ₹${pcsAmount}`;

}

message +=
`%0A%0A*Total Amount:* ₹${total}`;

let whatsappNumber ="7304895165";

let url =
`whatsapp://send?phone=${whatsappNumber}&text=${message}`;

saveLastOrder(name);

updateStock();

setTimeout(()=>{

window.location.href = url;

},300);

}

function saveLastOrder(customerName){

let orders =
JSON.parse(
localStorage.getItem(
"customerOrders"
)
)||{};

orders[customerName]=
JSON.parse(
JSON.stringify(cart)
);

localStorage.setItem(
"customerOrders",
JSON.stringify(orders)
);

}

function showLastOrder(customerName){

let box =
document.getElementById(
"lastOrderContent"
);

document
.querySelectorAll(
".last-product-order"
)
.forEach(x=>{

x.innerHTML="";

});

let localOrders =
JSON.parse(
localStorage.getItem(
"customerOrders"
)
)||{};

let order =
localOrders[customerName]
||
customerOrders[customerName];

if(!order){

box.innerHTML =
"No previous order found";

return;

}

box.innerHTML="";

order.forEach(item=>{

let displayName =
item.gram ? `${item.name} (${item.gram})` : item.name;

let unitText =
item.unit ? ` ${item.unit}` : "";

box.innerHTML +=

`

<div>

${displayName}

→

${item.qty}${unitText}

</div>

`;

let productBox =
document.getElementById(

`last-${
item.name.replaceAll(
" ",
"-"
)
}`

);


if(productBox){

productBox.innerHTML =

`Last Order : ${item.qty}`;

}

});

}

let productPriceCache = null;

function getProductPrice(productName){

if(!productPriceCache){

productPriceCache = {};

document
.querySelectorAll(".add-btn")
.forEach(button=>{

let action =
button.getAttribute("onclick") || "";

let match =
action.match(/addToCart\(this,'(.+)',(\d+)\)/);

if(match){

productPriceCache[match[1]] =
Number(match[2]);

}

});

}

return productPriceCache[productName] || 75;

}

function fetchLastOrderToCart(){

let customerName =
document.getElementById("name").value;

if(!customerName){

alert("Select customer first");

return;

}

let localOrders =
JSON.parse(
localStorage.getItem(
"customerOrders"
)
)||{};

let order =
localOrders[customerName]
||
customerOrders[customerName];

if(!order){

alert("No last order found");

return;

}

cart = [];

let skippedItems = [];

order.forEach(item=>{

let existingPrice =
item.price || getProductPrice(item.name);

let productName =
item.productName || item.name;

let gram =
item.gram || "";

let unit =
item.unit || "";

let tempVariant = {
key:item.key || createCartKey(productName,gram,unit),
productName:productName,
name:productName,
gram:gram,
unit:unit,
price:existingPrice
};

let stockValue =
getStockValueForVariant(tempVariant);

if(stockValue !== null && stockValue <= 0){

skippedItems.push(productName);

return;

}

let qty =
stockValue === null ? item.qty : Math.min(item.qty,stockValue);

cart.push({

key:tempVariant.key,
productName:productName,
name:productName,
gram:gram,
unit:unit,
price:existingPrice,
qty:qty

});

});

updateCart();

document
.querySelectorAll(".add-btn")
.forEach(button=>{

updateProductStockStatus(button);
updateAddButtonQty(button);

});

if(skippedItems.length){

alert(
`Some products are out of stock: ${skippedItems.join(", ")}`
);

}

}

function updateStock(){

let stock =
JSON.parse(
localStorage.getItem("stock")
)||{};

function getStockKey(item){

return item.gram === "52gm" ? "52gm__pcs" : "original";

}

cart.forEach(item=>{

let product =
(item.productName || item.name).trim();

if(stock.hasOwnProperty(product)){

if(typeof stock[product] === "object" && stock[product] !== null){

let key =
getStockKey(item);

stock[product][key] =
Number(stock[product][key] || 0) - Number(item.qty);

if(stock[product][key] < 0){

stock[product][key] = 0;

}

}else if(item.gram === "52gm"){

stock[product] = {
original:Number(stock[product] || 0),
"52gm__pcs":0
};

}else{

stock[product] =
Number(stock[product]) - Number(item.qty);

if(stock[product] < 0){

stock[product] = 0;

}

}

}



});

localStorage.setItem(
"stock",
JSON.stringify(stock)
);

updateAllProductStockStatus();


}

function scrollToShortcutTarget(selector){

let target =
document.querySelector(selector);

if(target){

target.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

}

function initShortcutMenu(shortcuts){

let existing =
document.getElementById("shortcutMenu");

if(existing){

existing.remove();

}

let menu =
document.createElement("div");

menu.id = "shortcutMenu";
menu.className = "shortcut-menu";

menu.innerHTML =
`
<button class="shortcut-toggle" type="button" aria-label="Open shortcuts">☰</button>
<div class="shortcut-panel" hidden>
${shortcuts.map(shortcut=>`
<button type="button" data-shortcut="${shortcut.id}">
<span>${shortcut.icon}</span>
${shortcut.label}
</button>
`).join("")}
</div>
`;

document.body.appendChild(menu);

let panel =
menu.querySelector(".shortcut-panel");

menu
.querySelector(".shortcut-toggle")
.addEventListener("click",()=>{

panel.hidden =
!panel.hidden;

});

menu
.querySelectorAll("[data-shortcut]")
.forEach(button=>{

button.addEventListener("click",()=>{

let shortcut =
shortcuts.find(item=>item.id === button.dataset.shortcut);

if(shortcut){

shortcut.action();

}

panel.hidden = true;

});

});

document.addEventListener("click",event=>{

if(!menu.contains(event.target)){

panel.hidden = true;

}

});

}

window.addEventListener(
"load",
()=>{

initShortcutMenu([
{
id:"search",
icon:"⌕",
label:"Search",
action:()=>document.getElementById("searchInput")?.focus()
},
{
id:"products",
icon:"▦",
label:"Products",
action:()=>scrollToShortcutTarget(".category-section")
},
{
id:"cart",
icon:"🛒",
label:"Cart",
action:()=>scrollToShortcutTarget("#cart")
},
{
id:"last-order",
icon:"↺",
label:"Last Order",
action:()=>scrollToShortcutTarget("#lastOrderBox")
},
{
id:"customer",
icon:"◎",
label:"Customer",
action:()=>scrollToShortcutTarget(".customer-box")
},
{
id:"stock",
icon:"▣",
label:"Stock Page",
action:()=>window.location.href = "stock.html"
},
{
id:"top",
icon:"↑",
label:"Top",
action:()=>window.scrollTo({top:0,behavior:"smooth"})
}
]);

}
);
