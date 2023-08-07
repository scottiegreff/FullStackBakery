const customers = { customerID: "", customerInfo: [], orders: [] };
const customerInfo = {
  fName: "",
  lName: "",
  phoneNumber: "",
  email: "",
  password: "",
  subscribe: false,
};
const orders = { orderID: 0, orderDate: "", orderTotal: 0, orderItems: [] };

(() => {

  async function postData(url = '', data = {}) {
    console.log("Posting data!!!!!!!!!!!!!")
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
const displayForm = (event) => {
        
    // prevent refreshing the page
    event.preventDefault()
    if (event.srcElement.id === 'register') {
    document.querySelector('#welcome').style.display='none'
    document.querySelector('#registerForm').style.display='block'
    document.querySelector('#loginForm').style.display='none'

   } else {
    document.querySelector('#welcome').style.display='none'
    document.querySelector('#registerForm').style.display='none'
    document.querySelector('#loginForm').style.display='block'
   }
}
const register = async (event) => {
    console.log("Registering")
    // prevent refreshing the page
    event.preventDefault()
   let email = document.querySelector('#email').value
   let password = document.querySelector('#password').value
   let confirm = document.querySelector('#confirm').value
   if (password === confirm) {
       reply = await fetch('/member',{})
       document.querySelector('#signup-error').innerHTML=`<kbd class=h4>${reply.message}</kbd>`

   } else {
        document.querySelector('#signup-error').innerHTML='<kbd class=h4>Passwords do not match. Re-enter your password</kbd>'
   }
}
const login = (event) => {
    // prevent refreshing the page
    event.preventDefault()        
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let reply = postData('/signin',{email,password})
}

  //if active user == admin
  const showAdminOrders = () => {
    const tableSection = document.querySelector("#tableSect");
    tableSection.classList.toggle("d-none");
  };

  // *************************** WINDOW ONLOAD ***************************

  window.onload = () => {
    
    document.querySelector('#registerForm').style.display='none'
    document.querySelector('#loginForm').style.display='none'
    document.querySelector('#register').addEventListener('click',displayForm)
    document.querySelector('#login').addEventListener('click',displayForm)
    
    const selectElements = document.querySelectorAll(".pastrySelects");
    selectElements.forEach((pastryElement) => {
      pastryElement.addEventListener("change", handlePastryChange);
    });
  };
})();

// *********************** END OF IIFE **************************

/* Set the width of the sidebar to 0 (hide it) */
const closeCart = () => {
  document.getElementById("cartSidepanel").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

/* Set the width of the sidebar to 250px (show it) */
const openCart = () => {
  document.getElementById("cartSidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
};



const createGuestCustomer = (event) => {
  event.preventDefault();
  const guestCustomerInfo = new Object();
  guestCustomerInfo.fName = "Guest";
  guestCustomerInfo.lName = "Guest";
  guestCustomerInfo.phoneNumber = "0000000000";
  guestCustomerInfo.email = "";
  guestCustomerInfo.password = "";
  guestCustomerInfo.subscribe = false;

  customers.customerInfo.push(guestCustomerInfo);
  console.log("customers", customers);
};

// const submitNewCustomer = (event) => {
//   event.preventDefault();
//   const fNameInput = document.querySelector("#fNameInput");
//   const lNameInput = document.querySelector("#lNameInput");
//   const phoneNumInput = document.querySelector("#phoneNumInput");
//   const emailInput = document.querySelector("#emailInput");
//   const passwordInput = document.querySelector("#passwordInput");
//   const subscribeInput = document.querySelector("#subscribeInput");

//   const isCustomerInputValid = checkCustomerInput();

//   if (isCustomerInputValid) {
//     customerInfo.fName = fNameInput.value;
//     customerInfo.lName = lNameInput.value;
//     customerInfo.phoneNumber = phoneNumInput.value;
//     customerInfo.email = emailInput.value;
//     customerInfo.password = passwordInput.value;
//     customerInfo.subscribe = subscribeInput.checked;
//     // push the customerInfo to the customers parent object
//     customers.push(customerInfo);
//   }
//   // clear the form
//   fNameInput.value = "";
//   lNameInput.value = "";
//   phoneNumInput.value = "";
//   emailInput.value = "";
//   passwordInput.value = "";

//   //prevent from default behavior
//   console.log(customerInfo);
// };

function checkCustomerInput() {
  // prevent empty fields
  if (
    fNameInput.value === "" ||
    lNameInput.value === "" ||
    phoneNumInput.value === "" ||
    emailInput.value === "" ||
    passwordInput.value === ""
  ) {
    alert("Please fill out all fields");
    return;
  }
  //prevent duplicate emails

  // prevent invalid email
  // if (!emailInput.value.includes("@")) {
  //   alert("Please enter a valid email");
  //   return;
  // }
  // // prevent invalid phone number
  // if (phoneNumInput.value.length !== 10) {
  //   alert("Please enter a valid phone number");
  //   return;
  // }
  // // prevent invalid password
  // if (passwordInput.value.length < 8) {
  //   alert("Password must be at least 8 characters");
  //   return;
  // }
  // // prevent invalid password
  // if (passwordInput.value.length > 16) {
  //   alert("Password must be less than 16 characters");
  //   return;
  // }
  // // prevent invalid password
  // if (passwordInput.value === passwordInput.value.toUpperCase()) {
  //   alert("Password must contain at least one lowercase letter");
  //   return;
  // }
  // // prevent invalid password
  // if (passwordInput.value === passwordInput.value.toLowerCase()) {
  //   alert("Password must contain at least one uppercase letter");
  //   return;
  // }
  // // prevent invalid password
  // if (!passwordInput.value.match(/[0-9]/g)) {
  //   alert("Password must contain at least one number");
  //   return;
  // }
  // // prevent invalid password
  // if (!passwordInput.value.match(/[^a-zA-Z\d]/g)) {
  //   alert("Password must contain at least one special character");
  //   return;
  // }
  // // prevent invalid password
  // if (passwordInput.value !== passwordInput.value.trim()) {
  //   alert("Password cannot contain leading or trailing spaces");
  //   return;
  // }
  // // prevent invalid password
  // if (passwordInput.value !== passwordInput.value.replace(/\s+/g, " ")) {
  //   alert("Password cannot contain multiple spaces");
  //   return;
  // }
  else return true;
}

const displayCartItems = () => {
  console.log("O.OI", orders.orderItems);

  const cartTitle = document.querySelector("#cartTitle");
  cartTitle.innerHTML = "Shopping Cart: " + orders.orderItems.length + " items";
  // get the cartItemContainer
  const cartItemContainer = document.querySelector("#cartItemContainer");

  //clear the cartItemContainer
  cartItemContainer.innerHTML = "";

  //map through order.OrdersItems and create a div for each item
  var grandTotal = 0;
  const cartItems = orders.orderItems.map((item) => {
    let cartItemDiv = document.createElement("div");
    let cartItem = `<div class="card-body p-4">
    <div class="row align-items-center">
      <div class="col-md-2">
        <img
          src="./img/${item.name}-main.jpg"
          class="img-fluid"
          alt="Generic placeholder image"
        />
      </div>
      <div class="col-md-2 d-flex justify-content-start">
        <div>
          <p class="small text-muted mb-4 pb-2">Name</p>
          <p class="mb-0">${item.name}</p>
        </div>
      </div>
      <div class="col-md-2 d-flex justify-content-start">
        <div>
          <p class="small text-muted mb-4 pb-2">Kind</p>
          <p class="m-0">
            <i
              class="fas fa-circle me-2 small"
              style="color: #fdd8d2"
            ></i>
            ${item.flavour}
          </p>
        </div>
      </div>
      <div class="col-md-2 d-flex justify-content-start">
        <div>
          <p class="small text-muted mb-4 pb-2">Quantity</p>
          <p class="mb-0">${item.quantity}</p>
        </div>
      </div>
      <div class="col-md-2 d-flex justify-content-start">
        <div>
          <p class="small text-muted mb-4 pb-2">Price</p>
          <p class="mb-0">${item.price}</p>
        </div>
      </div>
      <div class="col-md-2 d-flex justify-content-start">
        <div>
          <p class="small text-muted mb-4 pb-2">Total</p>
          <p class="mb-0">${item.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  </div>`;

    grandTotal += item.total;

    // append the div element to the cartItemContainer
    cartItemDiv.innerHTML = cartItem;
    cartItemContainer.appendChild(cartItemDiv);
    // get the grand total div
    const grandTotalContainer = document.querySelector("#grandTotal");
    grandTotalContainer.innerHTML = "";
    // create a div element
    const grandTotalCard = document.createElement("div");
    // add the grand total to the div element
    let grandTotalElementBody = `<div class="card mb-5">
  <div class="card-body p-4">
    <div class="float-end">
      <p class="mb-0 me-5 d-flex align-items-center">
        <span class="fw-normal me-5">Grand Total:</span>
        <span class="lead fw-normal">$${grandTotal.toFixed(2)}</span>
      </p>
    </div>
  </div>
</div>`;

    grandTotalCard.innerHTML = grandTotalElementBody;
    grandTotalContainer.appendChild(grandTotalCard);
  });
};

function submitOrder() {console.log("submitOrder");
}

// *********************** EVENT LISTENERS **************************

const guestBtn = document.querySelector(".guestBtn");
guestBtn.addEventListener("click", createGuestCustomer);

// const registerNewCustomerBtn = document.querySelector(".submitNewCustomerBtn");
// registerNewCustomerBtn.addEventListener("click", submitNewCustomer);

const submitOrderBtn = document.querySelector(".submitPayNowBtn");
submitOrderBtn.addEventListener("click", submitOrder);

const addToCartBtn = document.querySelectorAll("a#addToCartBtn");
addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    const productName =
      btn.parentElement.parentElement.querySelector(".card-title").innerText;

    if (productName === "cake") {
      const cakeItem = new Object();
      cakeItem.name = productName;
      
      cakeItem.size =
        btn.parentElement.parentElement.querySelector("#productSize").value;

      if (cakeItem.size === "small") {
        cakeItem.price = 34.99;
      } else if (cakeItem.size === "medium") {
        cakeItem.price = 39.99;
      } else if (cakeItem.size === "large") {
        cakeItem.price = 44.99;
      } else if (cakeItem.size === "xlarge") {
        cakeItem.price = 49.99;
      }
      cakeItem.price = parseFloat(cakeItem.price);

      cakeItem.frosting =
        btn.parentElement.parentElement.querySelector("#productFrosting").value;

      cakeItem.flavour =
        btn.parentElement.parentElement.querySelector("#productFlavour").value;

      cakeItem.quantity =
        btn.parentElement.parentElement.querySelector("#productQuantity").value;

      cakeItem.total = (cakeItem.price * cakeItem.quantity).toFixed(2);
      cakeItem.total = parseFloat(cakeItem.total);

      orders.orderItems.push(cakeItem);
    }
    if(productName !== "cake") {
    const productItem = new Object();
    productItem.name =
      btn.parentElement.parentElement.querySelector(".card-title").innerText;

    productItem.price =
      btn.parentElement.parentElement.querySelector(".productPrice").innerText;
    productItem.price = parseFloat(productItem.price);

    productItem.quantity =
      btn.parentElement.parentElement.querySelector("#productQuantity").value;

    productItem.flavour =
      btn.parentElement.parentElement.querySelector("#productFlavour").value;

    productItem.total = (productItem.price * productItem.quantity).toFixed(2);
    productItem.total = parseFloat(productItem.total);

    orders.orderItems.push(productItem);

  }
  
  orders.orderItems.forEach((item) => {
    console.log("item", item);
  });
  });
});

// *********************** END OF EVENT LISTENERS **************************
