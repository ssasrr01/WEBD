if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

// swiper

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
  },
});









class CartItem {
  constructor(name, img, price, id) {
    this.id = id
    this.name = name
    this.img = img
    this.price = price
    this.quantity = 1
  }
}

class LocalCart {
  static key = "cartItems"

  static getLocalCartItems() {
    let cartMap = new Map();
    const cart = localStorage.getItem(LocalCart.key)

    // console.log(cart);


    if (cart === null || cart.length === 0) return cartMap
    return new Map(Object.entries(JSON.parse(cart)))
  }

  static addItemToLocalCart(id, item) {
    let cart = LocalCart.getLocalCartItems()

    if (cart.has(id)) {
      let mapItem = cart.get(id)
      mapItem.quantity += 1
      cart.set(id, mapItem)
    }
    else
      cart.set(id, item)

    localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))

    // updateCartTotal()
    // addItemToCart()
  }

  static removeItemFromCart(id) {

    let cart = LocalCart.getLocalCartItems()

    if (cart.has(id)) {
      // let mapItem = cart.get(id)
      // console.log(mapItem);

      // if (mapItem.quantity > 1) {
      //   mapItem.quantity -= 1
      //   cart.set(id, mapItem)
      // }
      // else
      cart.delete(id)
      localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))
    }

    if (cart.size === 0)
      localStorage.clear()
    // else
    //   localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))

    // updateCartTotal()
    // addItemToCart()
  }
}




// localStorage.clear()






const cart = document.querySelector('.cart-items');
const toggleCart = document.querySelector('.toggleCart');

toggleCart.addEventListener('click', () => {
  cart.classList.toggle('active');
})

function empty() {
  var cartItems = document.getElementsByClassName('cart')[0];
  var empty = document.getElementsByClassName('empty')[0];
  var button = document.getElementsByClassName('place-order')[0];
  if (cartItems.hasChildNodes()) {
    empty.classList.add('active');
    enable(button);
  }
  else {
    empty.classList.remove('active');
    disable(button);
  }
}

function ready() {
  var removeCartItemBtn = document.getElementsByClassName('fa-trash');
  for (var i = 0; i < removeCartItemBtn.length; i++) {
    var button = removeCartItemBtn[i];
    button.addEventListener('click', removeCartItem)
  }
}

function removeCartItem(event) {
  var btnClicked = event.target;

  // const items = LocalCart.getLocalCartItems()
  // // if (items === null) return
  // const [key, value] = items.entries()

  var id = btnClicked.parentElement.getAttribute('data-id');
  LocalCart.removeItemFromCart(id)


  btnClicked.parentElement.parentElement.remove();
  empty();
  updateCartTotal();
}

function enable(button) {
  button.disabled = false;
  button.classList.remove('disabled');
}

function disable(button) {
  button.disabled = true;
  button.classList.add('disabled');
}

var btn = document.getElementsByClassName('place-order')[0];
disable(btn);

var to_hide = document.getElementsByClassName('hide-this');
for (var i = 0; i < 6; i++) {
  to_hide[i].innerHTML = "";
}

function changeCartNumber() {
  var num = document.getElementsByClassName('num')[0];

  var cartItemContainer = document.getElementsByClassName('cart')[0];
  var cartItemNames = cartItemContainer.getElementsByClassName('cart-title');

  num.innerText = cartItemNames.length;
}

function updateCartTotal() {

  var cartItemContainer = document.getElementsByClassName('cart')[0];
  var loop = cartItemContainer.getElementsByClassName('cart-title');
  var cartRows = cartItemContainer.getElementsByClassName('cart-box');
  var total = 0;

  for (var i = 0; i < loop.length; i++) {

    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('price')[0];
    var quantityElement = cartRow.getElementsByClassName('Quantity')[0];

    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.innerText.replace('Qty : ', '');

    total = total + (price * quantity);
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('total')[0].innerText = `Total : $${total}`

  changeCartNumber();
}


function DisplayLocal() {
  const items = LocalCart.getLocalCartItems()
  const size = items.size;

  if (items === null) return
  var ent = Object.fromEntries(items);

  for (var i = 0; i < size; i++) {
    var item = Object.values(ent)[i];
    var title = item.name;
    var price = item.price;
    var img = item.img;
    var id = item.id;

    addItemToCart(title,price,img,id)
  }
  empty()
  updateCartTotal()
}

DisplayLocal()


function addItemToCart(title, price, imageSrc, id) {
  var cartRow = document.createElement('div');
  cartRow.classList.add('box')
  // cartRow.innerText = title;
  var cartItems = document.getElementsByClassName('cart')[0];
  var cartItemNames = cartItems.getElementsByClassName('cart-title');

  // quantity = 1;
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      var qty = parseFloat(document.getElementsByClassName('Quantity')[0].innerText.replace('Qty : ', ''));
      qty = ++qty;
      document.getElementsByClassName('Quantity')[0].innerText = `Qty : ${qty}`;
      return;
    }
  }

  var cartRowContents = `
  <div data-id=${id} class="cart-box">
    <i class="fa fa-trash"></i>
    <img src="${imageSrc}" alt="food pic">
    <div class="content">
      <h3 class="cart-title">${title}</h3>
      <span class="price">${price}/-</span>
      <span class="Quantity">Qty : 1</span>
    </div>
  </div>`
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('fa-trash')[0].addEventListener('click', removeCartItem);
}

function addToCart(event) {

  var event_button = event.target;
  var shopItem = event_button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName('title')[0].innerText;
  var price = shopItem.getElementsByClassName('price')[0].innerText;
  var imageSrc = shopItem.getElementsByClassName('item-image')[0].src;


  ///
  var priceCart = shopItem.getElementsByClassName('price')[0].innerText.replace('$', '');
  const id = shopItem.getAttribute("data-id");
  const item = new CartItem(title, imageSrc, priceCart, id);
  LocalCart.addItemToLocalCart(id, item);
  ///


  addItemToCart(title, price, imageSrc, id);
  updateCartTotal();
  empty();
}

function purchase() {
  var cartItems = document.getElementsByClassName('cart')[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
  empty();
  localStorage.clear()
}

var addToCartbtn = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addToCartbtn.length; i++) {
  var button = addToCartbtn[i];
  button.addEventListener('click', addToCart)
}

document.getElementsByClassName('place-order')[0].addEventListener('click', purchase);
