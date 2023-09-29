import { products } from "./constants/data.js";
import Product from "./Model/productSchema.js";

const DefaultData = async() =>{
  try{
   await Product.insertMany(products);
    console.log('data added sucessfully');
      
  }catch(error){
    console.log('error while inserting default data ',error.message);
  }
}

export default DefaultData;