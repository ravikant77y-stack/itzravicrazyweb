let stock = JSON.parse(
localStorage.getItem("stock")
)||{

"Choco Rings":0,

"Tangy Tomato Rings":0,

"Masala Rings":0,

"Masala Curls":0,

"Cheese Curls":0,

"Fritts Cream Onion":0,

"Fritts Peri Peri":0,

"Masala Natkhat":0,

"Biggies":0,

"Pipes":0,

"Cheese Ball":0,

"Noodles":0,

"Salted Chips":0,

"Cream Onion Chips":0,

"Tomato Chips":0,

"Masala Chips":0,

"Double Mazza":0,

"Hara Mutter":0,

"Aloo Bhujia":0,

"Moong Dal":0,

"Bikaneri Bhujia":0,

"Khatta Meetha":0,

"Navratan Mixture":0,

"Mast Moongfali":0,

"Punjabi Tadka":0,

"Lite Chivda":0

};

const productImages={

"Choco Rings":"https://i.ibb.co/PG05yWJg/choco-rings.jpg",

"Tangy Tomato Rings":"https://i.ibb.co/mCYPyQtc/tangy-tomato-rings.jpg",

"Masala Rings":"https://i.ibb.co/WN6MLXy1/masala-rings.jpg",

"Masala Curls":"https://i.ibb.co/XfshrwFP/masala-curls.jpg",

"Cheese Curls":"https://i.ibb.co/SZXxXYG/cheese-curls.jpg",

"Fritts Cream Onion":"https://i.ibb.co/PG9xgdX2/fritts-cream-onion.jpg",

"Fritts Peri Peri":"https://i.ibb.co/VY8X64ZF/fritts-peri-peri.jpg",

"Masala Natkhat":"https://i.ibb.co/dsSQ0x4L/masala-natkhat.jpg",

"Biggies":"https://i.ibb.co/KcjbWzyj/biggies.jpg",

"Pipes":"https://i.ibb.co/hxqH0PdN/pipes.jpg",

"Cheese Ball":"https://i.ibb.co/C3Cf6Lfx/cheese-ball.jpg",

"Noodles":"https://i.ibb.co/QFMRNrMk/noodles.jpg",

"Salted Chips":"https://i.ibb.co/wFnSsQ6X/salted-chips.jpg",

"Cream Onion Chips":"https://i.ibb.co/XnRrqC3/cream-onion-chips.jpg",

"Tomato Chips":"https://i.ibb.co/93cMXd7J/tomato-chips.jpg",

"Masala Chips":"https://i.ibb.co/0y5jkspm/masala-chips.jpg",

"Double Mazza":"https://i.ibb.co/hxWtsMT7/double-mazza.jpg",

"Hara Mutter":"https://i.ibb.co/Cs4YRs43/hara-mutter.jpg",

"Aloo Bhujia":"https://i.ibb.co/r2Z63jHj/aloo-bhujia.jpg",

"Moong Dal":"https://i.ibb.co/5xv5gXXK/moong-dal.jpg",

"Bikaneri Bhujia":"https://i.ibb.co/mVkKCd8g/bikaneri-bhujia.jpg",

"Khatta Meetha":"https://i.ibb.co/YBrBBxVS/khatta-meetha.jpg",

"Navratan Mixture":"https://i.ibb.co/6JwQ2S0c/navratan-mixture.jpg",

"Mast Moongfali":"https://i.ibb.co/LXhDLxT1/mast-moongfali.jpg",

"Punjabi Tadka":"https://i.ibb.co/b5wXL4JX/punjabi-tadka.jpg",

"Lite Chivda":"https://i.ibb.co/7tTrNbjM/lite-chivda.jpg"

};

const grams={

"Choco Rings":"18gm",

"Tangy Tomato Rings":"24gm",

"Masala Rings":"24gm",

"Masala Curls":"33gm",

"Cheese Curls":"33gm",

"Fritts Cream Onion":"33gm",

"Fritts Peri Peri":"33gm",

"Masala Natkhat":"33gm",

"Biggies":"24gm",

"Pipes":"",

"Cheese Ball":"33gm",

"Noodles":"34gm",

"Salted Chips":"26gm",

"Cream Onion Chips":"26gm",

"Tomato Chips":"26gm",

"Masala Chips":"26gm",

"Double Mazza":"31gm",

"Hara Mutter":"31gm",

"Aloo Bhujia":"41gm",

"Moong Dal":"38gm",

"Bikaneri Bhujia":"35gm",

"Khatta Meetha":"41gm",

"Navratan Mixture":"43gm",

"Mast Moongfali":"41gm",

"Punjabi Tadka":"41gm",

"Lite Chivda":"39gm"

};

