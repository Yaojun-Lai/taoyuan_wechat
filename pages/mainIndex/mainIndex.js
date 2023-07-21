var mainIndexData = require('../../data/mainIndex.js');

Page({
  data: {
    isDropdownOpen: false,
    showModal: false,
    pageIndex: 0,
    pageArray: mainIndexData.pageArray,
    pageMap: mainIndexData.pageMap,
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


