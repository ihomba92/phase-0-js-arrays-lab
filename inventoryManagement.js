// Write your code here
// Creating the array called products
const products = ['Laptop', 'Phone', 'Headphones', 'Monitor'];

//console.log(products);
//Accessing the product information
function logFirstProduct(firstProduct){
  console.log(products[0]);
}
//console.log(products[0]);

//Adding a product
function addProduct(product){
 products.push(product);
}
 //addProduct('CPU');
 console.log(addProduct('CPU'));

 //Update product Information
 function updateProductName(index, nameChange){
  products[1]= nameChange;

 }
 //let namChange = "Smartphone";
console.log (updateProductName(products[1], 'Smartphone'));

//Remove a Product
function removeLastProduct(nameremove){
  products.pop();
}
removeLastProduct(4);

 console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

