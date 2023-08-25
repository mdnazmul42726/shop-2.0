let = totalSub = 0;
function handleBtnClick(target) {

    // get the btn parant node
    const parant = target.parentNode;

    // get the child nodes
    const child = parant.childNodes;

    // get the item title by child index
    const itemTitleElement = child[1];
    const itemTitleText = itemTitleElement.innerText;

    // get Selected Items element by id
    const selectedItemsElement = document.getElementById('Selected-Items');

    // create new li tag inside the Selected Items element and set inner text
    const li = document.createElement('li');
    li.innerText = itemTitleText;
    selectedItemsElement.appendChild(li);

    // get the item price
    const itemPriceParent = child[3];
    const itemPriceSpan = itemPriceParent.childNodes;
    const itemPriceElement = itemPriceSpan[1];
    const itemPriceText = itemPriceElement.innerText;

    // convert item price string to number;
    const itemprice = parseFloat(itemPriceText);

    // get the subtotal element
    const subtotalElement = document.getElementById('subtotal');
    const subtotalText = subtotalElement.innerText;
    const subtotal = parseFloat(subtotalText);

    // update subtotal amount
    totalSub = totalSub + itemprice;
    subtotalElement.innerText = totalSub

    // get total element 
    const totalElement = document.getElementById('total');
    const totalText = totalElement.innerText;
    const total = parseFloat(totalText);

    // set total
    totalElement.innerText = totalSub

    // discount
    const discountElement = document.getElementById('discount');
    const discountText = discountElement.innerText;
    const discount = parseFloat(discountText);

    // cupon code 
    document.getElementById('apply-btn').addEventListener('click', function () {

        // get cupon input value
        const cuponinputFiled = document.getElementById('cupon-input-filed');
        const cuponFiledValue = cuponinputFiled.value;
        cuponinputFiled.value = '';

        // apply btn
        const btn = document.getElementById('apply-btn');


        if (cuponFiledValue == 'Nazmul100' && totalSub > 100) {
            const nazmul100 = totalSub * 10 / 100;
            discountElement.innerText = nazmul100;
            const totalAfterDiscount = totalSub - nazmul100;
            totalElement.innerText = totalAfterDiscount;


        }
        
    })

    if (totalSub > 0) {
        const subBtn = document.getElementById('submit-btn');
        subBtn.removeAttribute('disabled');
        subBtn.removeAttribute('style')
    }



}