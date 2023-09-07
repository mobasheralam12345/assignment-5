
function clickFunction(data){

    const productName = data.childNodes[3].childNodes[3].innerText;
  
    const setProductName = document.getElementById("set-product-name");

    const h4 = document.createElement("h4");
    h4.innerText = productName;
    setProductName.appendChild(h4);
      
    // Total Price

    const price = data.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceString = parseFloat(price);

    const totalPriceElement = document.getElementById("t");
    const totalPriceString = totalPriceElement.innerText;
    const total = parseFloat(totalPriceString);

    let totalPrice = total + priceString ;

    totalPriceElement.innerText = totalPrice;

      
}