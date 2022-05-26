//5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
const array = [
    {name: 'apples', price: 22000,Description:"Best Product"},
    {name: 'PC', price: 32000,Description:"Best Product"},
    {name: 'Watch', price: 12000,Description:"Best Product"},
    
  ];
  
  const result = array.find( ({ name }) => name === 'Watch' );
  
  console.log(result)