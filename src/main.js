// const product = require("./services/products")
const {getFullName, getProductLabel} = require("./services/products")
const database = require("./services/database")

async function main(){
  console.log("hi");
  getFullName(408, "mousepad");
  getProductLabel("mouse");
  database.connectToDataBase("Data Base")
}

main()