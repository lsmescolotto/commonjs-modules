// all functions related to product
const productType ={
  version: "digital",
  tax: "x1"
}

async function getFullName(codeId, productName){
  console.log(`${codeId} - ${productName}`)
  await doBreakLine();
}

//hidden member
async function doBreakLine(){
  console.log("/n")
}

async function getProductLabel(productName){
  console.log(`label: ${productName}`)
}

module.exports = {
  getFullName,
  getProductLabel,
  productType
};