var catalogueArray = ['defaultcatalogue','couches', 'beds', 'cabinets', 'dressers', 'decor', 'kitchen', 'tables', 'carpets', 'lights'];
function catalogueSwitch(category){
    for(var i = 0; i<catalogueArray.length;i++){
        var thisCategory = document.getElementById(catalogueArray[i]);
        if(catalogueArray[i]==category){
            thisCategory.style.display="block";
        }
        else{
            thisCategory.style.display="none";
        }
    }
}
function addToCart(itemButton) {
    let storageItems = localStorage.getItem("cartData");
    let cartItems = (storageItems)? JSON.parse(storageItems) : [];
    let cartItemAlreadyAdded = false;
    let itemBlock = itemButton.parentNode;
    let itemName = itemBlock.querySelector('.title').innerHTML;
    let itemPrice = Number(itemBlock.querySelector('.price').innerHTML);
    let itemImage = itemBlock.querySelector('.img').getAttribute("src")
    let cartItem = { name: itemName, price: itemPrice, image: itemImage, amountInCart: 0}

    for (let item of cartItems) {
        if (item.name === cartItem.name) {
            cartItemAlreadyAdded = true;
            item.amountInCart += 1;
            break;
        }
    }
    
    if (!cartItemAlreadyAdded) {
        cartItem.amountInCart=1;
        cartItems.push(cartItem);
    }

    localStorage.setItem("cartData", JSON.stringify(cartItems));
}
function drawCart() {
    let storageItems = localStorage.getItem("cartData");
    let cartItems = (storageItems)? JSON.parse(storageItems) : [];
    let cartTotal = 0;

    if (cartItems.length === 0) {
        document.querySelector('main').innerHTML = 
        `<div class="mainarea">
         <h1 class="main-heading">Корзина</h1>
            <div class="empty-cart-container">
                <div class="empty-cart">
                    <p>В корзине ничего нет, скорее добавьте что-нибудь! :)</p>
                    <a href="catalogue.html">Каталог</a>
                </div>
            </div>
        </div>`;
        addFooterToCart();
        return;
    }

    document.querySelector('main').innerHTML = `
    <div class="mainarea">
    <h1 class="main-heading">Корзина</h1>
        <div class="main-cart-container">
            <div class="cart-container">

            </div>
            <div class="cart-total-container">
                <p>Стоимость вашей корзины:</p>
                <p class="cart-total-amount">
                </p>
            </div>
        </div>
    </div>`;
    addFooterToCart();

    let cartItemBlocks = document.querySelector('.cart-container');
    for (let item of cartItems) {
        cartTotal += item.price * item.amountInCart;
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = 
        `   <div class="cart-buttons">
                <button onclick="removeFromCart(this)">🗑️</button>
                <button onclick="cartDecrement(this)">➖</button>
                <button onclick="cartIncrement(this)">➕</button>
            </div>
            <img src="${item.image}">
            <p class="title">${item.name}</p>
            <p class="price">${item.price}₽ (Кол-во: ${item.amountInCart})</p>
            <p class="total-price">${item.price * item.amountInCart}₽</p>
            `;

        cartItemBlocks.append(cartItem);
    }

    document.querySelector('.cart-total-amount').innerHTML = cartTotal + '₽'
}
function addFooterToCart(){
    document.querySelector('main').innerHTML += `
    <footer id="about">
                    <div class="footer-container">
                        <div class="footer-element footer-aboutus">
                            <h2>О нас</h2>
                            <p>Мебельный магазин предлагает широкий ассортимент продукции для дома и офиса: от столов и стульев до шкафов и диванов.
                                Здесь каждый может найти варианты на свой вкус, будь то классический стиль или современный дизайн.</p>
                            <ul class="footer-buttons">
                                <li><div class="socialbutton vk"><img style="z-index:1; position:relative;" src="images/vk.png" width="35" height="35"></div></li>
                                <li><div class="socialbutton yt"><img style="z-index:1; position:relative;" src="images/yt.png" width="35" height="25"></div></li>
                                <li><div class="socialbutton rd"><img style="z-index:1; position:relative;" src="images/rd.png" width="35" height="35"></div></li>
                            </ul> 
                                    
                        </div>
                        <div class="footer-element footer-menu">
                            <h2>Ссылки-меню</h2>
                            <ul>
                                <li><a href="index.html">Главная страница</a></li>
                                <li><a href="aboutus.html">О нас</a></li>
                                <li><a href="catalogue.html">Каталог</a>
                                <li><a href="cart.html">Корзина</a></li>    
                            </ul>
                        </div>
                        <div class="footer-element footer-menu">
                            <h2>Каталог</h2>
                            <ul>
                                <li><a href="catalogue.html">Диваны и кресла</a></li>
                                <li><a href="catalogue.html">Кровати и матрасы</a></li>
                                <li><a href="catalogue.html">Шкафы и стеллажи</a></l>
                                <li><a href="catalogue.html">Тумбы и комоды</a></li>
                                <li><a href="catalogue.html">Сад и дача</a></li>
                                <li><a href="catalogue.html">Мебель для офиса</a></li>
                                <li><a href="catalogue.html">Кухонные гарнитуры</a></li>
                                <li><a href="catalogue.html">Столы и стулья</a></li>
                                <li><a href="catalogue.html">Ковры</a></li>
                                <li><a href="catalogue.html">Освещение</a></li>
                            </ul>
                        </div>
                        <div class="footer-element footer-contacts">
                            <h2>Контакты</h2>
                            <ul class="contacts-info">
                                <li>
                                    <img src="images/pin.png" width="25" height="25">
                                    <p>г.Москва, <br>проспект Вернадского,<br> д. 78</p>
                                </li>
                                <li>
                                    <img src="images/phone.png" width="25" height="25">
                                    <p><a href="tel:+79101715517">+7(910)171-55-17</a></p>
                                </li>
                                <li>
                                    <img src="images/email.png" width="25" height="25">
                                    <p><a href="mailto:mssp@yandex.ru">mssp@yandex.ru</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div class="footer-copyright"><p>© Спиридонов Матвей Сергеевич [ИКБО-30-22]</p></div>
    `;
}
function removeFromCart(button) {
    let storageItems = localStorage.getItem("cartData");
    let cartItems = (storageItems)? JSON.parse(storageItems) : [];
    let cartItemName = button.parentNode.parentNode.querySelector('.title').innerHTML;

    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name === cartItemName) {
            cartItems.splice(i, 1);
        }
    }

    button.parentNode.parentNode.remove();
    localStorage.setItem("cartData", JSON.stringify(cartItems));
    
    drawCart();
}

function cartIncrement(button) {
    let storageItems = localStorage.getItem("cartData");
    let cartItems = (storageItems)? JSON.parse(storageItems) : [];
    let cartItemName = button.parentNode.parentNode.querySelector('.title').innerHTML;

    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name === cartItemName) {
            cartItems[i].amountInCart+=1;
            localStorage.setItem("cartData", JSON.stringify(cartItems));
            drawCart();
            break;
        }
    }

    localStorage.setItem("cartData", JSON.stringify(cartItems));
    
}

function cartDecrement(button) {
    let storageItems = localStorage.getItem("cartData");
    let cartItems = (storageItems)? JSON.parse(storageItems) : [];
    let cartItemName = button.parentNode.parentNode.querySelector('.title').innerHTML;

    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name === cartItemName && cartItems[i].amountInCart>1) {
            cartItems[i].amountInCart-=1;
            localStorage.setItem("cartData", JSON.stringify(cartItems));
            drawCart();
            break;
        }
    }

}

function imageLink(url){
    window.location.href=url;
}