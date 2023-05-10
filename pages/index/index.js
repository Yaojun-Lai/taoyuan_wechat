Page({
  data: {
    selectedFoodType: null,
    foodTypes: ['农作物', '肉类', '制糖', '饼坊', '石磨', '豆坊', '豆腐加工', '玩具', '木工', '糕坊', '编织', '腌制', '陶瓷', '文具', '晾堂', '绣坊', '土料', '纺织', '开采'],

    allFoods: [
      {'type': '农作物', 'name': '小麦', 'price': 1, 'avatar': '', 'quantity': 0} ,
    {'type': '农作物', 'name': '大豆', 'price': 2, 'avatar': '', 'quantity': 0} ,
    {'type': '农作物', 'name': '甘蔗', 'price': 3, 'avatar': '', 'quantity': 0} ,
    {'type': '农作物', 'name': '水稻', 'price': 4, 'avatar': '', 'quantity': 0} ,
    {'type': '农作物', 'name': '白菜', 'price': 5, 'avatar': '', 'quantity': 0} ,
    {'type': '农作物', 'name': '辣椒', 'price': 6, 'avatar': '', 'quantity': 0} ,
    {'type': '农作物', 'name': '土豆', 'price': 7, 'avatar': '', 'quantity': 0} ,
    {'type': '农作物', 'name': '苎麻', 'price': 9, 'avatar': '', 'quantity': 0} ,
    {'type': '农作物', 'name': '南瓜', 'price': 9, 'avatar': '', 'quantity': 0} ,
    {'type': '肉类', 'name': '猪肉', 'price': 15, 'avatar': '', 'quantity': 0} ,
    {'type': '肉类', 'name': '鸡蛋', 'price': 2, 'avatar': '', 'quantity': 0} ,
    {'type': '肉类', 'name': '鸭肉', 'price': 15, 'avatar': '', 'quantity': 0} ,
    {'type': '肉类', 'name': '鸡肉', 'price': 15, 'avatar': '', 'quantity': 0} ,
    {'type': '制糖', 'name': '糖', 'price': 12, 'avatar': '', 'quantity': 0} ,
    {'type': '制糖', 'name': '红糖', 'price': 19, 'avatar': '', 'quantity': 0} ,
    {'type': '制糖', 'name': '麦糖', 'price': 24, 'avatar': '', 'quantity': 0} ,
    {'type': '饼坊', 'name': '鸡蛋饼', 'price': 18, 'avatar': '', 'quantity': 0} ,
    {'type': '饼坊', 'name': '烧饼', 'price': 34, 'avatar': '', 'quantity': 0} ,
    {'type': '饼坊', 'name': '蔬菜饼', 'price': 45, 'avatar': '', 'quantity': 0} ,
    {'type': '饼坊', 'name': '土豆饼', 'price': 72, 'avatar': '', 'quantity': 0} ,
    {'type': '饼坊', 'name': '南瓜饼', 'price': 89, 'avatar': '', 'quantity': 0} ,
    {'type': '石磨', 'name': '面粉', 'price': 6, 'avatar': '', 'quantity': 0} ,
    {'type': '石磨', 'name': '糕粉', 'price': 16, 'avatar': '', 'quantity': 0} ,
    {'type': '石磨', 'name': '土豆粉', 'price': 33, 'avatar': '', 'quantity': 0} ,
    {'type': '豆坊', 'name': '豆腐', 'price': 10, 'avatar': '', 'quantity': 0} ,
    {'type': '豆坊', 'name': '豆浆', 'price': 14, 'avatar': '', 'quantity': 0} ,
    {'type': '豆坊', 'name': '豆豉', 'price': 38, 'avatar': '', 'quantity': 0} ,
    {'type': '豆腐加工', 'name': '油豆腐', 'price': 26, 'avatar': '', 'quantity': 0} ,
    {'type': '豆腐加工', 'name': '腐竹', 'price': 36, 'avatar': '', 'quantity': 0} ,
    {'type': '豆腐加工', 'name': '豆腐乳', 'price': 42, 'avatar': '', 'quantity': 0} ,
    {'type': '豆腐加工', 'name': '豆筋', 'price': 45, 'avatar': '', 'quantity': 0} ,
    {'type': '豆腐加工', 'name': '豆腐脑', 'price': 46, 'avatar': '', 'quantity': 0} ,
    {'type': '豆腐加工', 'name': '豆腐干', 'price': 40, 'avatar': '', 'quantity': 0} ,
    {'type': '玩具', 'name': '竹蜻蜓', 'price': 102, 'avatar': '', 'quantity': 0} ,
    {'type': '玩具', 'name': '泥哨', 'price': 86, 'avatar': '', 'quantity': 0} ,
    {'type': '玩具', 'name': '竹板', 'price': 94, 'avatar': '', 'quantity': 0} ,
    {'type': '玩具', 'name': '陀螺', 'price': 101, 'avatar': '', 'quantity': 0} ,
    {'type': '木工', 'name': '陶艺木具', 'price': 30, 'avatar': '', 'quantity': 0} ,
    {'type': '木工', 'name': '榫卯', 'price': 50, 'avatar': '', 'quantity': 0} ,
    {'type': '木工', 'name': '鲁班锁', 'price': 74, 'avatar': '', 'quantity': 0} ,
    {'type': '糕坊', 'name': '糯米糕', 'price': 38, 'avatar': '', 'quantity': 0} ,
    {'type': '糕坊', 'name': '鸡蛋糕', 'price': 53, 'avatar': '', 'quantity': 0} ,
    {'type': '糕坊', 'name': '发糕', 'price': 60, 'avatar': '', 'quantity': 0} ,
    {'type': '糕坊', 'name': '南瓜糕', 'price': 84, 'avatar': '', 'quantity': 0} ,
    {'type': '编织', 'name': '竹片', 'price': 40, 'avatar': '', 'quantity': 0} ,
    {'type': '编织', 'name': '竹篓', 'price': 72, 'avatar': '', 'quantity': 0} ,
    {'type': '编织', 'name': '麻绳', 'price': 37, 'avatar': '', 'quantity': 0} ,
    {'type': '编织', 'name': '斗笠', 'price': 56, 'avatar': '', 'quantity': 0} ,
    {'type': '腌制', 'name': '咸鸡蛋', 'price': 14, 'avatar': '', 'quantity': 0} ,
    {'type': '腌制', 'name': '酸菜', 'price': 25, 'avatar': '', 'quantity': 0} ,
    {'type': '腌制', 'name': '腌鸡肉', 'price': 39, 'avatar': '', 'quantity': 0} ,
    {'type': '腌制', 'name': '腌土豆', 'price': 51, 'avatar': '', 'quantity': 0} ,
    {'type': '腌制', 'name': '腌羊肉', 'price': 49, 'avatar': '', 'quantity': 0} ,
    {'type': '陶瓷', 'name': '陶器', 'price': 72, 'avatar': '', 'quantity': 0} ,
    {'type': '陶瓷', 'name': '单色瓷', 'price': 104, 'avatar': '', 'quantity': 0} ,
    {'type': '文具', 'name': '纸', 'price': 67, 'avatar': '', 'quantity': 0} ,
    {'type': '文具', 'name': '砚', 'price': 104, 'avatar': '', 'quantity': 0} ,
    {'type': '文具', 'name': '笔', 'price': 66, 'avatar': '', 'quantity': 0} ,
    {'type': '晾堂', 'name': '干豆豉', 'price': 56, 'avatar': '', 'quantity': 0} ,
    {'type': '晾堂', 'name': '粉丝', 'price': 49, 'avatar': '', 'quantity': 0} ,
    {'type': '晾堂', 'name': '南瓜籽', 'price': 47, 'avatar': '', 'quantity': 0} ,
    {'type': '绣坊', 'name': '荷包', 'price': 114, 'avatar': '', 'quantity': 0} ,
    {'type': '绣坊', 'name': '虎头帽', 'price': 90, 'avatar': '', 'quantity': 0} ,
    {'type': '绣坊', 'name': '布娃娃', 'price': 88, 'avatar': '', 'quantity': 0} ,
    {'type': '土料', 'name': '陶土', 'price': 30, 'avatar': '', 'quantity': 0} ,
    {'type': '土料', 'name': '釉料', 'price': 30, 'avatar': '', 'quantity': 0} ,
    {'type': '土料', 'name': '釉彩', 'price': 52, 'avatar': '', 'quantity': 0} ,
    {'type': '纺织', 'name': '麻布', 'price': 48, 'avatar': '', 'quantity': 0} ,
    {'type': '纺织', 'name': '麻绳', 'price': 37, 'avatar': '', 'quantity': 0} ,
    {'type': '纺织', 'name': '绒线', 'price': 26, 'avatar': '', 'quantity': 0} ,
    {'type': '纺织', 'name': '棉布', 'price': 50, 'avatar': '', 'quantity': 0} ,
    {'type': '开采', 'name': '青竹', 'price': 10, 'avatar': '', 'quantity': 0} ,
    {'type': '开采', 'name': '原始土', 'price': 10, 'avatar': '', 'quantity': 0} ,
    {'type': '开采', 'name': '木材', 'price': 10, 'avatar': '', 'quantity': 0} ,
    {'type': '开采', 'name': '矿料', 'price': 10, 'avatar': '', 'quantity': 0},

    ],
   

    pricePerPerson: '',
    totalPrice: 0, // initialize total price to zero
    showModal: false, // flag to show/hide the modal window
    cartFoods: [], // initialize cart foods to an empty array
    selectedTable: null, // initialize selected table to null
    currentFoods: [], // This will store only the foods of the selected type

    selectedType: 'Chinese', // default selected type
    
  },
    
  onLoad: function(options) {
    // load your initial data here
    this.loadFoods(this.data.selectedType);
  },
  
  loadFoods: function(type) {
    // Filter the foods of the selected type
    const foods = this.data.allFoods.filter(food => food.type === type);
    this.setData({
      currentFoods: foods,
      selectedType: type
    });
  },
  
  changeType: function(e) {
    const type = e.currentTarget.dataset.type;
    this.loadFoods(type);
    this.setData({
      selectedFoodType: e.currentTarget.dataset.type,
    });
  },
  
  increaseOrder: function(e) {
    const name = e.currentTarget.dataset.name;
    const foods = this.data.allFoods;
    const index = foods.findIndex(food => food.name === name);
    if(index !== -1){
      foods[index].quantity = (foods[index].quantity || 0) + 1;
      this.setData({ 
        allFoods: foods,
        currentFoods: this.data.currentFoods
      });
      this.addToCart(foods[index]); // Add the item to the cart
      this.computeTotalPrice(); // Recompute the total price
    }
  },
  
  decreaseOrder: function(e) {
    const name = e.currentTarget.dataset.name;
    const foods = this.data.allFoods;
    const index = foods.findIndex(food => food.name === name);
    if(index !== -1 && foods[index].quantity > 0){
      foods[index].quantity -= 1;
      if(foods[index].quantity === 0) {
        delete foods[index].quantity;
      }
      this.setData({ 
        allFoods: foods,
        currentFoods: this.data.currentFoods
      });
      this.removeFromCart(foods[index]); // Remove the item from the cart
      this.computeTotalPrice(); // Recompute the total price
    }
  },

  // Compute the total price based on the items in the cart
  computeTotalPrice: function() {
    const cartFoods = this.data.cartFoods;
    let totalPrice = 0;
    for (let i = 0; i < cartFoods.length; i++) {
      const food = cartFoods[i];
      totalPrice += food.price * food.quantity;
    }
    this.setData({
      totalPrice: totalPrice.toFixed(2)
    });
  },

  // Add a food item to the cart
  addToCart: function(food) {
    const cartFoods = this.data.cartFoods;
    const index = cartFoods.findIndex(item => item.name === food.name);
    if (index !== -1) {
      cartFoods[index].quantity++;
    } else {
      cartFoods.push({
        type: food.type,
        name: food.name,
        price: food.price,
        avatar: food.avatar,
        quantity: 1
      });
    }
    this.setData({
      cartFoods: cartFoods
    });
  },

  // Remove a food item from the cart
  removeFromCart: function(food) {
    const cartFoods = this.data.cartFoods;
    const index = cartFoods.findIndex(item => item.name === food.name);
    if (index !== -1) {
      cartFoods[index].quantity--;
      if (cartFoods[index].quantity === 0) {
        cartFoods.splice(index, 1);
      }
      this.setData({
        cartFoods: cartFoods
      });
    }
  },

  // Show the modal window with the cart contents
  showModal: function() {
    this.setData({
      showModal: true,
      // cartItems: this.data.cartFoods
    });
  },

  // Hide the modal window
  hideModal: function() {
    this.setData({
      showModal: false
    });
  },

  // Set the selected table
  selectTable: function(event) {
    this.setData({
      selectedTable: event.detail.value
    });
  },

  // // Handle the check button click in the modal window
  // handleCheck: function(event) {
  //   const value = event.detail.value;
  //   const result = this.data.totalPrice / value;
  //   wx.showModal({
  //     title: 'Result',
  //     content: result.toFixed(2).toString(),
  //     showCancel: false
  //   });
  // },

  handleCheck: function(event) {
    const value = parseInt(event.detail.value, 10); // Explicitly convert the input to a number
    const totalPrice = parseFloat(this.data.totalPrice);
    
    if (!isNaN(value)  && !isNaN(totalPrice)) {
      if (value == 0){
        const pricePerPerson = 0;
      }
      else{
        const pricePerPerson = (totalPrice / value).toFixed(2);
      }
      wx.showModal({
        title: 'Order Summary',
        content: `Total price: ${totalPrice.toFixed(2)}\nPrice per person: ${pricePerPerson}`,
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        success: function (res) {
          if (res.confirm) {
            console.log('Confirm');
          } else if (res.cancel) {
            console.log('Cancel');
          }
        }
      });
    } else {
      wx.showModal({
        title: '错误',
        content: '请输入正确的订单价',
        showCancel: false
      });
    }
  },
  handlePriceInput: function(event) {
    const people = parseInt(event.detail.value, 10);
    const totalPrice = parseFloat(this.data.totalPrice);
    if (!isNaN(people) && people !== 0 && !isNaN(totalPrice)) {
      
      const pricePerPerson = (people / totalPrice).toFixed(2);
      this.setData({ pricePerPerson });
    }
    else{
      const pricePerPerson = 0;
      this.setData({ pricePerPerson });
    }
  },

  // selectFoodType: function(e) {
  //   this.setData({
  //     selectedFoodType: e.currentTarget.dataset.type,
  //   });
  // },

  handleCheck: function() {
    if (this.data.pricePerPerson === '') {
      wx.showModal({
        title: 'Error',
        content: 'Please enter a valid number of people.',
        showCancel: false
      });
    } else {
      wx.showModal({
        title: 'Order Summary',
        content: `Total price: ${this.data.totalPrice.toFixed(2)}\nPrice per person: ${this.data.pricePerPerson}`,
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        success: function (res) {
          if (res.confirm) {
            console.log('Confirm');
          } else if (res.cancel) {
            console.log('Cancel');
          }
        }
      });
    }
  },
  
  
  resetQuantity: function(foodArray) {
    for (let i = 0; i < foodArray.length; i++) {
      foodArray[i].quantity = 0;
    }
    return foodArray;
  },
  
  clearOrder: function() {
    let foods = this.data.allFoods;
    let currentFoods = this.data.currentFoods;
    let cartFoods = this.data.cartFoods;
  
    // Reset the quantity of all foods, currentFoods, and cartFoods
    foods = this.resetQuantity(foods);
    currentFoods = this.resetQuantity(currentFoods);
    cartFoods = this.resetQuantity(cartFoods);
  
    this.setData({
      allFoods: foods,
      currentFoods: currentFoods,
      cartFoods: cartFoods,
      totalPrice: 0
    });
  },
  
  


});
