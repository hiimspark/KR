var ici1 = document.getElementById("ici1");
var ici2 = document.getElementById("ici2");
var ici3 = document.getElementById("ici3");
var ici4 = document.getElementById("ici4");
var mainImg = document.getElementById("i-img");
ici1.classList.toggle("toggled");

function changeImg(image){
    
    switch(image){
        case 1:{
            ici1.classList.add('toggled');
            ici2.classList.remove('toggled');
            ici3.classList.remove('toggled');
            ici4.classList.remove('toggled');
            mainImg.src=document.getElementById("iciimg1").src;
            break;
        }
        case 2:{
            ici1.classList.remove('toggled');
            ici2.classList.add('toggled');
            ici3.classList.remove('toggled');
            ici4.classList.remove('toggled');
            mainImg.src=document.getElementById("iciimg2").src;
            break;
        }
        case 3:{
            ici1.classList.remove('toggled');
            ici2.classList.remove('toggled');
            ici3.classList.add('toggled');
            ici4.classList.remove('toggled');
            mainImg.src=document.getElementById("iciimg3").src;
            break;
        }
        case 4:{
            ici1.classList.remove('toggled');
            ici2.classList.remove('toggled');
            ici3.classList.remove('toggled');
            ici4.classList.add('toggled');
            mainImg.src=document.getElementById("iciimg4").src;
            break;
        }
    }
}

function addToCart(itemButton) {
    let storageItems = localStorage.getItem("cartData");
    let cartItems = (storageItems)? JSON.parse(storageItems) : [];
    let cartItemAlreadyAdded = false;

    let itemBlock = itemButton.parentNode;
    let itemName = document.querySelector('.i-title').innerHTML;
    let itemPrice = Number(itemBlock.querySelector('.i-price').innerHTML);
    let itemImage = document.querySelector('#i-main-img').getAttribute("src")
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