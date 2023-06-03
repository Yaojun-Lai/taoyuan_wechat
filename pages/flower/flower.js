let interstitialAd = null;
Page({
  data: {
    showModal: false,
    searchInput: '',
    
  
    allFoods: [{'index': 'food0', 'name': '一串黄', 'taste': '', 'recipe': '紫＋红', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E4%B8%80%E4%B8%B2%E9%BB%84.png'}, {'index': 'food1', 'name': '一串紫', 'taste': '', 'recipe': '初始品种', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E4%B8%80%E4%B8%B2%E7%B4%AB.png'}, {'index': 'food2', 'name': '一串红', 'taste': '', 'recipe': '初始品种', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E4%B8%80%E4%B8%B2%E7%BA%A2.png'}, {'index': 'food9', 'name': '绣球紫', 'taste': '酸', 'recipe': '白＋红', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BB%A3%E7%90%83%E7%B4%AB.png'}, {'index': 'food10', 'name': '绣球蓝', 'taste': '甘', 'recipe': '白＋白 紫＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BB%A3%E7%90%83%E8%93%9D.png'}, {'index': 'food11', 'name': '绣球粉', 'taste': '甘', 'recipe': '紫＋红 紫＋紫 红＋红', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BB%A3%E7%90%83%E7%B2%89.png'}, {'index': 'food12', 'name': '绣球绿', 'taste': '咸', 'recipe': '白＋红 红＋红 紫＋白 白＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BB%A3%E7%90%83%E7%BB%BF.png'}, {'index': 'food13', 'name': '绣球红', 'taste': '苦', 'recipe': '初始品种', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BB%A3%E7%90%83%E7%BA%A2.png'}, {'index': 'food14', 'name': '绣球白', 'taste': '咸', 'recipe': '初始品种', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BB%A3%E7%90%83%E7%99%BD.png'}, {'index': 'food3', 'name': '鸢尾粉白', 'taste': '甘', 'recipe': '橘黄＋白 紫＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A2%E5%B0%BE%E7%B2%89%E7%99%BD.png'}, {'index': 'food4', 'name': '鸢尾橘黄', 'taste': '', 'recipe': '粉白＋紫 粉白＋粉白 紫＋紫 紫＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A2%E5%B0%BE%E6%A9%98%E9%BB%84.png'}, {'index': 'food5', 'name': '鸢尾绿白', 'taste': '', 'recipe': '粉白＋粉白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A2%E5%B0%BE%E7%BB%BF%E7%99%BD.png'}, {'index': 'food6', 'name': '鸢尾蓝', 'taste': '咸', 'recipe': '白＋白 紫＋紫 紫＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A2%E5%B0%BE%E8%93%9D.png'}, {'index': 'food7', 'name': '鸢尾紫', 'taste': '酸', 'recipe': '桃花值达到20', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A2%E5%B0%BE%E7%B4%AB.png'}, {'index': 'food8', 'name': '鸢尾白', 'taste': '辛', 'recipe': '桃花值达到200', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A2%E5%B0%BE%E7%99%BD.png'},{'index': 'food15', 'name': '百合橘黄', 'taste': '苦', 'recipe': '红＋橘 红＋黄 橘＋粉 黄＋紫', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BE%E5%90%88%E6%A9%98%E9%BB%84.png'}, {'index': 'food16', 'name': '百合粉', 'taste': '咸', 'recipe': '橘黄＋白 橘黄＋橘 红＋橋 蓝＋红 白＋紫', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BE%E5%90%88%E7%B2%89.png'}, {'index': 'food17', 'name': '百合蓝', 'taste': '咸', 'recipe': '橘＋橘 白＋橘 粉＋白 白＋白 粉＋橘 紫＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BE%E5%90%88%E8%93%9D.png'}, {'index': 'food18', 'name': '百合绿', 'taste': '辛', 'recipe': '红＋黄 红＋白 黄＋白 黄＋黄 白＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BE%E5%90%88%E7%BB%BF.png'}, {'index': 'food19', 'name': '百合紫', 'taste': '辛', 'recipe': '橘黄＋红 橘黄＋粉 粉＋粉 蓝＋白 橘黄＋橘黄', 'avatar': ''}, {'index': 'food20', 'name': '百合橘', 'taste': '甘', 'recipe': '蓝＋黄 橘黄＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BE%E5%90%88%E6%A9%98.png'}, {'index': 'food21', 'name': '百合橘粉', 'taste': '辛', 'recipe': '橘＋红 橘＋橘 橘＋粉 橘＋黄 橘黄＋橘黄', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BE%E5%90%88%E6%A9%98%E7%B2%89.png'}, {'index': 'food22', 'name': '百合红', 'taste': '酸', 'recipe': '初始品种', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BE%E5%90%88%E7%BA%A2.png'}, {'index': 'food23', 'name': '百合白', 'taste': '甘', 'recipe': '初始品种', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BE%E5%90%88%E7%99%BD.png'}, {'index': 'food24', 'name': '百合黄', 'taste': '咸', 'recipe': '初始品种', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BE%E5%90%88%E9%BB%84.png'}, {'index': 'food25', 'name': '花菱草浅粉', 'taste': '甘', 'recipe': '蓝＋粉 粉＋白 蓝＋红 白＋红 橘＋粉 橘＋红', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E6%B5%85%E7%B2%89.png'}, {'index': 'food26', 'name': '花菱草紫', 'taste': '辛', 'recipe': '浅粉＋浅粉 红＋红 粉＋粉', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E7%B4%AB.png'}, {'index': 'food27', 'name': '花菱草蓝', 'taste': '咸', 'recipe': '浅粉＋橘 浅粉＋浅粉 粉＋橘', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E8%93%9D.png'}, {'index': 'food28', 'name': '花菱草粉', 'taste': '辛', 'recipe': '红＋白 白＋红', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E7%B2%89.png'}, {'index': 'food29', 'name': '花菱草橘', 'taste': '咸', 'recipe': '蓝＋红 红＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E6%A9%98.png'}, {'index': 'food30', 'name': '花菱草橘红', 'taste': '咸', 'recipe': '黄＋绿 黄＋粉 黄＋白 绿＋红 粉＋橘 红＋白', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E6%A9%98%E7%BA%A2.png'}, {'index': 'food31', 'name': '花菱草黄', 'taste': '咸', 'recipe': '橘＋橘 橘＋红 红＋红', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E9%BB%84.png'}, {'index': 'food32', 'name': '花菱草绿', 'taste': '咸', 'recipe': '橘红＋橘红 白＋白 白+橘红 粉＋白 粉＋粉', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E7%BB%BF.png'}, {'index': 'food33', 'name': '花菱草红', 'taste': '咸', 'recipe': '初始品种', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E7%BA%A2.png'}, {'index': 'food34', 'name': '花菱草白', 'taste': '咸', 'recipe': '初始品种', 'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E8%8F%B1%E8%8D%89%E7%99%BD.png'}]
  
  ,
    adLoaded: false,
    currentFoods: []
  },
  onShareAppMessage: function(){

  },
  handleAdLoad: function() {
    this.setData({ adLoaded: false });
  },
  handleAdError: function() {
    // console.log('yes')
    // this.setData({ adLoaded: true });
  },
  handleAdClose: function() {
    this.setData({ adLoaded: true });
  },
  onLoad: function() {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-a8ea2ee916cff958'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
      
      // Show the ad immediately after creation
      // if (interstitialAd) {
        interstitialAd.show().catch((err) => {
          console.error(err)
        })
      // }
    }
  this.setData({
    currentFoods: this.data.allFoods
  });
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
    const firstFoodOfType = this.data.allFoods.find(food => food.type === type);
    if (firstFoodOfType) {
      this.setData({
        scrollToFood: firstFoodOfType.index,
        selectedFoodType: type
      });
    }
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
  inputOrder: function(e) {
    const name = e.currentTarget.dataset.name;
    const foods = this.data.allFoods;
    const index = foods.findIndex(food => food.name === name);
    let quantity = parseInt(e.detail.value, 10); // Convert the input to a number
  
    // If the input is invalid (not a number, negative, or empty), set quantity to 0
    if (isNaN(quantity) || quantity < 0) {
      quantity = 0;
    }
  
    if (index !== -1) {
      foods[index].quantity = quantity; // Set the new quantity
      const cartFoods = this.data.cartFoods;
      const cartIndex = cartFoods.findIndex(item => item.name === name);
      
      if (foods[index].quantity === 0) {
        delete foods[index].quantity;
        if (cartIndex !== -1) {
          cartFoods.splice(cartIndex, 1);
        }
      } else {
        if (cartIndex !== -1) {
          cartFoods[cartIndex].quantity = quantity;
        } else {
          cartFoods.push({
            type: foods[index].type,
            name: foods[index].name,
            price: foods[index].price,
            avatar: foods[index].avatar,
            quantity: quantity
          });
        }
      }
  
      this.setData({
        allFoods: foods,
        cartFoods: cartFoods
      });
  
      this.computeTotalPrice(); // Recompute the total price
    }
  },
  
  JumpToManual: function(){
    wx.navigateTo({
      url: '/pages/manual/manual',
    })
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
      totalPrice: totalPrice.toFixed(0)
    });
    const totalBookPrice = parseFloat(this.data.totalBookPrice);
    const totalPrice2 = parseFloat(this.data.totalPrice);

    if (!isNaN(totalPrice) && totalPrice2 !== 0){
      this.setData({
        pricePerPerson: (totalBookPrice / totalPrice2).toFixed(2)
      })
    }else{
      this.setData({
        pricePerPerson: 0
      })
    }
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
  addBookPrice: function(event){
    // console.log(event.detail);
    const add = parseInt(event.detail.value, 10);
    
    if (isNaN(add)){
      this.setData({ extraPrice: 0 });
    }
    else{
      this.setData({ extraPrice: add });
    }
    this.setData({
      displayPrice: add === 0 ? "" : add
    });
    const extraPrice = parseFloat(this.data.extraPrice);
    const bookPrice = parseFloat(this.data.bookPrice);
    this.setData({ totalBookPrice: extraPrice +  bookPrice});
    const totalPrice = parseFloat(this.data.totalPrice);
    const totalBookPrice =  parseFloat(this.data.totalBookPrice);
    if (!isNaN(totalPrice) && totalPrice !== 0) {
      const pricePerPerson = (totalBookPrice / totalPrice).toFixed(2);
      this.setData({ pricePerPerson });
    }
    else{
      this.setData({ pricePerPerson: 0 });
    }
  },
  handlePriceInput: function(event) {
    const newBookPrice = parseInt(event.detail.value, 10);
    if (isNaN(newBookPrice)){
      this.setData({ bookPrice: 0 });
    }
    else{
      this.setData({ bookPrice: newBookPrice });
    }
    this.setData({
      displayBookPrice: newBookPrice === 0 ? "" : newBookPrice
    });
    const extraPrice = parseFloat(this.data.extraPrice);
    const bookPrice = parseFloat(this.data.bookPrice);
    this.setData({ totalBookPrice: extraPrice +  bookPrice});
    const totalPrice = parseFloat(this.data.totalPrice);
    const totalBookPrice =  parseFloat(this.data.totalBookPrice);
    if (!isNaN(totalPrice) && totalPrice !== 0) {
      const pricePerPerson = (totalBookPrice / totalPrice).toFixed(2);
      this.setData({ pricePerPerson });
    }
    else{
      this.setData({ pricePerPerson: 0 });
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
      cartFoods: [],
      totalPrice: 0,
      totalBookPrice: 0,
      extraPrice: 0,
      bookPrice: 0,
      pricePerPerson: 0,
      displayBookPrice: "",
      displayPrice: "",
      searchInput: ''
 
    });
    // const event = {detail: {value: 'katherine'}};
    // this.addBookPrice(event);
  },
  
  onSearchInput: function(e) {
    const searchTerm = e.detail.value;
    this.setData({
      searchInput: e.detail.value,
    });
    const foodToSearch = this.data.allFoods.find(food => food.name === searchTerm);
    if (foodToSearch) {
      // console.log(this.data.scrollToFood)
      this.setData({
        scrollToFood: foodToSearch.index,
      });
    
    } else {
      // Find the first food where food.name includes the search input
      const foodToScroll = this.data.allFoods.find(food => food.name.includes(searchTerm));
      if (foodToScroll) {
        this.setData({
          scrollToFood: foodToScroll.index,
        });
      } 
    }

  },
  onShareAppMessage: function(){

  },
  onShareTimeline: function(){

  },
  onSearchButton: function() {
    
    const foodToSearch = this.data.allFoods.find(food => food.name === this.data.searchInput);
    if (foodToSearch) {
      console.log(this.data.scrollToFood)
      this.setData({
        scrollToFood: foodToSearch.index,
      });
      console.log(this.data.scrollToFood)
      console.log(typeof(this.data.scrollToFood))
    } else {
      // Find the first food where food.name includes the search input
      const foodToScroll = this.data.allFoods.find(food => food.name.includes(this.data.searchInput));
      if (foodToScroll) {
        this.setData({
          scrollToFood: foodToScroll.index,
        });
      } else {
        console.log("No food found with this name");
      }
    }
  },
  
  scroll: function(e) {
    // Get the scroll position
    const scrollTop = e.detail.scrollTop;
  
    // Get the query object
    const query = wx.createSelectorQuery();
    // Select all food items
    query.selectAll('.food-item').boundingClientRect();
    query.exec((res) => {
      // Find the first visible food item
      const firstVisibleFood = res[0].find(r => r.top + r.height > scrollTop - 1500);
  
      if (firstVisibleFood) {
        // Get the type of the first visible food
        
        const visibleFoodType = this.data.indexType[firstVisibleFood.id]
        // console.log(firstVisibleFood.id, visibleFoodType);
        if (visibleFoodType !== this.data.selectedFoodType) {
          // If the type has changed, update it
          this.setData({
            selectedFoodType: visibleFoodType
          });
        }
      }
    });
  }
  


});
