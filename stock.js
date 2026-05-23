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

function renderStock(){

let box =
document.getElementById(
"stockList"
);

box.innerHTML="";

for(let product in stock){

box.innerHTML += `

<div class="stock-card">

<img
src="${
productImages[product]
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

<h2>

Stock :
${
stock[product]
}

</h2>

<div
class="stock-buttons"
>

<button
onclick="
changeStock(
'${product}',
10
)
"
>

+10

</button>

<button
onclick="
changeStock(
'${product}',
-10
)
"
>

-10

</button>

</div>

</div>

`;

}

}

function changeStock(
product,
amount
){

stock[product]+=amount;

if(
stock[product]<0
){

stock[product]=0;

}

localStorage.setItem(

"stock",

JSON.stringify(
stock
)

);

renderStock();

}

renderStock();

function saveStock(){

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

alert(
"Stock Saved"
);

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
()=>{

stock=
JSON.parse(
localStorage.getItem("stock")
)||stock;

renderStock();

}
);

setInterval(()=>{

stock=
JSON.parse(
localStorage.getItem("stock")
)||stock;

renderStock();

},1000);