let interstitialAd = null;
Page({
  data: {
    showModal: false,
    searchInput: '',
    
  
    allFoods: [{'index': 'fish0', 'name': '兔鱼', 'weather': '雨天', 'time': '子时一刻、子时四刻、子时八刻', 'place': '田园溪流', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/兔鱼.png'} ,
    {'index': 'fish1', 'name': '锦鱼', 'weather': '雨天、晴天', 'time': '辰时一刻、辰时五刻', 'place': '田园溪流', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/锦鱼.png'} ,
    {'index': 'fish2', 'name': '胭脂鱼', 'weather': '晴天', 'time': '午时一刻、申时一刻、戌时三刻', 'place': '南有乔木·南市', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/胭脂鱼.png'} ,
    {'index': 'fish3', 'name': '花瓣鱼', 'weather': '晴天', 'time': '辰时一刻、巳时三刻', 'place': '南有乔木·南市', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/花瓣鱼.png'} ,
    {'index': 'fish4', 'name': '虎虎鱼', 'weather': '晴天', 'time': '辰时一刻、午时一刻、午时二刻、申时一刻、戌时一刻', 'place': '南有乔木·南市', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/虎虎鱼.png'} ,
    {'index': 'fish5', 'name': '猫猫鱼', 'weather': '晴天', 'time': '午时二刻、未时一刻、亥时二刻', 'place': '结梦·花明村', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/猫猫鱼.png'} ,
    {'index': 'fish6', 'name': '月鲤', 'weather': '晴天', 'time': '午时一刻、未时一刻、戌时六刻', 'place': '结梦·花明村', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/月鲤.png'} ,
    {'index': 'fish7', 'name': '长者鱼', 'weather': '晴天', 'time': '辰时一刻、午时二刻、未时二刻、申时四刻、申时六刻、亥时一刻', 'place': '结梦·花明村', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/长者鱼.png'} ,
    {'index': 'fish8', 'name': '六鳃鱼', 'weather': '雨天、晴天', 'time': '辰时一刻、未时七刻、酉时四刻、戌时二刻', 'place': '田园瀑布', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/六鳃鱼.png'} ,
    {'index': 'fish9', 'name': '枯叶鱼', 'weather': '晴天', 'time': '辰时一刻、辰时四刻、巳时二刻、亥时八刻', 'place': '愿·寺庙', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/枯叶鱼.png'} ,
    {'index': 'fish10', 'name': '大耳鱼', 'weather': '雨天、晴天', 'time': '辰时八刻、巳时一刻、亥时一刻', 'place': '愿·鲁班小院', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/大耳鱼.png'} ,
    {'index': 'fish11', 'name': '金龙鱼', 'weather': '雨天、晴天', 'time': '巳时三刻、未时三刻、申时一刻', 'place': '结梦·花明村', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/金龙鱼.png'} ,
    {'index': 'fish12', 'name': '半月斗鱼', 'weather': '雨天、晴天', 'time': '辰时七刻、申时五刻、酉时四刻、亥时一刻、子时八刻', 'place': '全鱼点', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/半月斗鱼.png'} ,
    {'index': 'fish13', 'name': '奇鱼', 'weather': '晴天', 'time': '辰时一刻、辰时四刻、辰时六刻、巳时五刻、子时五刻', 'place': '愿·寺庙', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/奇鱼.png'} ,
    {'index': 'fish14', 'name': '孔雀鱼', 'weather': '雨天、晴天', 'time': '辰时一刻、辰时五刻、辰时八刻、巳时一刻', 'place': '愿·寺庙', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/孔雀鱼.png'} ,
    {'index': 'fish15', 'name': '叉尾斗鱼', 'weather': '雨天、晴天', 'time': '辰时二刻、午时一刻、午时四刻', 'place': '愿·鲁班小院', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/叉尾斗鱼.png'} ,
    {'index': 'fish16', 'name': '萝卜鱼', 'weather': '雨天、晴天', 'time': '未时一刻、子时八刻', 'place': '仙女湖畔', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/萝卜鱼.png'} ,
    {'index': 'fish17', 'name': '蝴蝶鲤', 'weather': '雨天、晴天', 'time': '未时一刻', 'place': '仙女湖畔', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/蝴蝶鲤.png'} ,
    {'index': 'fish18', 'name': '珍珠鱼', 'weather': '雨天、晴天', 'time': '未时三刻、酉时四刻、亥时三刻', 'place': '仙女湖畔', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/珍珠鱼.png'} ,
    {'index': 'fish19', 'name': '仙女鱼', 'weather': '雨天、晴天', 'time': '亥时一刻、亥时八刻、子时八刻', 'place': '仙女湖畔', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/仙女鱼.png'} ,
    {'index': 'fish20', 'name': '龙须鱼', 'weather': '晴天', 'time': '戌时四刻、子时八刻', 'place': '田园瀑布', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/龙须鱼.png'} ,
    {'index': 'fish21', 'name': '绿孔雀鱼', 'weather': '雨天、晴天', 'time': '辰时六刻、巳时一刻、午时五刻、未时五刻、戌时二刻、申时七刻', 'place': '全鱼点', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/绿孔雀鱼.png'} ,
    {'index': 'fish22', 'name': '红白琉金鱼', 'weather': '雨天、晴天', 'time': '辰时五刻、巳时五刻、未时八刻、申时二刻、戌时三刻、子时六刻', 'place': '全鱼点', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/红白琉金鱼.png'} ,
    {'index': 'fish23', 'name': '唐鱼', 'weather': '晴天', 'time': '子时五刻、申时二刻', 'place': '结梦·花明村', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/唐鱼.png'} ,
    {'index': 'fish24', 'name': '黑龙睛鱼', 'weather': '晴天', 'time': '亥时三刻、亥时五刻', 'place': '田园溪流', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/黑龙睛鱼.png'} ,
    {'index': 'fish25', 'name': '兰寿鱼', 'weather': '晴天', 'time': '子时七刻、酉时二刻', 'place': '愿·鲁班小院', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/兰寿鱼.png'} ,
    {'index': 'fish26', 'name': '墨燕鱼', 'weather': '晴天', 'time': '子时三刻', 'place': '南有乔木·南市', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/墨燕鱼.png'} ,
    {'index': 'fish27', 'name': '彩圆儿', 'weather': '雨天、晴天', 'time': '巳时二刻、亥时四刻、子时八刻', 'place': '全鱼点', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/彩圆儿.png'} ,
    {'index': 'fish28', 'name': '宽鳍鱼', 'weather': '晴天', 'time': '巳时七刻、亥时一刻', 'place': '南有乔木·南市', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/宽鳍鱼.png'} ,
    {'index': 'fish29', 'name': '短鲷', 'weather': '晴天', 'time': '巳时七刻、戌时五刻', 'place': '南有乔木·南市', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/短鲷.png'} ,
    {'index': 'fish30', 'name': '鹦鹉鱼', 'weather': '雨天、晴天', 'time': '辰时一刻、巳时七刻、戌时四刻、亥时四刻', 'place': '田园瀑布', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/鹦鹉鱼.png'} ,
    {'index': 'fish31', 'name': '金燕鱼', 'weather': '雨天、晴天', 'time': '辰时一刻、辰时五刻、巳时八刻、亥时七刻', 'place': '田园瀑布', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/金燕鱼.png'} ,
    {'index': 'fish32', 'name': '华鲤', 'weather': '雨天', 'time': '戌时五刻、亥时七刻', 'place': '愿·寺庙', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/华鲤.png'} ,
    {'index': 'fish33', 'name': '吸鳅', 'weather': '雨天', 'time': '戌时五刻、申时三刻', 'place': '愿·寺庙', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/吸鳅.png'} ,
    {'index': 'fish34', 'name': '五花草金鱼', 'weather': '雨天', 'time': '申时一刻', 'place': '结梦·花明村', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/五花草金鱼.png'} ,
    {'index': 'fish38', 'name': '朱砂水泡', 'weather': '晴天', 'time': '未时八刻', 'place': '仙女湖畔', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/朱砂水泡.png'} ,
    {'index': 'fish35', 'name': '红文金鱼', 'weather': '未知', 'time': '未知', 'place': '田园溪流', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/红文金鱼.png'} ,
    {'index': 'fish36', 'name': '稻田鱼', 'weather': '未知', 'time': '未知', 'place': '愿·鲁班小院', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/稻田鱼.png'} ,
    {'index': 'fish37', 'name': '红帽金鱼', 'weather': '未知', 'time': '未知', 'place': '仙女湖畔', 'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/红帽金鱼.png'}]
  
  ,
    adLoaded: false,
    currentFoods: []
  },
  onShareAppMessage: function(){

  },
  onShareTimeline: function(){

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
        adUnitId: 'adunit-49ae1238117bf89e'
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
  
  JumpToTime: function(){
    wx.navigateTo({
      url: '/pages/time/time',
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