function getProductCatalog(){

return JSON.parse(
localStorage.getItem("productCatalog")
)||{};

}

function saveProductCatalog(catalog){

localStorage.setItem(
"productCatalog",
JSON.stringify(catalog)
);

}

function syncProductCatalog(){

let catalog =
getProductCatalog();

Object
.values(catalog)
.forEach(product=>{

if(product.name){

productImages[product.name] =
product.image || productImages[product.name] || "";

grams[product.name] =
product.gram || grams[product.name] || "";

if(!stock.hasOwnProperty(product.name)){

stock[product.name] = 0;

}

}

});

}

function getAllProductNames(){

return Array
.from(
new Set([
...Object.keys(productImages),
...Object.keys(grams),
...Object.keys(stock),
...Object.keys(getProductCatalog())
])
)
.sort((a,b)=>a.localeCompare(b));

}

function getProductMeta(product){

let catalog =
getProductCatalog();

return catalog[product] || {
name:product,
category:"savouries",
gram:grams[product] || "",
price:75,
pcsPrice:15,
image:productImages[product] || ""
};

}

syncProductCatalog();
window.addEventListener(
"load",
()=>{

refreshProductEditOptions();
loadProductForEdit();

}
);

function getStockValue(product, gram, unit){

let value =
stock[product];

if(typeof value === "number"){

return gram === "52gm" ? 0 : value;

}

if(value && typeof value === "object"){

let key =
getStockKey(gram,unit);

return Number(value[key] || 0);

}

return 0;

}

function setStockValue(product, gram, unit, value){

if(typeof stock[product] !== "object" || stock[product] === null){

stock[product] = {
original:Number(stock[product] || 0)
};

}

stock[product][getStockKey(gram,unit)] =
value;

}

function getStockKey(gram, unit){

return gram === "52gm" ? "52gm__pcs" : "original";

}

function getOriginalLabel(product){

return grams[product] || "Original";

}

let stockSearchText = "";

function saveStockOnly(){

localStorage.setItem(
"stock",
JSON.stringify(stock)
);

}

function searchStockProducts(){

let input =
document.getElementById("stockSearchInput");

stockSearchText =
input ? input.value.trim().toLowerCase() : "";

renderStock();

}

function refreshProductEditOptions(){

let select =
document.getElementById("productEditSelect");

if(!select){

return;

}

let currentValue =
select.value;

select.innerHTML =
`<option value="">New Product</option>` +
getAllProductNames()
.map(product=>`<option value="${product}">${product}</option>`)
.join("");

select.value =
currentValue;

}

function loadProductForEdit(){

let selected =
document.getElementById("productEditSelect").value;

let meta =
selected ? getProductMeta(selected) : {
name:"",
category:"savouries",
gram:"",
price:"",
pcsPrice:15,
image:""
};

document.getElementById("productEditName").value =
meta.name || selected || "";

document.getElementById("productEditName").dataset.originalName =
selected || "";

document.getElementById("productEditCategory").value =
meta.category || "savouries";

document.getElementById("productEditGram").value =
meta.gram || grams[selected] || "";

document.getElementById("productEditPrice").value =
meta.price || 75;

document.getElementById("productEditPcsPrice").value =
meta.pcsPrice || 15;

document.getElementById("productEditImage").value =
meta.image || productImages[selected] || "";

}

function clearProductForm(){

document.getElementById("productEditSelect").value = "";
loadProductForEdit();

}

function setProductManagerStatus(message){

let status =
document.getElementById("productManagerStatus");

if(status){

status.innerText = message;

}

}

function saveProductForm(){

let nameInput =
document.getElementById("productEditName");

let originalName =
nameInput.dataset.originalName || "";

let name =
nameInput.value.trim();

if(!name){

alert("Enter product name");

return;

}

let catalog =
getProductCatalog();

let product = {
name:name,
category:document.getElementById("productEditCategory").value,
gram:document.getElementById("productEditGram").value.trim(),
price:Number(document.getElementById("productEditPrice").value || 0),
pcsPrice:Number(document.getElementById("productEditPcsPrice").value || 15),
image:document.getElementById("productEditImage").value.trim()
};

if(originalName && originalName !== name){

catalog[name] = product;
delete catalog[originalName];

stock[name] =
stock[originalName] || 0;

delete stock[originalName];
delete productImages[originalName];
delete grams[originalName];

}else{

catalog[name] = product;

}

saveProductCatalog(catalog);
syncProductCatalog();
saveStockOnly();
refreshProductEditOptions();

document.getElementById("productEditSelect").value =
name;

loadProductForEdit();
renderStock();

setProductManagerStatus(
`${name} saved. Refresh order page to see changes.`
);

}

