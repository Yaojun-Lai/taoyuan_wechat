let interstitialAd = null;
var preferData = require('../../data/prefer');
Page({
  data: {
    persons: preferData.persons,
    foods: [],
    selectedPerson: '朱敬儒'
  },
  onShareAppMessage: function(){

  },
  onShareTimeline: function(){

  },
  onSearchInput: function (e) {
    const searchTerm = e.detail.value;
    // console.log(searchTerm)
    const matchedPerson = this.data.persons.find(person => person.name.includes(searchTerm));
    if (matchedPerson) {
      this.setData({
        selectedPerson: matchedPerson.name,
        foods: matchedPerson.foods
      });
    }
  }
  ,

  onPersonTap: function (e) {
    const personName = e.currentTarget.dataset.name;
    const selectedPerson = this.data.persons.find(person => person.name === personName);
    if (selectedPerson) {
      this.setData({
        selectedPerson: personName,
        foods: selectedPerson.foods
      });
    }
  },
  JumpToMain: function(){
    wx.navigateTo({
      url: '/pages/fish/fish',
    })
  },

  onLoad: function() {
    const defaultPerson = this.data.persons.find(person => person.name === "朱敬儒");
    if (defaultPerson) {
      this.setData({
        foods: defaultPerson.foods
      });
    }

    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-391ca01b8c931956'
      })
      // interstitialAd.onLoad(() => {})
      // interstitialAd.onError((err) => {})
      // interstitialAd.onClose(() => {})
      
      // Show the ad immediately after creation
      // if (interstitialAd) {
        interstitialAd.show().catch((err) => {
          console.error(err)
        })
      // }
    }
  },
});
