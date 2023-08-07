class Order {
    constructor() {
      this.orderNumber = 1;
      this.orderData = [];
    }
  
    addOrder(name, email, phoneNumber, products) {
      const orderObj = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        orderNumber: this.orderNumber,
        products: products,
      };
  
      this.orderData.push(orderObj);
      this.orderNumber++;
    }
  
    getOrderData() {
      return this.orderData;
    }
  }
  
  // Example usage:
  const orderManager = new Order();
  
  orderManager.addOrder('John Doe', 'john@example.com', '123-456-7890', [
    { productName: 'Widget', productQuantity: 2, totalPrice: 20.99 },
    { productName: 'Gadget', productQuantity: 1, totalPrice: 15.49 }
  ]);
  
  const orders = orderManager.getOrderData();
  console.log(orders);
  