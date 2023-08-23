Page({
  data: {
    price: 0,
    priceAdd: 0,
    exp: 0,
    expAdd: 0,
    totalPrice: 0,
    totalExp: 0,
    multiplier: 0
  },

  updateValue: function (e) {
    const type = e.currentTarget.dataset.type;
    const value = parseFloat(e.detail.value) || 0;
    const updatedData = { [type]: value };
    this.setData(updatedData);
    this.calculateResults();
  },

  calculateResults: function () {
    const totalPrice = this.data.price + this.data.priceAdd;
    const totalExp = this.data.exp + this.data.expAdd;
    const rawMultiplier = (totalPrice) / (totalExp !== 0 ? totalExp : 1); // To avoid division by zero.
    const multiplier = rawMultiplier.toFixed(2);  // Formats the number to 2 decimal places
  
    this.setData({
      totalPrice: totalPrice,
      totalExp: totalExp,
      multiplier: multiplier
    });
  },
  
  onShareAppMessage: function() {},

  onShareTimeline: function() {},

  onLoad: function() {
      if (wx.createInterstitialAd) {
          interstitialAd = wx.createInterstitialAd({
              adUnitId: 'adunit-5a2f42c188131b81'
          });
          interstitialAd.onLoad(() => {});
          interstitialAd.onError((err) => {});
          interstitialAd.onClose(() => {});

          interstitialAd.show().catch((err) => {
              console.error(err);
          });
      }
  },
});
