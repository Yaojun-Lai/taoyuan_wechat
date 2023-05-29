Page({
  onShareAppMessage: function(){

  },
  handleContact (e){
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  // onLoad: function() {
  //   const updateManager = wx.getUpdateManager()

  //   updateManager.onCheckForUpdate(function (res) {
  //     // 请求完新版本信息的回调
  //     console.log(res.hasUpdate)
  //   })

  //   updateManager.onUpdateReady(function () {
  //       wx.showModal({
  //         title: '更新提示(竣工建筑材料)',
  //         content: '新版本已经准备好，是否重启应用？',
  //         success(res) {
  //           if (res.confirm) {
  //             // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
  //             updateManager.applyUpdate()
  //           }
  //         }
  //       })
  //     })

  //     updateManager.onUpdateFailed(function () {
  //       // 新版本下载失败
  //     })

  // }
}
);