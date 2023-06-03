
Page({
  data: {
    showModal: false,
    pageIndex: 0,
    pageArray: ['--攻略--','食谱', '村民喜好', '花谱', '萝萝心愿建筑', '钓鱼', '故事材料'],
    pageMap: {
      '食谱': '/pages/manual/manual',
      '村民喜好': '/pages/prefer/prefer',
      '花谱':'/pages/flower/flower',
      '萝萝心愿建筑':'/pages/building/building', 
      '钓鱼':'/pages/fish/fish', 
      '故事材料':'/pages/storyMaterial/storyMaterial'
    }
  },
  showModal: function() {
    this.setData({
      showModal: true,
      // cartItems: this.data.cartFoods
    });
  },
  hideModal: function() {
    this.setData({
      showModal: false
    });
  },

  handlePickerChange(e) {
      this.setData({
        pageIndex: e.detail.value
      })
      if (this.data.pageIndex != 0){
        let selectedPage = this.data.pageArray[this.data.pageIndex];
        wx.navigateTo({url: this.data.pageMap[selectedPage]});
      }
    
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

  handleContact (e){
    console.log(e.detail.path)
    console.log(e.detail.query)
  },

  
});


