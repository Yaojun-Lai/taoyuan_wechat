let interstitialAd = null;
Page({
  data: {
    showModal: false,
    searchInput: '',
    
  
    allFoods: [{'index': 'time0', 'name': '辰时一刻', 'time': '0秒-25秒'},
    {'index': 'time1', 'name': '辰时二刻', 'time': '25秒-50秒'},
    {'index': 'time2', 'name': '辰时三刻', 'time': '50秒-1分15秒'},
    {'index': 'time3', 'name': '辰时四刻', 'time': '1分15秒-1分40秒'},
    {'index': 'time4', 'name': '辰时五刻', 'time': '1分40秒-2分5秒'},
    {'index': 'time5', 'name': '辰时六刻', 'time': '2分5秒-2分30秒'},
    {'index': 'time6', 'name': '辰时七刻', 'time': '2分30秒-2分55秒'},
    {'index': 'time7', 'name': '辰时八刻', 'time': '2分55秒-3分20秒'},
    {'index': 'time8', 'name': '巳时一刻', 'time': '3分20秒-3分45秒'},
    {'index': 'time9', 'name': '巳时二刻', 'time': '3分45秒-4分10秒'},
    {'index': 'time10', 'name': '巳时三刻', 'time': '4分10秒-4分35秒'},
    {'index': 'time11', 'name': '巳时四刻', 'time': '4分35秒-5分'},
    {'index': 'time12', 'name': '巳时五刻', 'time': '5分-5分25秒'},
    {'index': 'time13', 'name': '巳时六刻', 'time': '5分25秒-5分50秒'},
    {'index': 'time14', 'name': '巳时七刻', 'time': '5分50秒-6分15秒'},
    {'index': 'time15', 'name': '巳时八刻', 'time': '6分15秒-6分40秒'},
    {'index': 'time16', 'name': '午时一刻', 'time': '6分40秒-7分5秒'},
    {'index': 'time17', 'name': '午时二刻', 'time': '7分5秒-7分30秒'},
    {'index': 'time18', 'name': '午时三刻', 'time': '7分30秒-7分55秒'},
    {'index': 'time19', 'name': '午时四刻', 'time': '7分55秒-8分20秒'},
    {'index': 'time20', 'name': '午时五刻', 'time': '8分20秒-8分45秒'},
    {'index': 'time21', 'name': '午时六刻', 'time': '8分45秒-9分10秒'},
    {'index': 'time22', 'name': '午时七刻', 'time': '9分10秒-9分35秒'},
    {'index': 'time23', 'name': '午时八刻', 'time': '9分35秒-10分'},
    {'index': 'time24', 'name': '未时一刻', 'time': '10分-10分25秒'},
    {'index': 'time25', 'name': '未时二刻', 'time': '10分25秒-10分50秒'},
    {'index': 'time26', 'name': '未时三刻', 'time': '10分50秒-11分15秒'},
    {'index': 'time27', 'name': '未时四刻', 'time': '11分15秒-11分40秒'},
    {'index': 'time28', 'name': '未时五刻', 'time': '11分40秒-12分5秒'},
    {'index': 'time29', 'name': '未时六刻', 'time': '12分5秒-12分30秒'},
    {'index': 'time30', 'name': '未时七刻', 'time': '12分30秒-12分55秒'},
    {'index': 'time31', 'name': '未时八刻', 'time': '12分55秒-13分20秒'},
    {'index': 'time32', 'name': '申时一刻', 'time': '13分20秒-13分45秒'},
    {'index': 'time33', 'name': '申时二刻', 'time': '13分45秒-14分10秒'},
    {'index': 'time34', 'name': '申时三刻', 'time': '14分10秒-14分35秒'},
    {'index': 'time35', 'name': '申时四刻', 'time': '14分35秒-15分'},
    {'index': 'time36', 'name': '申时五刻', 'time': '15分-15分25秒'},
    {'index': 'time37', 'name': '申时六刻', 'time': '15分25秒-15分50秒'},
    {'index': 'time38', 'name': '申时七刻', 'time': '15分50秒-16分15秒'},
    {'index': 'time39', 'name': '申时八刻', 'time': '16分15秒-16分40秒'},
    {'index': 'time40', 'name': '酉时一刻', 'time': '16分40秒-17分5秒'},
    {'index': 'time41', 'name': '酉时二刻', 'time': '17分5秒-17分30秒'},
    {'index': 'time42', 'name': '酉时三刻', 'time': '17分30秒-17分55秒'},
    {'index': 'time43', 'name': '酉时四刻', 'time': '17分55秒-18分20秒'},
    {'index': 'time44', 'name': '酉时五刻', 'time': '18分20秒-18分45秒'},
    {'index': 'time45', 'name': '酉时六刻', 'time': '18分45秒-19分10秒'},
    {'index': 'time46', 'name': '酉时七刻', 'time': '19分10秒-19分35秒'},
    {'index': 'time47', 'name': '酉时八刻', 'time': '19分35秒-20分'},
    {'index': 'time48', 'name': '戌时一刻', 'time': '20分-20分25秒'},
    {'index': 'time49', 'name': '戌时二刻', 'time': '20分25秒-20分50秒'},
    {'index': 'time50', 'name': '戌时三刻', 'time': '20分50秒-21分15秒'},
    {'index': 'time51', 'name': '戌时四刻', 'time': '21分15秒-21分40秒'},
    {'index': 'time52', 'name': '戌时五刻', 'time': '21分40秒-22分5秒'},
    {'index': 'time53', 'name': '戌时六刻', 'time': '22分5秒-22分30秒'},
    {'index': 'time54', 'name': '戌时七刻', 'time': '22分30秒-22分55秒'},
    {'index': 'time55', 'name': '戌时八刻', 'time': '22分55秒-23分20秒'},
    {'index': 'time56', 'name': '亥时一刻', 'time': '23分20秒-23分45秒'},
    {'index': 'time57', 'name': '亥时二刻', 'time': '23分45秒-24分10秒'},
    {'index': 'time58', 'name': '亥时三刻', 'time': '24分10秒-24分35秒'},
    {'index': 'time59', 'name': '亥时四刻', 'time': '24分35秒-25分'},
    {'index': 'time60', 'name': '亥时五刻', 'time': '25分-25分25秒'},
    {'index': 'time61', 'name': '亥时六刻', 'time': '25分25秒-25分50秒'},
    {'index': 'time62', 'name': '亥时七刻', 'time': '25分50秒-26分15秒'},
    {'index': 'time63', 'name': '亥时八刻', 'time': '26分15秒-26分40秒'},
    {'index': 'time64', 'name': '子时一刻', 'time': '26分40秒-27分5秒'},
    {'index': 'time65', 'name': '子时二刻', 'time': '27分5秒-27分30秒'},
    {'index': 'time66', 'name': '子时三刻', 'time': '27分30秒-27分55秒'},
    {'index': 'time67', 'name': '子时四刻', 'time': '27分55秒-28分20秒'},
    {'index': 'time68', 'name': '子时五刻', 'time': '28分20秒-28分45秒'},
    {'index': 'time69', 'name': '子时六刻', 'time': '28分45秒-29分10秒'},
    {'index': 'time70', 'name': '子时七刻', 'time': '29分10秒-29分35秒'},
    {'index': 'time71', 'name': '子时八刻', 'time': '29分35秒-30分睡觉'}]
  
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