function renderStock(){

let box =
document.getElementById(
"stockList"
);

box.innerHTML="";

box.innerHTML =
getAllProductNames()
.filter(product=>
!stockSearchText ||
product.toLowerCase().includes(stockSearchText) ||
(grams[product] || "").toLowerCase().includes(stockSearchText)
)
.map(product=>`

<div class="stock-card" data-product="${product}">

<img
src="${
productImages[product] || ""
}"
class="stock-image"
>

<h3>

${product}

</h3>

<p>

${
grams[product]
}

</p>

<div class="stock-variant">
<h2>${getOriginalLabel(product)}</h2>
<label class="stock-input-label">
Stock
<input
type="number"
min="0"
inputmode="numeric"
value="${getStockValue(product,"","")}"
onchange="setStockFromInput('${product}','', '', this.value)"
>
</label>
<div class="stock-buttons">
<button onclick="changeStock('${product}','', '', 10)">+10</button>
<button onclick="changeStock('${product}','', '', 1)">+1</button>
<button onclick="changeStock('${product}','', '', -1)">-1</button>
<button onclick="changeStock('${product}','', '', -10)">-10</button>
</div>
</div>

<div class="stock-variant stock-variant-pcs">
<h2>52gm pcs</h2>
<label class="stock-input-label">
Stock
<input
type="number"
min="0"
inputmode="numeric"
value="${getStockValue(product,"52gm","pcs")}"
onchange="setStockFromInput('${product}','52gm','pcs', this.value)"
>
</label>
<div class="stock-buttons">
<button onclick="changeStock('${product}','52gm','pcs', 10)">+10</button>
<button onclick="changeStock('${product}','52gm','pcs', 1)">+1</button>
<button onclick="changeStock('${product}','52gm','pcs', -1)">-1</button>
<button onclick="changeStock('${product}','52gm','pcs', -10)">-10</button>
</div>
</div>

</div>

`)
.join("");

if(!box.innerHTML){

box.innerHTML =
`<div class="stock-empty">No stock product found</div>`;

}

}

function setStockFromInput(
product,
gram,
unit,
value
){

let nextValue =
Number(value || 0);

if(nextValue < 0){

nextValue = 0;

}

setStockValue(
product,
gram,
unit,
nextValue
);

saveStockOnly();

renderStock();

}

function changeStock(
product,
gram,
unit,
amount
){

let nextValue =
getStockValue(product,gram,unit) + amount;

if(
nextValue<0
){

nextValue=0;

}

setStockValue(product,gram,unit,nextValue);

saveStockOnly();

renderStock();

}

renderStock();

let scannedStockItems = [];

function normalizeText(value){

return String(value || "")
.toLowerCase()
.replace(/[^a-z0-9]+/g," ")
.trim();

}

function findProductInLine(line){

let normalizedLine =
normalizeText(line);

let products =
getAllProductNames()
.sort((a,b)=>b.length - a.length);

return products.find(product=>
normalizedLine.includes(
normalizeText(product)
)
);

}

function parseStockLine(line){

let product =
findProductInLine(line);

if(!product){

return null;

}

let quantityMatches =
line.match(/\d+/g);

if(!quantityMatches){

return null;

}

let productNumbers =
product.match(/\d+/g) || [];

let quantity =
quantityMatches
.map(Number)
.reverse()
.find(number=>!productNumbers.includes(String(number)));

if(!quantity){

return null;

}

let normalizedLine =
normalizeText(line);

let isPcs =
normalizedLine.includes("pcs") ||
normalizedLine.includes("piece") ||
normalizedLine.includes("52gm") ||
normalizedLine.includes("52 gm");

return {
product:product,
gram:isPcs ? "52gm" : "",
unit:isPcs ? "pcs" : "",
qty:quantity
};

}

function parseStockText(text){

let mergedItems = {};

text
.split(/\r?\n/)
.map(line=>line.trim())
.filter(Boolean)
.forEach(line=>{

let item =
parseStockLine(line);

if(!item){

return;

}

let key =
`${item.product}__${getStockKey(item.gram,item.unit)}`;

if(!mergedItems[key]){

mergedItems[key] = item;

}else{

mergedItems[key].qty += item.qty;

}

});

return Object.values(mergedItems);

}

