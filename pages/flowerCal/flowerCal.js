
Page({
  data: {
      flowers: ["百合", "花菱草", "鸢尾", "绣球"],
      selectedIndex: 0,
      selectedFlower: "百合",
      inputTime: "00:00",
      firstCalculatedTime: "",
      secondCalculatedTime: "",
      thirdCalculatedTime: '',  // Add this to store the new calculated time
      scores: ['种植经验: 15点', '种植经验: 20点', '种植经验: 10点','种植经验: 10点'],
      scoreLine:'种植经验: 15点'
  },

  handlePickerChange(e) {
      this.setData({
          selectedIndex: e.detail.value,
          selectedFlower: this.data.flowers[e.detail.value],
          scoreLine: this.data.scores[e.detail.value]
      });
      this.handleTimePickerChange({
        detail: {
            value: this.data.inputTime
        }
    });
  },

  handleTimePickerChange(e) {
    let flowerTimes = {
        "百合": [484.5, 1054.5, 1200],
        "花菱草": [1083, 2337, 2640],
        "鸢尾": [213.75, 470.25, 540],
        "绣球": [213.75, 470.25, 540]
    };

    let [hours, minutes] = e.detail.value.split(':');
    let enteredTime = new Date(0, 0, 0, hours, minutes);

    let firstDelta = flowerTimes[this.data.selectedFlower][0];
    let secondDelta = flowerTimes[this.data.selectedFlower][1];
    let thirdDelta = flowerTimes[this.data.selectedFlower][2];

    let initialDay = enteredTime.getDate();

    let firstResultTime = this.calculateNewTime(enteredTime, firstDelta);
    let secondResultTime = this.calculateNewTime(enteredTime, secondDelta)
    let thirdResultTime = this.calculateNewTime(enteredTime, thirdDelta)
    
    ;


    this.setData({
        inputTime: e.detail.value,
        firstCalculatedTime: firstResultTime,
        secondCalculatedTime: secondResultTime,
        thirdCalculatedTime: thirdResultTime,
    });
},


calculateNewTime(initialTime, delta) {
  let newTimeInTotalMinutes = (initialTime.getHours() * 60) + initialTime.getMinutes() + delta;
  let dayPrefix = "";
  
  if (newTimeInTotalMinutes >= 2880) { // More than 48 hours
      dayPrefix = "后天";
      newTimeInTotalMinutes -= 2880;
  } else if (newTimeInTotalMinutes >= 1440) { // More than 24 hours but less than 48 hours
      dayPrefix = "明天";
      newTimeInTotalMinutes -= 1440;
  } // if less than 1440, it's the same day

  let hours = Math.floor(newTimeInTotalMinutes / 60).toString().padStart(2, '0');
  let minutes = Math.floor(newTimeInTotalMinutes % 60).toString().padStart(2, '0');
  let seconds = Math.floor((newTimeInTotalMinutes * 60) % 60).toString().padStart(2, '0'); // Extracting seconds

  return `${dayPrefix} ${hours}:${minutes}:${seconds}`;
},

onLoad: function() {
  if (wx.createInterstitialAd) {
    interstitialAd = wx.createInterstitialAd({
      adUnitId: 'adunit-2df61e8c58e752eb'
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

},








});
