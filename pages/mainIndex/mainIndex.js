Page({
  onShareAppMessage: function(){

  },
  handleContact (e){
    console.log(e.detail.path)
    console.log(e.detail.query)
  }
});