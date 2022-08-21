function display(cartProductList) {
  // getting exact html element parent to append new product
  const productsAddInCart = document.getElementById("products-add-in-cart");
  // clear previous added products from the loop
  productsAddInCart.innerHTML = "";

  // declaring total price value for initialization
  let totalProductPrice = 0;
  for (var i = 0; i < cartProductList.length; i++) {
    // console.log(cartProductList[i].productName);
    const productName = cartProductList[i].productName;
    const productPrice = parseFloat(cartProductList[i].productPrice);
    const productVariant = cartProductList[i].productVariant;
    const productImageLink = cartProductList[i].productImageLink;

    totalProductPrice += productPrice;

    console.log("ttttoooooooootttttttaaaaaaaaaaalllllll", totalProductPrice);
    const li = document.createElement("li");
    li.classList.add("flex");
    li.classList.add("py-6");
    li.innerHTML = `
                          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src="${productImageLink}" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                          </div>
   
                          <div class="ml-4 flex flex-1 flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#"> ${productName} </a>
                                </h3>
                                <p class="ml-4">$<span>${productPrice}</span></p>
                              </div>
                              <p class="mt-1 text-sm text-gray-500">${productVariant}</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <p class="text-gray-500">Qty 1</p>
   
                              <div class="flex">
                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                              </div>
                            </div>
                          </div>  `;
    productsAddInCart.appendChild(li);

    let subTotal = document.getElementById("sub-total");
    subTotal.innerText = totalProductPrice;
  }
}

const cartProductList = [];
function addToCartButton(element) {
  const productName =
    element.parentNode.children[1].childNodes[1].childNodes[1].innerText;
  const productPrice = element.parentNode.children[1].childNodes[3].children[0].innerText;
  const productVariant =
    element.parentNode.children[1].childNodes[1].childNodes[3].innerText;
  const productImageLink = element.parentNode.children[0].children[0].src;
  //   console.log(productName, productPrice, productVariant, productImageLink);
  const productInfo = {
    productName: productName,
    productVariant: productVariant,
    productPrice: productPrice,
    productImageLink: productImageLink,
  };
  cartProductList.push(productInfo);
  document.getElementById("shoping-cart-total-added-product").innerText =
    cartProductList.length;
  display(cartProductList);
}
