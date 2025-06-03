document.body.style.backgroundColor = "silver";
document.body.style.fontFamily = "Segoe UI, Arial, sans-serif";
document.body.style.margin = "40px";


var title = document.getElementById('title');
title.style.color = "green";
title.style.textAlign = "center";
title.style.letterSpacing = "2px";
title.style.fontSize = "2.5em";

var h3s = document.querySelectorAll('h3');
h3s.forEach(function (h3) {
    h3.style.textTransform = "uppercase";
    h3.style.color = "#006400";
    h3.style.backgroundColor = "#fff";
    h3.style.padding = "20px";
    h3.style.marginTop = "35px";
    h3.style.marginLeft = "40px";
});

var fruList = document.getElementById('fruList');
var moreFruit = document.createElement('li');
moreFruit.textContent = "Pineapples";
fruList.appendChild(moreFruit);

var vegList = document.getElementById('vegList');
var moreVeg = document.createElement('li');
moreVeg.textContent = "Spinach";
vegList.appendChild(moreVeg);

function styleList(listId, imagesObj) {
    var ul = document.getElementById(listId);
    ul.style.listStyle = "none";
    ul.style.padding = "0";
    ul.style.margin = "0 0 30px 0";
    ul.style.display = "flex";
    ul.style.gap = "5%";
    ul.style.justifyContent = "center";
    ul.querySelectorAll('li').forEach(function (li) {
        li.style.background = "#fff";
        li.style.borderRadius = "8px";
        li.style.margin = "12px 0";
        li.style.display = "flex";
        li.style.flexDirection = "column";
        li.style.justifyContent = "center";
        li.style.width = "330px"
        li.style.alignItems = "center";
        li.style.padding = "10px 18px";
        li.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";

        if (!li.querySelector('img')) {
            var img = document.createElement('img');
            img.src = imagesObj[li.textContent.trim()];
            img.alt = li.textContent.trim();
            img.style.width = "100%";
            img.style.height = "250px";
            img.style.objectFit = "cover";
            img.style.marginBottom = "5%"
            img.style.display = 'block';
            ul.style.textAlign = "center";
            img.style.marginRight = "18px";
            li.prepend(img);
        }
    });
}

var fruitImages = {
    "Mangoes": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/1200px-Mangos_-_single_and_halved.jpg",
    "Bananas": "https://greenspoon.co.ke/wp-content/uploads/2022/03/Greenspoon-Kenya-Sweet-Banana.jpg",
    "Water Melons": "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg.webp?itok=4TjwcpU9",
    "Pineapples": "https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg",
};

var vegImages = {
    "Onions": "https://orchardfruit.com/cdn/shop/files/Red-Onion-1-lb.-The-Orchard-Fruit-72141081.jpg?v=1722937869&width=1125",
    "Tomatoes": "https://safiorganics.co.ke/wp-content/uploads/2024/10/tomatoes-5.webp",
    "Kales": "https://greenspoon.co.ke/wp-content/uploads/2022/02/Greenspoon-Kales-Sukuma-Wiki-Mlango-Farm-1.jpg",
    "Spinach": "https://greenspoon.co.ke/wp-content/uploads/2022/02/Greenspoon-Spinach-Mlango-Farm-1.jpg",
};

styleList("fruList", fruitImages);
styleList("vegList", vegImages);

var kioskImg = document.createElement('img');
kioskImg.src = "https://rukminim1.flixcart.com/image/1664/1664/kjn6qvk0-0/sticker/f/v/l/fresh-vegetable-basket-kitchen-sticker-medium-61-ddks056-delight-original-imafz5zgznajhhb4.jpeg?q=90&crop=false";
kioskImg.alt = "Kiosk Logo";
kioskImg.style.display = "block";
kioskImg.style.margin = "0 auto 25px auto";
kioskImg.style.width = "200px";
kioskImg.style.height = "200px";
kioskImg.style.objectFit = "100%";
kioskImg.style.borderRadius = "50%";
title.parentNode.insertBefore(kioskImg, title);

var p = document.querySelector('p');
p.style.textAlign = "center";
p.style.fontSize = "1.2em";
p.style.color = "#444";
p.style.marginBottom = "30px";