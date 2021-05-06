const vendorContainer = document.querySelector(".vendor")
const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
let output =""

function listSelectedItems(){
  liveX.innerHTML=""
  let checkboxes = document.querySelectorAll("input[type=checkbox]")
  // console.log(checkboxes)
  checkboxes.forEach(checkbox =>{
    checkbox.checked ? 
      loadProductModal(checkbox.id, checkbox.className):
      console.log(checkbox.id + " is Unchecked")
  })
}


function loadProductBuynow (productID, productHandle) {
  // console.log("productID =", productID)
  // console.log("productHandle =", productHandle)
  const newNode = document.createElement("div");
  newNode.id=`product-component-${productId}`
  newNode.classList.add("shopify-livex-products")
  newNode.classList.add(productHandle)
  liveX.appendChild(newNode)

  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    // var client = ShopifyBuy.buildClient({
    //   domain: 'yohotest.myshopify.com',
    //   storefrontAccessToken: 'f748b24dc91d10cb9f1238b6483db46c',
    // });
    var client = ShopifyBuy.buildClient({
      domain: formDataObj.domain,
      storefrontAccessToken: formDataObj.storefrontAccessToken ,
    });
    
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: productID,
        node: newNode, 
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              }
            },
            "buttonDestination": "checkout",
            "text": {
              "button": "Buy now"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {}
        },
      });
    });
  }
}



function loadProductModal (productID, productHandle) {
  // console.log("productID =", productID)
  // console.log("productHandle =", productHandle)
  const newNode = document.createElement("div");
  newNode.id=`product-component-${productId}`
  newNode.classList.add("shopify-livex-products")
  newNode.classList.add(productHandle)
  liveX.appendChild(newNode)

  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    // var client = ShopifyBuy.buildClient({
    //   domain: 'yohotest.myshopify.com',
    //   storefrontAccessToken: '9e031bbb20e9d6f469b6dbeefaed6069',
    // });
    var client = ShopifyBuy.buildClient({
      domain: formDataObj.domain,
      storefrontAccessToken: formDataObj.storefrontAccessToken ,
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: productID,
        node: newNode,
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "options": false
            },
            "text": {
              "button": "View product"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {}
        },
      });
    });
  }
}  


function loadCollectionModal () {
  // console.log("productID =", productID)
  // console.log("productHandle =", productHandle)
  const newNode = document.createElement("div");
  // newNode.id=`product-component-${productId}`
  newNode.classList.add("shopify-livex-products")
  // newNode.classList.add(productHandle)
  vendorContainer.appendChild(newNode)

  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    // var client = ShopifyBuy.buildClient({
    //   domain: 'yohotest.myshopify.com',
    //   storefrontAccessToken: '9e031bbb20e9d6f469b6dbeefaed6069',
    // });
    var client = ShopifyBuy.buildClient({
      domain: 'nextech-test.myshopify.com',
      storefrontAccessToken: '110ec768d64a3d457387522b48e6c95a',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '266350624941',
        node: document.getElementById('collection-component-1620079036032'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                  "width": "calc(25% - 20px)"
                },
                "img": {
                  "height": "calc(100% - 15px)",
                  "position": "absolute",
                  "left": "0",
                  "right": "0",
                  "top": "0"
                },
                "imgWrapper": {
                  "padding-top": "calc(75% + 15px)",
                  "position": "relative",
                  "height": "0"
                }
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "options": false
            },
            "text": {
              "button": "View product"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {}
        },
      });
    });
  }
}


function getAllProducts(customerInfo){
  if (!formDataObj.domain || !formDataObj.storefrontAccessToken){
    alert("You need to enter your domain and storefrontAccessToken")
    return;
  }
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    // var client = ShopifyBuy.buildClient({
    //   domain: 'yohotest.myshopify.com',
    //   storefrontAccessToken: 'f748b24dc91d10cb9f1238b6483db46c',
    // });
    // var client = ShopifyBuy.buildClient({
    //   domain: 'nextech-test.myshopify.com',
    //   storefrontAccessToken: '110ec768d64a3d457387522b48e6c95a',
    // });
    var client = ShopifyBuy.buildClient({
      domain: formDataObj.domain,
      storefrontAccessToken: formDataObj.storefrontAccessToken ,
    });
    
    client.product.fetchAll().then((products) => {
      products.forEach(({title, productType, images, id, handle, description, options}) =>{
      productId =atob(id).substr(22)
      output += `
      <div class="card">
          <span}>Listed on LiveX
          <input type="checkbox" name=checkbox id=${productId} class=${handle}></span>
        <img class="card--avatar" src=${images[0]?.src} />
        <h1 class="card--title">${title}</h1>
        <p>Product Type (category): ${productType}</p>
        <small>Handle: ${handle}</small><br/>
        <small>Description: ${description}</small><br/>
        <small>Options: ${options?.[0]?.values.map(value=>value.value)}</small>
      </div>
      `
      })    
      container.innerHTML = output
      console.log(products);
    });

    
  }
}

// form
const shopifyconnectForm = document.forms.shopifyconnect;
let formDataObj = new Object;

function submitInput(e){
  e.preventDefault();
  const formData = new FormData(shopifyconnectForm);  
  for (const pair of formData.entries()) {
    const entries = new Map([[pair[0], pair[1]]])
    const objPair = Object.fromEntries(entries);
    formDataObj = {...formDataObj, ...objPair};
  }
  console.log(formDataObj);  
  getAllProducts(formDataObj);
}
 

// document.querySelector("#shopifyconnect").addEventListener("submit", submitInput)
// document.querySelector("#searchProducts").addEventListener("keypress", function(e){
//   if(e.key==='Enter'){
//     searchInput = document.querySelector("#searchProducts").value
//     let allProducts = document.getElementsByClassName("shopify-livex-products")

//     if (searchInput){
//       console.log(searchInput);
//       let allProducts = document.getElementsByClassName("shopify-livex-products")
//       for (i=0; i<allProducts.length; i++){
//         let nodeClassName = allProducts[i].className
//         if (nodeClassName.indexOf(searchInput)> -1){
//           allProducts[i].style.display="block";
//         } else{
//           allProducts[i].style.display="none";
//         }
//       }
//     } else{
//       console.log("Clear Search")
//       for (i=0; i<allProducts.length; i++){
//         allProducts[i].style.display="block"

//       }

//     }
//   }
// })


document.addEventListener("DOMContentLoaded", loadCollectionModal)

