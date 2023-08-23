Page({
  data: {
      flowers: ["百合", "花菱草", "鸢尾", "绣球"],
      selectedIndex: 0,
      selectedFlower: "百合",
      hours: Array.from({ length: 24 }, (_, i) => (i < 10 ? '0' : '') + i),
      hours2: Array.from({ length: 44 }, (_, i) => (i < 10 ? '0' : '') + i),

      minutes: Array.from({ length: 60 }, (_, i) => (i < 10 ? '0' : '') + i),
      seconds: Array.from({ length: 60 }, (_, i) => (i < 10 ? '0' : '') + i),
      inputDuration: [0, 0, 0],  // [hourIndex, minuteIndex, secondIndex]
      currentTime: [0, 0, 0],  // [hourIndex, minuteIndex, secondIndex]
      firstCalculatedTime: "",
      secondCalculatedTime: "",
      thirdCalculatedTime: "",
      scores: ['种植经验: 15点', '种植经验: 20点', '种植经验: 10点', '种植经验: 10点'],
      scoreLine: '种植经验: 15点'
  },

  handlePickerChange(e) {
      this.setData({
          selectedIndex: e.detail.value,
          selectedFlower: this.data.flowers[e.detail.value],
          scoreLine: this.data.scores[e.detail.value]
      });
      
      this.handleDurationChange({
          detail: {
              value: this.data.inputDuration
          }
      });
  },

  handleCurrentTimeChange(e) {
      this.setData({
          currentTime: e.detail.value
      });
      console.log(e)
      this.handleDurationChange({
          detail: {
              value: this.data.inputDuration
          }
      });
  },

  handleDurationChange(e) {
    let flowerTimes = {
      "百合": [484.5, 1054.5, 1200],
      "花菱草": [1083, 2337, 2640],
      "鸢尾": [213.75, 470.25, 540],
      "绣球": [213.75, 470.25, 540]
    };

    let selectedHour = e.detail.value[0]
    let selectedMinute = e.detail.value[1]
    let selectedSecond = e.detail.value[2]
    console.log(selectedHour, selectedMinute, selectedSecond)
    let totalDurationInSeconds = (selectedHour * 3600) + (selectedMinute * 60) + selectedSecond;
    console.log(totalDurationInSeconds)

    let currentHour = parseInt(this.data.hours[this.data.currentTime[0]]);
    let currentMinute = parseInt(this.data.minutes[this.data.currentTime[1]]);
    let currentSecond = parseInt(this.data.seconds[this.data.currentTime[2]]);
    console.log(currentHour, currentMinute, currentSecond)
    let currentTotalSeconds = (currentHour * 3600) + (currentMinute * 60) + currentSecond;
    console.log(currentTotalSeconds)
    
    // Calculate expected mature time
    let expectedMatureTimeInSeconds = currentTotalSeconds + totalDurationInSeconds;
    console.log(expectedMatureTimeInSeconds)

    if (totalDurationInSeconds > flowerTimes[this.data.selectedFlower][2] * 60){
      this.setData({
        inputDuration: e.detail.value,
        firstCalculatedTime: '超出此花种所需要的成熟总时长',
        secondCalculatedTime: '超出此花种所需要的成熟总时长',
        thirdCalculatedTime: '超出此花种所需要的成熟总时长'
    });
    return;
       

    }

    // Calculate the planting time
    let totalRequiredMatureTime = flowerTimes[this.data.selectedFlower][2] * 60; // Take the second time as the total required time
    console.log(totalRequiredMatureTime)
    let initialPlantingTimeInSeconds = expectedMatureTimeInSeconds - totalRequiredMatureTime;
    console.log(initialPlantingTimeInSeconds)
    // Calculate the first and second pick times
    let firstTime = this.calculatePreviousTime(initialPlantingTimeInSeconds, flowerTimes[this.data.selectedFlower][0] * 60, currentTotalSeconds, flowerTimes[this.data.selectedFlower][2] * 60, totalDurationInSeconds); 
    let secondTime = this.calculatePreviousTime(initialPlantingTimeInSeconds, flowerTimes[this.data.selectedFlower][1] * 60, currentTotalSeconds, flowerTimes[this.data.selectedFlower][2] * 60, totalDurationInSeconds);
    let thirdTime = this.calculatePreviousTime(initialPlantingTimeInSeconds, flowerTimes[this.data.selectedFlower][2] * 60, currentTotalSeconds, flowerTimes[this.data.selectedFlower][2] * 60, totalDurationInSeconds); 

    this.setData({
        inputDuration: e.detail.value,
        firstCalculatedTime: firstTime,
        secondCalculatedTime: secondTime,
        thirdCalculatedTime: thirdTime
    });
},



  calculatePreviousTime(maturityInSeconds, delta, currentTotalSeconds, maxMaturityInSeconds, totalDurationInSeconds) {
      let pickTimeInSeconds = maturityInSeconds + delta;
      
      // Determine the day prefix and adjust the time
      if (pickTimeInSeconds < currentTotalSeconds) {
          return "已过" // Add a day in seconds
      } 
      let dayPrefix = ''
      if (pickTimeInSeconds >= 172800){
        if (currentTotalSeconds < 86400){
          dayPrefix = '后天'
        }
        else if (currentTotalSeconds < 172800){
          dayPrefix = '明天'
        }
        pickTimeInSeconds -= 172800
      }else if (pickTimeInSeconds >= 86400){
        if (currentTotalSeconds < 86400){
          dayPrefix = '明天'
        }
        pickTimeInSeconds -= 86400
      }
      let hours = Math.floor(pickTimeInSeconds / 3600).toString().padStart(2, '0');
      let minutes = Math.floor((pickTimeInSeconds % 3600) / 60).toString().padStart(2, '0');
      let seconds = Math.floor(pickTimeInSeconds % 60).toString().padStart(2, '0');
      return  `${dayPrefix} ${hours}:${minutes}:${seconds}`
      return `还有${hours}时${minutes}分${seconds}秒`;
  },

  onShareAppMessage: function() {},

  onShareTimeline: function() {},

  onLoad: function() {
      if (wx.createInterstitialAd) {
          interstitialAd = wx.createInterstitialAd({
              adUnitId: 'adunit-cbaf90f4eb56114d'
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