function renderScanPreview(){

let preview =
document.getElementById("scanPreview");

if(!preview){

return;

}

if(!scannedStockItems.length){

preview.innerHTML =
"<p>No matching stock items found. Edit OCR text and scan again.</p>";

return;

}

preview.innerHTML =
`
<table>
<thead>
<tr>
<th>Product</th>
<th>Type</th>
<th>Qty</th>
</tr>
</thead>
<tbody>
${scannedStockItems.map(item=>`
<tr>
<td>${item.product}</td>
<td>${item.unit === "pcs" ? "52gm pcs" : getOriginalLabel(item.product)}</td>
<td>${item.qty}</td>
</tr>
`).join("")}
</tbody>
</table>
`;

}

function updateScanStatus(message){

let status =
document.getElementById("scanStatus");

if(status){

status.innerText = message;

}

}

async function scanStockSheet(){

let input =
document.getElementById("stockScanInput");

let textBox =
document.getElementById("scanText");

if(!input || !input.files || !input.files[0]){

alert("Select or capture a stock sheet photo first");

return;

}

if(typeof Tesseract === "undefined"){

alert("OCR engine is not loaded. Please connect internet once and refresh this page.");

return;

}

updateScanStatus("Scanning sheet...");

let result =
await Tesseract.recognize(
input.files[0],
"eng",
{
logger:progress=>{

if(progress.status){

updateScanStatus(
`${progress.status} ${Math.round((progress.progress || 0) * 100)}%`
);

}

}
}
);

textBox.value =
result.data.text;

scannedStockItems =
parseStockText(textBox.value);

renderScanPreview();

updateScanStatus(
`Scan complete: ${scannedStockItems.length} stock rows detected`
);

}

function applyScannedStock(){

let textBox =
document.getElementById("scanText");

if(textBox && textBox.value.trim()){

scannedStockItems =
parseStockText(textBox.value);

renderScanPreview();

}

if(!scannedStockItems.length){

alert("No stock rows to add");

return;

}

scannedStockItems.forEach(item=>{

setStockValue(
item.product,
item.gram,
item.unit,
item.qty
);

});

localStorage.setItem(
"stock",
JSON.stringify(stock)
);

renderStock();
saveStock(true);

updateScanStatus(
`Replaced ${scannedStockItems.length} scanned stock rows`
);

alert("Scanned stock updated");

}

function saveStock(silent){

localStorage.setItem(

"stock",

JSON.stringify(
stock
)

);

let history=

JSON.parse(

localStorage.getItem(
"stockHistory"
)

)||[];

history.unshift(

{

time:

new Date()
.toLocaleString(),

stock:

JSON.parse(
JSON.stringify(stock)
)

}

);

localStorage.setItem(

"stockHistory",

JSON.stringify(
history
)

);

showHistory();

if(!silent){

alert(
"Stock Saved"
);

}

}

function showHistory(){

let box=

document.getElementById(

"stockHistory"

);

if(!box)return;

let history=

JSON.parse(

localStorage.getItem(
"stockHistory"
)

)||[];

box.innerHTML="";

history
.slice(0,5)
.forEach(entry=>{

box.innerHTML+=`

<div
class=
"history-card"
>

${entry.time}

</div>

`;

});

}

showHistory();

window.addEventListener(
"storage",
event=>{

if(event.key !== "stock"){

return;

}

stock=
JSON.parse(
localStorage.getItem("stock")
)||stock;

renderStock();

}
);

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
id:"search-stock",
icon:"⌕",
label:"Search Stock",
action:()=>document.getElementById("stockSearchInput")?.focus()
},
{
id:"products",
icon:"✎",
label:"Product Editor",
action:()=>scrollToShortcutTarget(".product-manager-box")
},
{
id:"scan",
icon:"◫",
label:"Scan Sheet",
action:()=>scrollToShortcutTarget(".scan-stock-box")
},
{
id:"stock-list",
icon:"▦",
label:"Stock List",
action:()=>scrollToShortcutTarget("#stockList")
},
{
id:"history",
icon:"↺",
label:"History",
action:()=>scrollToShortcutTarget("#stockHistory")
},
{
id:"save",
icon:"✓",
label:"Save Stock",
action:()=>saveStock()
},
{
id:"order",
icon:"🛒",
label:"Order Page",
action:()=>window.location.href = "index.html"
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
