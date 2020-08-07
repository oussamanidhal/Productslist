new Vue({
    el: '#app',
    data: {
      products: [
        {
          id: 1,
          name: "Pizza",
          img: "https://github.com/oussamanidhal/productlist1/blob/master/pizza.png?raw=true",
          price: 5.99,
          quantity: 0,
        },
        {
          id: 2,
          name: "Sandwich",
          img: "https://github.com/oussamanidhal/productlist1/blob/master/sandwich.png?raw=true",
          price: 4.99,
          quantity: 0,
        },
        {
          id: 3,
          name: "Coca Cola",
          img: "https://github.com/oussamanidhal/productlist1/blob/master/cocacola.png?raw=true",
          price: 2.39,
          quantity: 0,
        } ],
      checkout: false,
    },
    computed: {
      sum: function(){
        return this.products.reduce((sum, product) => {
          return sum + (product.price*product.quantity);
        }, 0)
      }
    },
    methods: {
      add(product) {
        product.quantity+=1;
      },
      decrease(product) {
        if(product.quantity > 0){
          product.quantity-=1;
        }else{
          this.remove(product.id);
        }
      },
     
      checkoutCart(){
        this.checkout = !this.checkout;
      }
    },
  })