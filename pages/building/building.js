let interstitialAd = null;
Page({
  data: {
    
    searchInput: '',
    
  
    allFoods: [
      {
          "index": "build0",
          "name": "武林高萝",
          "character": "萝小糖",
          "comfort": 85,
          "material": "2楠木＋1铁＋2桐油",
          "avatar": ""
      },
      {
          "index": "build1",
          "name": "盆栽小桌",
          "character": "萝大林",
          "comfort": 120,
          "material": "9楠木＋11铁＋11桐油",
          "avatar": ""
      },
      {
          "index": "build2",
          "name": "悠悠吊床",
          "character": "萝小巧",
          "comfort": 105,
          "material": "3楠木＋6铁＋5桐油",
          "avatar": ""
      },
      {
          "index": "build3",
          "name": "泥萝筑城",
          "character": "萝小缸",
          "comfort": 115,
          "material": "9楠木＋9铁＋7桐油",
          "avatar": ""
      },
      {
          "index": "build4",
          "name": "头绳舞台",
          "character": "萝如意",
          "comfort": 110,
          "material": "7楠木＋5铁＋7桐油",
          "avatar": ""
      },
      {
          "index": "build5",
          "name": "吱呀秋千",
          "character": "萝小磨",
          "comfort": 55,
          "material": "1楠木＋1铁",
          "avatar": ""
      },
      {
          "index": "build6",
          "name": "腕力比拼",
          "character": "萝大腐",
          "comfort": 125,
          "material": "11楠木＋9铁＋12桐油",
          "avatar": ""
      },
      {
          "index": "build7",
          "name": "小萝相扑",
          "character": "萝小木",
          "comfort": 100,
          "material": "5楠木＋4铁＋2桐油",
          "avatar": ""
      },
      {
          "index": "build8",
          "name": "掷箭投壶",
          "character": "萝小豆",
          "comfort": 50,
          "material": "1楠木",
          "avatar": ""
      },
      {
          "index": "build9",
          "name": "坐井观萝",
          "character": "萝小馒",
          "comfort": 95,
          "material": "4楠木＋2铁＋4桐油",
          "avatar": ""
      },
      {
          "index": "build10",
          "name": "葫芦藤架",
          "character": "萝吉祥",
          "comfort": 90,
          "material": "1楠木＋4铁＋3桐油",
          "avatar": ""
      },
      {
          "index": "build11",
          "name": "萝萝走秀",
          "character": "萝木七",
          "comfort": 75,
          "material": "1楠木＋1铁＋2桐油",
          "avatar": ""
      },
      {
          "index": "build12",
          "name": "萝切水果",
          "character": "萝小刀",
          "comfort": 60,
          "material": "1楠木＋2铁",
          "avatar": ""
      },
      {
          "index": "build13",
          "name": "光阴日晷",
          "character": "萝小满",
          "comfort": 70,
          "material": "1楠木＋2铁＋1桐油",
          "avatar": ""
      },
      {
          "index": "build14",
          "name": "喵财进宝",
          "character": "萝万三",
          "comfort": 65,
          "material": "2楠木＋1铁＋1桐油",
          "avatar": ""
      },
      {
          "index": "build15",
          "name": "萝卜墩墩",
          "character": "萝小旦",
          "comfort": 80,
          "material": "2楠木＋2铁＋1桐油",
          "avatar": ""
      },
      {
          "index": "build16",
          "name": "风吹萝动",
          "character": "萝哐哐",
          "comfort": 240,
          "material": "29楠木＋32铁＋31桐油",
          "avatar": ""
      },
      {
          "index": "build17",
          "name": "鹅有点累",
          "character": "萝叮叮",
          "comfort": 235,
          "material": "35楠木＋35铁＋33桐油",
          "avatar": ""
      },
      {
          "index": "build18",
          "name": "捻香花浴",
          "character": "萝香五",
          "comfort": 230,
          "material": "34楠木＋32铁＋34桐油",
          "avatar": ""
      },
      {
          "index": "build19",
          "name": "一跃登天",
          "character": "萝小杵",
          "comfort": 225,
          "material": "31楠木＋33铁＋33桐油",
          "avatar": ""
      },
      {
          "index": "build20",
          "name": "荷香闲垂",
          "character": "萝一味",
          "comfort": 220,
          "material": "32楠木＋31铁＋29桐油",
          "avatar": ""
      },
      {
          "index": "build21",
          "name": "紫藤心事",
          "character": "萝小花",
          "comfort": 215,
          "material": "30楠木＋28铁＋31桐油",
          "avatar": ""
      },
      {
          "index": "build22",
          "name": "弦柱萝音",
          "character": "萝霜霜",
          "comfort": 210,
          "material": "27楠木＋30铁＋29桐油",
          "avatar": ""
      },
      {
          "index": "build23",
          "name": "柿柿如意",
          "character": "萝小晾",
          "comfort": 205,
          "material": "28楠木＋28铁＋26桐油",
          "avatar": ""
      },
      {
          "index": "build24",
          "name": "铁环滚滚",
          "character": "萝咩咩",
          "comfort": 200,
          "material": "27楠木＋25铁＋27桐油",
          "avatar": ""
      },
      {
          "index": "build25",
          "name": "枫月萝韵",
          "character": "萝小臼",
          "comfort": 195,
          "material": "24楠木＋26铁＋26桐油",
          "avatar": ""
      },
      {
          "index": "build26",
          "name": "小萝飞镖",
          "character": "萝小毫",
          "comfort": 190,
          "material": "25楠木＋24铁＋22桐油",
          "avatar": ""
      },
      {
          "index": "build27",
          "name": "沧海萝珠",
          "character": "萝鱼干",
          "comfort": 185,
          "material": "23楠木＋21铁＋24桐油",
          "avatar": ""
      },
      {
          "index": "build28",
          "name": "萝趣风车",
          "character": "萝小糕",
          "comfort": 180,
          "material": "20楠木＋23铁＋22桐油",
          "avatar": ""
      },
      {
          "index": "build29",
          "name": "萝舞鱼龙",
          "character": "萝红贝",
          "comfort": 175,
          "material": "22楠木＋21铁＋19桐油",
          "avatar": ""
      },
      {
          "index": "build30",
          "name": "八卦趣谈",
          "character": "萝红土",
          "comfort": 170,
          "material": "20楠木＋18铁＋20桐油",
          "avatar": ""
      },
      {
          "index": "build31",
          "name": "萝萝套圈",
          "character": "萝小虎",
          "comfort": 165,
          "material": "16楠木＋19铁＋18桐油",
          "avatar": ""
      },
      {
          "index": "build32",
          "name": "布偶戏台",
          "character": "萝小竹",
          "comfort": 160,
          "material": "18楠木＋17铁＋15桐油",
          "avatar": ""
      },
      {
          "index": "build33",
          "name": "萝鼓达人",
          "character": "萝大巧",
          "comfort": 155,
          "material": "17楠木＋15铁＋17桐油",
          "avatar": ""
      },
      {
          "index": "build34",
          "name": "萝骑竹马",
          "character": "萝黄土",
          "comfort": 150,
          "material": "14楠木＋17铁＋16桐油",
          "avatar": ""
      },
      {
          "index": "build35",
          "name": "弹弓冲击",
          "character": "萝小陶",
          "comfort": 145,
          "material": "17楠木＋16铁＋14桐油",
          "avatar": ""
      },
      {
          "index": "build36",
          "name": "跷跷板萝",
          "character": "萝小腐",
          "comfort": 140,
          "material": "15楠木＋13铁＋16桐油",
          "avatar": ""
      },
      {
          "index": "build37",
          "name": "萝萝斗鸡",
          "character": "萝黑土",
          "comfort": 135,
          "material": "12楠木＋15铁＋14桐油",
          "avatar": ""
      },
      {
          "index": "build38",
          "name": "蛟萝入水",
          "character": "萝不土",
          "comfort": 130,
          "material": "13楠木＋13铁＋11桐油",
          "avatar": ""
      }
  ]
  
  ,
  
    currentFoods: []
  },
  onShareAppMessage: function(){

  },

  onLoad: function() {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-05279af7b4afcc08'
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
    const foodToSearch = this.data.allFoods.find(food => food.name === searchTerm  || food.character === searchTerm);
    if (foodToSearch) {
      // console.log(this.data.scrollToFood)
      this.setData({
        scrollToFood: foodToSearch.index,
      });
    
    } else {
      // Find the first food where food.name includes the search input
      const foodToScroll = this.data.allFoods.find(food => food.name.includes(searchTerm)  || food.character.includes(searchTerm));
      if (foodToScroll) {
        this.setData({
          scrollToFood: foodToScroll.index,
        });
      } 
    }

  },
  onShareAppMessage: function(){

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
