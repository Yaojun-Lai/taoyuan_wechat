
Page({
  data: {
    isDropdownOpen: false,
    showModal: false,
    pageIndex: 0,
    pageArray: ['---- 攻略 ----','时刻对应表','摸鱼版订单成本','生产建筑','倦鸟汀','千灯彩树', '村民喜好', '花谱', '钓鱼', '萝萝心愿建筑','故事材料','食谱'],
    pageMap: {
      '时刻对应表':'/pages/time/time',
      '生产建筑': '/pages/building2/building2',
      '摸鱼版订单成本':'/pages/indexplain/indexplain',
      '倦鸟汀':'/pages/bird/bird',
      '食谱': '/pages/manual/manual',
      '村民喜好': '/pages/prefer/prefer',
      '花谱':'/pages/flower/flower',
      '萝萝心愿建筑':'/pages/building/building', 
      '钓鱼':'/pages/fish/fish', 
      '故事材料':'/pages/storyMaterial/storyMaterial',
      '千灯彩树':''
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
      pageIndex: e.currentTarget.dataset.index
    });
    if (this.data.pageIndex != 0) {
      let selectedPage = this.data.pageArray[this.data.pageIndex];
      if (selectedPage == '千灯彩树'){
        wx.navigateToMiniProgram({
          appId: 'wxd45c635d754dbf59',
          path: `pages/detail/detail?url=https://docs.qq.com/doc/DRGplUW5YSW1lQUZy`
        })
      }
      else{
        let selectedPageURL = this.data.pageMap[selectedPage];
        if (selectedPageURL) {
          wx.navigateTo({url: selectedPageURL});
        }
      }
    }
  },
  
  toggleDropdown: function() {
    this.setData({isDropdownOpen: !this.data.isDropdownOpen});
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


