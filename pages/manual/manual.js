Page({
  data: {
    
    searchInput: '',
    
  
    allFoods: [
      {
          'index': 'food0',
          'name': '蛋炒饭',
          'taste': '咸',
          'recipe': '2水稻＋2鸡蛋',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%9B%8B%E7%82%92%E9%A5%AD.png'
      },
      {
          'index': 'food1',
          'name': '麻花',
          'taste': '甘',
          'recipe': '1糖＋2面粉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BA%BB%E8%8A%B1.png'
      },
      {
          'index': 'food2',
          'name': '清汤白菜',
          'taste': '咸',
          'recipe': '5白菜',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%B8%85%E6%B1%A4%E7%99%BD%E8%8F%9C.png'
      },
      {
          'index': 'food3',
          'name': '蛋黄酥',
          'taste': '甘',
          'recipe': '1糖＋1面粉＋2鸡蛋',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%9B%8B%E9%BB%84%E9%85%A5.png'
      },
      {
          'index': 'food4',
          'name': '麻婆豆腐',
          'taste': '辛',
          'recipe': '2辣椒＋1豆腐',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BA%BB%E5%A9%86%E8%B1%86%E8%85%90.png'
      },
      {
          'index': 'food5',
          'name': '酸菜豆腐',
          'taste': '酸',
          'recipe': '1酸菜＋1豆腐',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E8%B1%86%E8%85%90.png'
      },
      {
          'index': 'food6',
          'name': '鸡蛋面',
          'taste': '咸',
          'recipe': '1鸡蛋＋1面粉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A1%E8%9B%8B%E9%9D%A2.png'
      },
      {
          'index': 'food7',
          'name': '酸菜氽白肉',
          'taste': '酸',
          'recipe': '1酸菜＋1猪肉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E6%B1%86%E7%99%BD%E8%82%89.png'
      },
      {
          'index': 'food8',
          'name': '辣子鸡丁',
          'taste': '辛',
          'recipe': '2辣椒＋1鸡肉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%BE%A3%E5%AD%90%E9%B8%A1%E4%B8%81.png'
      },
      {
          'index': 'food9',
          'name': '酸菜鱼',
          'taste': '酸',
          'recipe': '1酸菜＋1黑鱼＋2辣椒',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E9%B1%BC.jpeg'
      },
      {
          'index': 'food10',
          'name': '虎皮肉',
          'taste': '甘',
          'recipe': '1猪肉＋1糖',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%99%8E%E7%9A%AE%E8%82%89.png'
      },
      {
          'index': 'food11',
          'name': '鸡肉豆腐',
          'taste': '甘',
          'recipe': '1鸡肉＋1豆腐',
          'avatar': ''
      },
      {
          'index': 'food12',
          'name': '鲫鱼豆腐汤',
          'taste': '咸',
          'recipe': '1鲫鱼＋1豆腐',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B2%AB%E9%B1%BC%E8%B1%86%E8%85%90%E6%B1%A4.png'
      },
      {
          'index': 'food13',
          'name': '苦瓜猪肉汤',
          'taste': '苦',
          'recipe': '2苦瓜＋1猪肉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8B%A6%E7%93%9C%E7%8C%AA%E8%82%89%E6%B1%A4.png'
      },
      {
          'index': 'food14',
          'name': '肉末烧饼',
          'taste': '咸',
          'recipe': '2面粉＋1猪肉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%82%89%E6%9C%AB%E7%83%A7%E9%A5%BC.png'
      },
      {
          'index': 'food15',
          'name': '苦瓜拌面',
          'taste': '苦',
          'recipe': '2苦瓜＋2面粉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8B%A6%E7%93%9C%E6%8B%8C%E9%9D%A2.png'
      },
      {
          'index': 'food16',
          'name': '荠菜馄炖',
          'taste': '咸',
          'recipe': '1面粉＋1猪肉＋1茅菜',
          'avatar': ''
      },
      {
          'index': 'food17',
          'name': '香椿拌豆腐',
          'taste': '咸',
          'recipe': '2香椿＋1豆腐',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%A6%99%E6%A4%BF%E6%8B%8C%E8%B1%86%E8%85%90.png'
      },
      {
          'index': 'food18',
          'name': '黄焖鸡',
          'taste': '辛',
          'recipe': '1香菇＋1鸡肉＋2辣椒＋1土豆',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BB%84%E7%84%96%E9%B8%A1.png'
      },
      {
          'index': 'food19',
          'name': '红烧鸭',
          'taste': '辛',
          'recipe': '1鸭肉＋3辣椒',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BA%A2%E7%83%A7%E9%B8%AD.png'
      },
      {
          'index': 'food20',
          'name': '松鼠鳜鱼',
          'taste': '甘',
          'recipe': '1鳜鱼＋1糖',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9D%BE%E9%BC%A0%E9%B3%9C%E9%B1%BC.png'
      },
      {
          'index': 'food21',
          'name': '香辣羊肉面',
          'taste': '辛',
          'recipe': '2面粉＋2辣椒＋1羊肉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%A6%99%E8%BE%A3%E7%BE%8A%E8%82%89%E9%9D%A2.png'
      },
      {
          'index': 'food22',
          'name': '酸菜羊肉',
          'taste': '酸',
          'recipe': '1酸莱＋1羊肉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E7%BE%8A%E8%82%89.png'
      },
      {
          'index': 'food23',
          'name': '银鱼南瓜羹',
          'taste': '甘',
          'recipe': '3南瓜＋1银鱼',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%93%B6%E9%B1%BC%E5%8D%97%E7%93%9C%E7%BE%B9.png'
      },
      {
          'index': 'food24',
          'name': '木须肉',
          'taste': '咸',
          'recipe': '1木耳＋2鸡蛋＋2猪肉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9C%A8%E9%A1%BB%E8%82%89.png'
      },
      {
          'index': 'food25',
          'name': '南瓜馒头',
          'taste': '甘',
          'recipe': '3南瓜＋1面粉＋1糖',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8D%97%E7%93%9C%E9%A6%92%E5%A4%B4.png'
      },
      {
          'index': 'food26',
          'name': '羊肉泡馍',
          'taste': '辛',
          'recipe': '1羊肉＋2辣椒＋1面粉＋1粉丝',
          'avatar': ''
      },
      {
          'index': 'food27',
          'name': '粉丝蒸白菜',
          'taste': '咸',
          'recipe': '1粉丝＋1白菜',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%B2%89%E4%B8%9D%E8%92%B8%E7%99%BD%E8%8F%9C.png'
      },
      {
          'index': 'food28',
          'name': '蚂蚁上树',
          'taste': '辛',
          'recipe': '1糖＋2辣椒＋1粉丝1猪肉',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%9A%82%E8%9A%81%E4%B8%8A%E6%A0%91.png'
      },
      {
          'index': 'food29',
          'name': '狮子头',
          'taste': '咸',
          'recipe': '1面粉＋2猪肉＋1鸡蛋＋1糖',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%8B%AE%E5%AD%90%E5%A4%B4.png'
      },
      {
          'index': 'food30',
          'name': '赛螃蟹',
          'taste': '咸',
          'recipe': '2鸡蛋＋1青鱼',
          'avatar': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%B5%9B%E8%9E%83%E8%9F%B9.png'
      }
  ]
  
  ,
  
    currentFoods: []
  },
  

  onLoad: function() {
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
    this.setData({
      searchInput: e.detail.value,
    });
  },
  onShareAppMessage: function(){

  },
  onSearchButton: function() {
    if (this.data.searchInput == 'katherine'){
      this.setData({
        pricePerPerson: "Anson's babe",
        bookPricePlaceholder: 520,
        extraPricePlaceholder: 1314,
        totalBookPrice: 'Love Ya',
        totalPrice: '∞'
      })
      this.showModal();
    }
    if (this.data.searchInput == 'mom'){
      this.setData({
        pricePerPerson: "亲爱的妈咪",
        totalBookPrice: '母亲节快乐😘',
        totalPrice: '520'
      })
      this.showModal();
    }
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
