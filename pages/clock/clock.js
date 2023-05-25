Page({
  data: {
    hours: Array.from({length: 24}, (_, i) => i),
    minutes: Array.from({length: 60}, (_, i) => i),
    seconds: Array.from({length: 60}, (_, i) => i),
    value: [0, 0, 0], // initial value of the picker
    countdownId: null,
    pickerVisible: true, // added this line
  },
  bindChange(e) {
    this.setData({
      value: e.detail.value
    })
  },
  startCountdown() {
    this.setData({ pickerVisible: false }); // added this line
    let [hours, minutes, seconds] = this.data.value;
    const self = this;
    this.data.countdownId = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            self.stopCountdown();
            return;
          } else {
            hours--;
            minutes = 59;
          }
        } else {
          minutes--;
        }
        seconds = 59;
      } else {
        seconds--;
      }
      self.setData({ value: [hours, minutes, seconds] });
    }, 1000);
  },
  cancelCountdown() {
    this.setData({ pickerVisible: true }); // added this line
    if (this.data.countdownId) {
      clearInterval(this.data.countdownId);
      this.setData({ countdownId: null, value: [0, 0, 0] });
    }
  },
  onShareAppMessage: function(){

  },
  stopCountdown() {
    if (this.data.countdownId) {
      clearInterval(this.data.countdownId);
      this.setData({ countdownId: null });
      // Notification code here
    }
  },
});
