// const product = require("./services/products")

//destructuring -> to get only what will be used
const {getFullName, getProductLabel} = require("./services/products")
const database = require("./services/database")

async function main(){
  console.log("hi");
  getFullName(408, "mousepad");
  getProductLabel("mouse");
  database.connectToDataBase("Data Base")
}

main()