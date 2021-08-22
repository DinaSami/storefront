let productList = [
    {
      name: 'HEADSET',
      category: 'electronics',
      description: 'FOR SOUNDS',
      price: 1,
      inventory: 7,
      image:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06584555.png'
    },
    {
      name: 'PRINTER',
      category: 'electronics',
      description: 'FOR PRINTING',
      price: 12,
      inventory: 6,
      image:'https://media.croma.com/image/upload/v1605156482/Croma%20Assets/Computers%20Peripherals/Toners%20and%20Ink%20Cartridges/Images/8998185271326.png'
    },
    {
      name: 'PIZZA',
      category: 'food',
      description: 'YUMMY',
      price: 5,
      inventory: 5,
      image:'https://alfaiomi.net/wp-content/uploads/2021/03/pizza.jpg'
    },
    {
      name: 'SHAWARMA',
      category: 'food',
      description: 'Yummy',
      price: 2,
      inventory: 2,
      image:'https://media-cdn.tripadvisor.com/media/photo-p/0f/df/5d/45/photo1jpg.jpg'
    },
  ]
  
  let initialState = {
    products: [],
  }
  
  let newProducts
  
  export default function ProductsReducer(state=initialState, action){
    let {type, payload} = action;
  
    switch(type){
      case "FILTER_PRODUCTS":
      newProducts = productList.filter(product => product.category === payload);
  
      return {products: newProducts};
      default: return state;
    }
  }
  
  export function switchProducts(name){
    return{
      type: "FILTER_PRODUCTS",
      payload: name,
    }
  }