let interstitialAd = null;
Page({
  data: {
    persons: [{'name': '朱敬儒',
    'foods': [{'food': '苦瓜猪肉汤',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8B%A6%E7%93%9C%E7%8C%AA%E8%82%89%E6%B1%A4.png'},
     {'food': '虎皮肉',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%99%8E%E7%9A%AE%E8%82%89.png'},
     {'food': '木须肉',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9C%A8%E9%A1%BB%E8%82%89.png'},
     {'food': '金龙鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%87%91%E9%BE%99%E9%B1%BC.png'},
     {'food': '彩圆儿', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%BD%A9%E5%9C%86%E5%84%BF.png'}]},
   {'name': '货郎',
    'foods': [{'food': '肉沫烧饼', 'image': ''},
     {'food': '宽鳍鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%AE%BD%E9%B3%8D%E9%B1%BC.png'},
     {'food': '羊肉泡馍',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BE%8A%E8%82%89%E6%B3%A1%E9%A6%8D.png'},
     {'food': '小鳔花', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%B0%8F%E9%B3%94%E8%8A%B1.png'},
     {'food': '半月斗鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8D%8A%E6%9C%88%E6%96%97%E9%B1%BC.png'}]},
   {'name': '春香',
    'foods': [{'food': '绣球粉', 'image': ''},
     {'food': '花菱草紫', 'image': ''},
     {'food': '糖醋里脊', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%B3%96%E9%86%8B%E9%87%8C%E8%84%8A.png'},
     {'food': '仙女鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E4%BB%99%E5%A5%B3%E9%B1%BC.png'},
     {'food': '兔鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%85%94%E9%B1%BC.png'}]},
   {'name': '郎见秋',
    'foods': [{'food': '绣球紫', 'image': ''},
     {'food': '辣子鸡丁',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%BE%A3%E5%AD%90%E9%B8%A1%E4%B8%81.png'},
     {'food': '红烧鸭',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BA%A2%E7%83%A7%E9%B8%AD.png'},
     {'food': '红文金鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BA%A2%E6%96%87%E9%87%91%E9%B1%BC.png'},
     {'food': '胭脂鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%83%AD%E8%84%82%E9%B1%BC.png'}]},
   {'name': '郎永安',
    'foods': [{'food': '鸢尾绿白', 'image': ''},
     {'food': '虎皮肉',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%99%8E%E7%9A%AE%E8%82%89.png'},
     {'food': '红文金鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BA%A2%E6%96%87%E9%87%91%E9%B1%BC.png'},
     {'food': '红白琉金鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BA%A2%E7%99%BD%E7%90%89%E9%87%91%E9%B1%BC.png'},
     {'food': '虎虎鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%99%8E%E8%99%8E%E9%B1%BC.png'}]},
   {'name': '许大爷',
    'foods': [{'food': '百合粉', 'image': ''},
     {'food': '鸡肉豆腐',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A1%E8%82%89%E8%B1%86%E8%85%90.png'},
     {'food': '稻田鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%A8%BB%E7%94%B0%E9%B1%BC.png'},
     {'food': '五花草金鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E4%BA%94%E8%8A%B1%E8%8D%89%E9%87%91%E9%B1%BC.png'},
     {'food': '彩圆儿', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%BD%A9%E5%9C%86%E5%84%BF.png'}]},
   {'name': '公孙不胜',
    'foods': [{'food': '小鳔花', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%B0%8F%E9%B3%94%E8%8A%B1.png'},
     {'food': '酸菜羊肉',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E7%BE%8A%E8%82%89.png'},
     {'food': '羊肉泡馍',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BE%8A%E8%82%89%E6%B3%A1%E9%A6%8D.png'},
     {'food': '吸鳅', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%90%B8%E9%B3%85.png'},
     {'food': '长者鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%95%BF%E8%80%85%E9%B1%BC.png'}]},
   {'name': '马大卫',
    'foods': [{'food': '虎虎鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%99%8E%E8%99%8E%E9%B1%BC.png'},
     {'food': '酸菜氽白肉', 'image': ''},
     {'food': '狮子头',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%8B%AE%E5%AD%90%E5%A4%B4.png'},
     {'food': '木须肉',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9C%A8%E9%A1%BB%E8%82%89.png'},
     {'food': '大耳鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%A4%A7%E8%80%B3%E9%B1%BC.png'}]},
   {'name': '关六菲',
    'foods': [{'food': '红帽金鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BA%A2%E5%B8%BD%E9%87%91%E9%B1%BC.png'},
     {'food': '金龙鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%87%91%E9%BE%99%E9%B1%BC.png'},
     {'food': '唐鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%94%90%E9%B1%BC.png'},
     {'food': '六鳃鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%85%AD%E9%B3%83%E9%B1%BC.png'},
     {'food': '龙须鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BE%99%E9%A1%BB%E9%B1%BC.png'}]},
   {'name': '金燕歌',
    'foods': [{'food': '百合橘黄', 'image': ''},
     {'food': '一串黄', 'image': ''},
     {'food': '木须肉',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9C%A8%E9%A1%BB%E8%82%89.png'},
     {'food': '金燕鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%87%91%E7%87%95%E9%B1%BC.png'},
     {'food': '珍珠鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%8F%8D%E7%8F%A0%E9%B1%BC.png'}]},
   {'name': '虎子',
    'foods': [{'food': '鹦鹉鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B9%A6%E9%B9%89%E9%B1%BC.png'},
     {'food': '酸菜氽白肉', 'image': ''},
     {'food': '蚂蚁上树',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%9A%82%E8%9A%81%E4%B8%8A%E6%A0%91.png'},
     {'food': '短鲷', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%9F%AD%E9%B2%B7.png'},
     {'food': '叉尾斗鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8F%89%E5%B0%BE%E6%96%97%E9%B1%BC.png'}]},
   {'name': '王婆',
    'foods': [{'food': '鸢尾橘黄', 'image': ''},
     {'food': '鱼香肉丝',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%B3%96%E9%86%8B%E9%87%8C%E8%84%8A.png'},
     {'food': '狮子头',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%8B%AE%E5%AD%90%E5%A4%B4.png'},
     {'food': '红白高头', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BA%A2%E7%99%BD%E9%AB%98%E5%A4%B4.png'},
     {'food': '孔雀鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%AD%94%E9%9B%80%E9%B1%BC.png'}]},
   {'name': '张得本',
    'foods': [{'food': '荠菜肉包',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8D%A0%E8%8F%9C%E8%82%89%E5%8C%85.png'},
     {'food': '珍珠鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%8F%8D%E7%8F%A0%E9%B1%BC.png'},
     {'food': '一串黄', 'image': ''},
     {'food': '兰寿鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%85%B0%E5%AF%BF%E9%B1%BC.png'},
     {'food': '龙须鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BE%99%E9%A1%BB%E9%B1%BC.png'}]},
   {'name': '谢小伍',
    'foods': [{'food': '百合橘黄', 'image': ''},
     {'food': '鸡肉豆腐',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A1%E8%82%89%E8%B1%86%E8%85%90.png'},
     {'food': '黑龙晴', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BB%91%E9%BE%99%E6%99%B4.png'},
     {'food': '绿孔雀鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BB%BF%E5%AD%94%E9%9B%80%E9%B1%BC.png'},
     {'food': '月鲤', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9C%88%E9%B2%A4.png'}]},
   {'name': '小海棠',
    'foods': [{'food': '花萎草浅粉', 'image': ''},
     {'food': '糖醋里脊', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%B3%96%E9%86%8B%E9%87%8C%E8%84%8A.png'},
     {'food': '兔鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%85%94%E9%B1%BC.png'},
     {'food': '萝卜鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%90%9D%E5%8D%9C%E9%B1%BC.png'},
     {'food': '蝴蝶鲤', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%9D%B4%E8%9D%B6%E9%B2%A4.png'}]},
   {'name': '阿飞',
    'foods': [{'food': '绣球蓝', 'image': ''},
     {'food': '香辣羊肉面',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%A6%99%E8%BE%A3%E7%BE%8A%E8%82%89%E9%9D%A2.png'},
     {'food': '稻田鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%A8%BB%E7%94%B0%E9%B1%BC.png'},
     {'food': '鹦鹉鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B9%A6%E9%B9%89%E9%B1%BC.png'},
     {'food': '奇鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%A5%87%E9%B1%BC.png'}]},
   {'name': '齐羽',
    'foods': [{'food': '绣球蓝', 'image': ''},
     {'food': '苦瓜猪肉汤',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8B%A6%E7%93%9C%E7%8C%AA%E8%82%89%E6%B1%A4.png'},
     {'food': '锦鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%94%A6%E9%B1%BC.png'},
     {'food': '墨燕鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%A2%A8%E7%87%95%E9%B1%BC.png'},
     {'food': '半月斗鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8D%8A%E6%9C%88%E6%96%97%E9%B1%BC.png'}]},
   {'name': '小渔',
    'foods': [{'food': '花菱草蓝', 'image': ''},
     {'food': '黄焖鸡',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BB%84%E7%84%96%E9%B8%A1.png'},
     {'food': '猫猫鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%8C%AB%E7%8C%AB%E9%B1%BC.png'},
     {'food': '朱砂水泡', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9C%B1%E7%A0%82%E6%B0%B4%E6%B3%A1.png'},
     {'food': '华鲤', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8D%8E%E9%B2%A4.png'}]},
   {'name': '花满山',
    'foods': [{'food': '鸢尾粉白', 'image': ''},
     {'food': '花菱草紫', 'image': ''},
     {'food': '百合蓝', 'image': ''},
     {'food': '荠菜馄饨', 'image': ''},
     {'food': '花瓣鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8A%B1%E7%93%A3%E9%B1%BC.png'}]},
   {'name': '玉瑾',
    'foods': [{'food': '芹菜馄饨', 'image': ''},
     {'food': '蚂蚁上树',
      'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%9A%82%E8%9A%81%E4%B8%8A%E6%A0%91.png'},
     {'food': '花萎草浅粉', 'image': ''},
     {'food': '孔雀鱼', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%AD%94%E9%9B%80%E9%B1%BC.png'},
     {'food': '黑龙晴', 'image': 'https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BB%91%E9%BE%99%E6%99%B4.png'}]}],
    foods: [],
    selectedPerson: '朱敬儒'
  },
  
  onSearchInput: function (e) {
    const searchTerm = e.detail.value;
    console.log(searchTerm)
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
