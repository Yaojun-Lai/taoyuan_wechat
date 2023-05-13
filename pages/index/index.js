Page({
  data: {
    indexType: {'food0': '农作物', 'food1': '农作物', 'food2': '农作物', 'food3': '农作物', 'food4': '农作物', 'food5': '农作物', 'food6': '农作物', 'food7': '农作物', 'food8': '农作物', 'food9': '肉类', 'food10': '肉类', 'food11': '肉类', 'food12': '肉类', 'food13': '制糖', 'food14': '制糖', 'food15': '制糖', 'food16': '饼坊', 'food17': '饼坊', 'food18': '饼坊', 'food19': '饼坊', 'food20': '饼坊', 'food21': '石磨', 'food22': '石磨', 'food23': '石磨', 'food24': '豆坊', 'food25': '豆坊', 'food26': '豆坊', 'food27': '豆腐加工', 'food28': '豆腐加工', 'food29': '豆腐加工', 'food30': '豆腐加工', 'food31': '豆腐加工', 'food32': '豆腐加工', 'food33': '玩具', 'food34': '玩具', 'food35': '玩具', 'food36': '玩具', 'food37': '木工', 'food38': '木工', 'food39': '木工', 'food40': '糕坊', 'food41': '糕坊', 'food42': '糕坊', 'food43': '糕坊', 'food44': '编织', 'food45': '编织', 'food46': '编织', 'food47': '编织', 'food48': '腌制', 'food49': '腌制', 'food50': '腌制', 'food51': '腌制', 'food52': '腌制', 'food53': '陶瓷', 'food54': '陶瓷', 'food55': '陶瓷', 'food56': '文具', 'food57': '文具', 'food58': '文具', 'food59': '晾堂', 'food60': '晾堂', 'food61': '晾堂', 'food62': '绣坊', 'food63': '绣坊', 'food64': '绣坊', 'food65': '土料', 'food66': '土料', 'food67': '土料', 'food68': '纺织', 'food69': '纺织', 'food70': '纺织', 'food71': '开采', 'food72': '开采', 'food73': '开采', 'food74': '开采', 'food75': '菜谱', 'food76': '菜谱', 'food77': '菜谱', 'food78': '菜谱', 'food79': '菜谱', 'food80': '菜谱', 'food81': '菜谱', 'food82': '菜谱', 'food83': '菜谱', 'food84': '菜谱', 'food85': '菜谱', 'food86': '菜谱', 'food87': '菜谱', 'food88': '菜谱', 'food89': '菜谱', 'food90': '菜谱', 'food91': '菜谱', 'food92': '菜谱', 'food93': '菜谱', 'food94': '菜谱', 'food95': '菜谱', 'food96': '菜谱', 'food97': '菜谱', 'food98': '菜谱', 'food99': '菜谱', 'food100': '菜谱', 'food101': '菜谱', 'food102': '菜谱', 'food103': '菜谱', 'food104': '菜谱', 'food105': '菜谱', 'food106': '菜谱', 'food107': '菜谱', 'food108': '菜谱', 'food109': '菜谱', 'food110': '菜谱', 'food111': '菜谱'},
    searchInput: '',
    selectedFoodType: '',
    foodTypes: ['农作物', '肉类', '制糖', '饼坊', '石磨', '豆坊', '豆腐加工', '玩具', '木工', '糕坊', '编织', '腌制', '陶瓷', '文具', '晾堂', '绣坊', '土料', '纺织', '开采', '菜谱'],
  
    allFoods: [{
      "type": "农作物",
      "name": "小麦",
      "price": 1,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%B0%8F%E9%BA%A6.png",
      "quantity": 0,
      "index": "food0"
    },
    {
      "type": "农作物",
      "name": "大豆",
      "price": 2,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%A4%A7%E8%B1%86.png",
      "quantity": 0,
      "index": "food1"
    },
    {
      "type": "农作物",
      "name": "甘蔗",
      "price": 3,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%94%98%E8%94%97.png",
      "quantity": 0,
      "index": "food2"
    },
    {
      "type": "农作物",
      "name": "水稻",
      "price": 4,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%B0%B4%E7%A8%BB.png",
      "quantity": 0,
      "index": "food3"
    },
    {
      "type": "农作物",
      "name": "白菜",
      "price": 5,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%99%BD%E8%8F%9C.jpeg",
      "quantity": 0,
      "index": "food4"
    },
    {
      "type": "农作物",
      "name": "辣椒",
      "price": 6,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%BE%A3%E6%A4%92.png",
      "quantity": 0,
      "index": "food5"
    },
    {
      "type": "农作物",
      "name": "土豆",
      "price": 7,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%9C%9F%E8%B1%86.png",
      "quantity": 0,
      "index": "food6"
    },
    {
      "type": "农作物",
      "name": "苎麻",
      "price": 9,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8B%8E%E9%BA%BB.png",
      "quantity": 0,
      "index": "food7"
    },
    {
      "type": "农作物",
      "name": "南瓜",
      "price": 9,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E5%8D%97%E7%93%9C.JPG",
      "quantity": 0,
      "index": "food8"
    },
    {
      "type": "肉类",
      "name": "猪肉",
      "price": 15,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%8C%AA%E8%82%89.png",
      "quantity": 0,
      "index": "food9"
    },
    {
      "type": "肉类",
      "name": "鸡蛋",
      "price": 2,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A1%E8%9B%8B.png",
      "quantity": 0,
      "index": "food10"
    },
    {
      "type": "肉类",
      "name": "鸭肉",
      "price": 15,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%AD%E8%82%89.png",
      "quantity": 0,
      "index": "food11"
    },
    {
      "type": "肉类",
      "name": "鸡肉",
      "price": 15,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A1%E8%82%89.png",
      "quantity": 0,
      "index": "food12"
    },
    {
      "type": "制糖",
      "name": "糖",
      "price": 12,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%B3%96.jpeg",
      "quantity": 0,
      "index": "food13"
    },
    {
      "type": "制糖",
      "name": "红糖",
      "price": 19,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BA%A2%E7%B3%96.png",
      "quantity": 0,
      "index": "food14"
    },
    {
      "type": "制糖",
      "name": "麦糖",
      "price": 24,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BA%A6%E7%B3%96.png",
      "quantity": 0,
      "index": "food15"
    },
    {
      "type": "饼坊",
      "name": "鸡蛋饼",
      "price": 18,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A1%E8%9B%8B%E9%A5%BC.png",
      "quantity": 0,
      "index": "food16"
    },
    {
      "type": "饼坊",
      "name": "烧饼",
      "price": 34,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%83%A7%E9%A5%BC.png",
      "quantity": 0,
      "index": "food17"
    },
    {
      "type": "饼坊",
      "name": "蔬菜饼",
      "price": 45,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%94%AC%E8%8F%9C%E9%A5%BC.png",
      "quantity": 0,
      "index": "food18"
    },
    {
      "type": "饼坊",
      "name": "土豆饼",
      "price": 72,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%9C%9F%E8%B1%86%E9%A5%BC.JPG",
      "quantity": 0,
      "index": "food19"
    },
    {
      "type": "饼坊",
      "name": "南瓜饼",
      "price": 89,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E5%8D%97%E7%93%9C%E9%A5%BC.JPG",
      "quantity": 0,
      "index": "food20"
    },
    {
      "type": "石磨",
      "name": "面粉",
      "price": 6,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E9%9D%A2%E7%B2%89.JPG",
      "quantity": 0,
      "index": "food21"
    },
    {
      "type": "石磨",
      "name": "糕粉",
      "price": 16,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%B3%95%E7%B2%89.png",
      "quantity": 0,
      "index": "food22"
    },
    {
      "type": "石磨",
      "name": "土豆粉",
      "price": 33,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%9C%9F%E8%B1%86%E7%B2%89.png",
      "quantity": 0,
      "index": "food23"
    },
    {
      "type": "豆坊",
      "name": "豆腐",
      "price": 10,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%B1%86%E8%85%90.png",
      "quantity": 0,
      "index": "food24"
    },
    {
      "type": "豆坊",
      "name": "豆浆",
      "price": 14,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%B1%86%E6%B5%86.png",
      "quantity": 0,
      "index": "food25"
    },
    {
      "type": "豆坊",
      "name": "豆豉",
      "price": 38,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%B1%86%E8%B1%89.png",
      "quantity": 0,
      "index": "food26"
    },
    {
      "type": "豆腐加工",
      "name": "油豆腐",
      "price": 26,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%B2%B9%E8%B1%86%E8%85%90.png",
      "quantity": 0,
      "index": "food27"
    },
    {
      "type": "豆腐加工",
      "name": "腐竹",
      "price": 36,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%85%90%E7%AB%B9.png",
      "quantity": 0,
      "index": "food28"
    },
    {
      "type": "豆腐加工",
      "name": "豆腐乳",
      "price": 42,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%B1%86%E8%85%90%E4%B9%B3.png",
      "quantity": 0,
      "index": "food29"
    },
    {
      "type": "豆腐加工",
      "name": "豆筋",
      "price": 45,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E8%B1%86%E7%AD%8B.JPG",
      "quantity": 0,
      "index": "food30"
    },
    {
      "type": "豆腐加工",
      "name": "豆腐脑",
      "price": 46,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%B1%86%E8%85%90%E8%84%91.png",
      "quantity": 0,
      "index": "food31"
    },
    {
      "type": "豆腐加工",
      "name": "豆腐干",
      "price": 40,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%B1%86%E8%85%90%E5%B9%B2.png",
      "quantity": 0,
      "index": "food32"
    },
    {
      "type": "玩具",
      "name": "竹蜻蜓",
      "price": 102,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%AB%B9%E8%9C%BB%E8%9C%93.png",
      "quantity": 0,
      "index": "food33"
    },
    {
      "type": "玩具",
      "name": "泥哨",
      "price": 86,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%B3%A5%E5%93%A8.png",
      "quantity": 0,
      "index": "food34"
    },
    {
      "type": "玩具",
      "name": "竹板",
      "price": 94,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%AB%B9%E6%9D%BF.png",
      "quantity": 0,
      "index": "food35"
    },
    {
      "type": "玩具",
      "name": "陀螺",
      "price": 101,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E9%99%80%E8%9E%BA.JPG",
      "quantity": 0,
      "index": "food36"
    },
    {
      "type": "木工",
      "name": "陶艺木具",
      "price": 30,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%99%B6%E8%89%BA%E6%9C%A8%E5%85%B7.png",
      "quantity": 0,
      "index": "food37"
    },
    {
      "type": "木工",
      "name": "榫卯",
      "price": 50,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E6%A6%AB%E5%8D%AF.png",
      "quantity": 0,
      "index": "food38"
    },
    {
      "type": "木工",
      "name": "鲁班锁",
      "price": 74,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B2%81%E7%8F%AD%E9%94%81.png",
      "quantity": 0,
      "index": "food39"
    },
    {
      "type": "糕坊",
      "name": "糯米糕",
      "price": 38,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%B3%AF%E7%B1%B3%E7%B3%95.png",
      "quantity": 0,
      "index": "food40"
    },
    {
      "type": "糕坊",
      "name": "鸡蛋糕",
      "price": 53,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E9%B8%A1%E8%9B%8B%E7%B3%95.JPG",
      "quantity": 0,
      "index": "food41"
    },
    {
      "type": "糕坊",
      "name": "发糕",
      "price": 60,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8F%91%E7%B3%95.png",
      "quantity": 0,
      "index": "food42"
    },
    {
      "type": "糕坊",
      "name": "南瓜糕",
      "price": 84,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8D%97%E7%93%9C%E7%B3%95.jpeg",
      "quantity": 0,
      "index": "food43"
    },
    {
      "type": "编织",
      "name": "竹片",
      "price": 40,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%AB%B9%E7%89%87.png",
      "quantity": 0,
      "index": "food44"
    },
    {
      "type": "编织",
      "name": "竹篓",
      "price": 72,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%AB%B9%E7%AF%93.png",
      "quantity": 0,
      "index": "food45"
    },
    {
      "type": "编织",
      "name": "麻绳",
      "price": 37,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BA%BB%E7%BB%B3.png",
      "quantity": 0,
      "index": "food46"
    },
    {
      "type": "编织",
      "name": "斗笠",
      "price": 56,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E6%96%97%E7%AC%A0.JPG",
      "quantity": 0,
      "index": "food47"
    },
    {
      "type": "腌制",
      "name": "咸鸡蛋",
      "price": 14,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E5%92%B8%E9%B8%A1%E8%9B%8B.JPG",
      "quantity": 0,
      "index": "food48"
    },
    {
      "type": "腌制",
      "name": "酸菜",
      "price": 25,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E9%85%B8%E8%8F%9C.JPG",
      "quantity": 0,
      "index": "food49"
    },
    {
      "type": "腌制",
      "name": "腌鸡肉",
      "price": 39,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E8%85%8C%E9%B8%A1%E8%82%89.JPG",
      "quantity": 0,
      "index": "food50"
    },
    {
      "type": "腌制",
      "name": "腌土豆",
      "price": 51,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%85%8C%E5%9C%9F%E8%B1%86.png",
      "quantity": 0,
      "index": "food51"
    },
    {
      "type": "腌制",
      "name": "腌羊肉",
      "price": 49,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E8%85%8C%E7%BE%8A%E8%82%89.JPG",
      "quantity": 0,
      "index": "food52"
    },
    {
      "type": "陶瓷",
      "name": "陶器",
      "price": 72,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%99%B6%E5%99%A8.png",
      "quantity": 0,
      "index": "food53"
    },
    {
      "type": "陶瓷",
      "name": "单色瓷",
      "price": 104,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8D%95%E8%89%B2%E7%93%B7.png",
      "quantity": 0,
      "index": "food54"
    },
    {
      "type": "陶瓷",
      "name": "彩绘瓷",
      "price": 160,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E5%BD%A9%E7%BB%98%E7%93%B7.JPG",
      "quantity": 0,
      "index": "food55"
    },
    {
      "type": "文具",
      "name": "纸",
      "price": 67,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E7%BA%B8.JPG",
      "quantity": 0,
      "index": "food56"
    },
    {
      "type": "文具",
      "name": "砚",
      "price": 104,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E7%A0%9A.JPG",
      "quantity": 0,
      "index": "food57"
    },
    {
      "type": "文具",
      "name": "笔",
      "price": 66,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E7%AC%94.JPG",
      "quantity": 0,
      "index": "food58"
    },
    {
      "type": "晾堂",
      "name": "干豆豉",
      "price": 56,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E5%B9%B2%E8%B1%86%E8%B1%89.JPG",
      "quantity": 0,
      "index": "food59"
    },
    {
      "type": "晾堂",
      "name": "粉丝",
      "price": 49,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E7%B2%89%E4%B8%9D.JPG",
      "quantity": 0,
      "index": "food60"
    },
    {
      "type": "晾堂",
      "name": "南瓜籽",
      "price": 47,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E5%8D%97%E7%93%9C%E7%B1%BD.JPG",
      "quantity": 0,
      "index": "food61"
    },
    {
      "type": "绣坊",
      "name": "荷包",
      "price": 114,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E8%8D%B7%E5%8C%85.JPG",
      "quantity": 0,
      "index": "food62"
    },
    {
      "type": "绣坊",
      "name": "虎头帽",
      "price": 90,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E8%99%8E%E5%A4%B4%E5%B8%BD.JPG",
      "quantity": 0,
      "index": "food63"
    },
    {
      "type": "绣坊",
      "name": "布娃娃",
      "price": 88,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E5%B8%83%E5%A8%83%E5%A8%83.JPG",
      "quantity": 0,
      "index": "food64"
    },
    {
      "type": "土料",
      "name": "陶土",
      "price": 30,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%99%B6%E5%9C%9F.png",
      "quantity": 0,
      "index": "food65"
    },
    {
      "type": "土料",
      "name": "釉料",
      "price": 30,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%87%89%E6%96%99.png",
      "quantity": 0,
      "index": "food66"
    },
    {
      "type": "土料",
      "name": "釉彩",
      "price": 52,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E9%87%89%E5%BD%A9.JPG",
      "quantity": 0,
      "index": "food67"
    },
    {
      "type": "纺织",
      "name": "麻布",
      "price": 48,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E9%BA%BB%E5%B8%83.JPG",
      "quantity": 0,
      "index": "food68"
    },
    {
      "type": "纺织",
      "name": "绒线",
      "price": 26,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E7%BB%92%E7%BA%BF.JPG",
      "quantity": 0,
      "index": "food69"
    },
    {
      "type": "纺织",
      "name": "棉布",
      "price": 50,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E6%A3%89%E5%B8%83.JPG",
      "quantity": 0,
      "index": "food70"
    },
    {
      "type": "开采",
      "name": "青竹",
      "price": 10,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%9D%92%E7%AB%B9.png",
      "quantity": 0,
      "index": "food71"
    },
    {
      "type": "开采",
      "name": "原始土",
      "price": 10,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8E%9F%E5%A7%8B%E5%9C%9F.png",
      "quantity": 0,
      "index": "food72"
    },
    {
      "type": "开采",
      "name": "木材",
      "price": 10,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9C%A8%E6%9D%90.jpeg",
      "quantity": 0,
      "index": "food73"
    },
    {
      "type": "开采",
      "name": "矿料",
      "price": 10,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%9F%BF%E6%96%99.png",
      "quantity": 0,
      "index": "food74"
    },
    {
      "type": "菜谱",
      "name": "蛋炒饭",
      "price": 8,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%9B%8B%E7%82%92%E9%A5%AD.png",
      "quantity": 0,
      "index": "food75"
    },
    {
      "type": "菜谱",
      "name": "清汤白菜",
      "price": 15,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%B8%85%E6%B1%A4%E7%99%BD%E8%8F%9C.png",
      "quantity": 0,
      "index": "food76"
    },
    {
      "type": "菜谱",
      "name": "麻花",
      "price": 15,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BA%BB%E8%8A%B1.png",
      "quantity": 0,
      "index": "food77"
    },
    {
      "type": "菜谱",
      "name": "蛋黄酥",
      "price": 14,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%9B%8B%E9%BB%84%E9%85%A5.png",
      "quantity": 0,
      "index": "food78"
    },
    {
      "type": "菜谱",
      "name": "麻婆豆腐",
      "price": 14,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BA%BB%E5%A9%86%E8%B1%86%E8%85%90.png",
      "quantity": 0,
      "index": "food79"
    },
    {
      "type": "菜谱",
      "name": "酸菜豆腐",
      "price": 21,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E8%B1%86%E8%85%90.png",
      "quantity": 0,
      "index": "food80"
    },
    {
      "type": "菜谱",
      "name": "鸡蛋面",
      "price": 10,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A1%E8%9B%8B%E9%9D%A2.png",
      "quantity": 0,
      "index": "food81"
    },
    {
      "type": "菜谱",
      "name": "辣子鸡丁",
      "price": 17,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%BE%A3%E5%AD%90%E9%B8%A1%E4%B8%81.png",
      "quantity": 0,
      "index": "food82"
    },
    {
      "type": "菜谱",
      "name": "鸡肉豆腐",
      "price": 15,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B8%A1%E8%82%89%E8%B1%86%E8%85%90.png",
      "quantity": 0,
      "index": "food83"
    },
    {
      "type": "菜谱",
      "name": "鲫鱼豆腐汤",
      "price": 12,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%B2%AB%E9%B1%BC%E8%B1%86%E8%85%90%E6%B1%A4.png",
      "quantity": 0,
      "index": "food84"
    },
    {
      "type": "菜谱",
      "name": "虎皮肉",
      "price": 17,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%99%8E%E7%9A%AE%E8%82%89.png",
      "quantity": 0,
      "index": "food85"
    },
    {
      "type": "菜谱",
      "name": "酸菜鱼",
      "price": 29,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E9%B1%BC.jpeg",
      "quantity": 0,
      "index": "food86"
    },
    {
      "type": "菜谱",
      "name": "酸菜汆白肉",
      "price": 24,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E6%B1%86%E7%99%BD%E8%82%89.png",
      "quantity": 0,
      "index": "food87"
    },
    {
      "type": "菜谱",
      "name": "酸辣土豆丝",
      "price": 20,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E5%9C%9F%E8%B1%86%E4%B8%9D.png",
      "quantity": 0,
      "index": "food88"
    },
    {
      "type": "菜谱",
      "name": "剁椒鱼头",
      "price": 17,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%89%81%E6%A4%92%E9%B1%BC%E5%A4%B4.png",
      "quantity": 0,
      "index": "food89"
    },
    {
      "type": "菜谱",
      "name": "苦瓜炒蛋",
      "price": 16,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8B%A6%E7%93%9C%E7%82%92%E8%9B%8B.png",
      "quantity": 0,
      "index": "food90"
    },
    {
      "type": "菜谱",
      "name": "荠菜肉包",
      "price": 25,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8D%A0%E8%8F%9C%E8%82%89%E5%8C%85.png",
      "quantity": 0,
      "index": "food91"
    },
    {
      "type": "菜谱",
      "name": "苦瓜猪肉汤",
      "price": 21,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8B%A6%E7%93%9C%E7%8C%AA%E8%82%89%E6%B1%A4.png",
      "quantity": 0,
      "index": "food92"
    },
    {
      "type": "菜谱",
      "name": "肉末烧饼",
      "price": 17,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%82%89%E6%9C%AB%E7%83%A7%E9%A5%BC.png",
      "quantity": 0,
      "index": "food93"
    },
    {
      "type": "菜谱",
      "name": "红烧鸭",
      "price": 20,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BA%A2%E7%83%A7%E9%B8%AD.png",
      "quantity": 0,
      "index": "food94"
    },
    {
      "type": "菜谱",
      "name": "荠菜馄炖",
      "price": 25,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8D%A0%E8%8F%9C%E9%A6%84%E7%82%96.png",
      "quantity": 0,
      "index": "food95"
    },
    {
      "type": "菜谱",
      "name": "苦瓜拌面",
      "price": 20,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%8B%A6%E7%93%9C%E6%8B%8C%E9%9D%A2.png",
      "quantity": 0,
      "index": "food96"
    },
    {
      "type": "菜谱",
      "name": "黄焖鸡",
      "price": 27,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%BB%84%E7%84%96%E9%B8%A1.png",
      "quantity": 0,
      "index": "food97"
    },
    {
      "type": "菜谱",
      "name": "香椿拌豆腐",
      "price": 18,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%A6%99%E6%A4%BF%E6%8B%8C%E8%B1%86%E8%85%90.png",
      "quantity": 0,
      "index": "food98"
    },
    {
      "type": "菜谱",
      "name": "松鼠鳜鱼",
      "price": 14,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9D%BE%E9%BC%A0%E9%B3%9C%E9%B1%BC.png",
      "quantity": 0,
      "index": "food99"
    },
    {
      "type": "菜谱",
      "name": "香辣羊肉面",
      "price": 24,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%A6%99%E8%BE%A3%E7%BE%8A%E8%82%89%E9%9D%A2.png",
      "quantity": 0,
      "index": "food100"
    },
    {
      "type": "菜谱",
      "name": "酸菜羊肉",
      "price": 24,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%85%B8%E8%8F%9C%E7%BE%8A%E8%82%89.png",
      "quantity": 0,
      "index": "food101"
    },
    {
      "type": "菜谱",
      "name": "银鱼南瓜羹",
      "price": 26,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E9%93%B6%E9%B1%BC%E5%8D%97%E7%93%9C%E7%BE%B9.png",
      "quantity": 0,
      "index": "food102"
    },
    {
      "type": "菜谱",
      "name": "糖醋里脊",
      "price": 17,
      "avatar": "",
      "quantity": 0,
      "index": "food103"
    },
    {
      "type": "菜谱",
      "name": "鱼香肉丝",
      "price": 25,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%B3%96%E9%86%8B%E9%87%8C%E8%84%8A.png",
      "quantity": 0,
      "index": "food104"
    },
    {
      "type": "菜谱",
      "name": "木须肉",
      "price": 27,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E6%9C%A8%E9%A1%BB%E8%82%89.png",
      "quantity": 0,
      "index": "food105"
    },
    {
      "type": "菜谱",
      "name": "赛螃蟹",
      "price": 9,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%B5%9B%E8%9E%83%E8%9F%B9.png",
      "quantity": 0,
      "index": "food106"
    },
    {
      "type": "菜谱",
      "name": "狮子头",
      "price": 30,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%8B%AE%E5%AD%90%E5%A4%B4.png",
      "quantity": 0,
      "index": "food107"
    },
    {
      "type": "菜谱",
      "name": "蚂蚁上树",
      "price": 52,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E8%9A%82%E8%9A%81%E4%B8%8A%E6%A0%91.png",
      "quantity": 0,
      "index": "food108"
    },
    {
      "type": "菜谱",
      "name": "粉丝蒸白菜",
      "price": 38,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%B2%89%E4%B8%9D%E8%92%B8%E7%99%BD%E8%8F%9C.png",
      "quantity": 0,
      "index": "food109"
    },
    {
      "type": "菜谱",
      "name": "羊肉泡馍",
      "price": 48,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E7%BE%8A%E8%82%89%E6%B3%A1%E9%A6%8D.png",
      "quantity": 0,
      "index": "food110"
    },
    {
      "type": "菜谱",
      "name": "南瓜馒头",
      "price": 31,
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/master/%E5%8D%97%E7%93%9C%E9%A6%92%E5%A4%B4.png",
      "quantity": 0,
      "index": "food111"
    }],
   
    
    totalBookPrice: 0,
    extraPrice: 0,
    bookPrice: 0,
    pricePerPerson: 0,
    totalPrice: 0, // initialize total price to zero
    showModal: false, // flag to show/hide the modal window
    cartFoods: [], // initialize cart foods to an empty array
    selectedTable: null, // initialize selected table to null
    currentFoods: [], // This will store only the foods of the selected type
    selectedType: 'Chinese', // default selected type
    
  },
  

  onLoad: function() {
  this.setData({
    selectedFoodType: this.data.foodTypes[0],
    currentFoods: this.data.allFoods
  });
},
  

  loadFoods: function(type) {
    // Filter the foods of the selected type
    const foods = this.data.allFoods.filter(food => food.type === type);
    this.setData({
      currentFoods: foods,
      selectedType: type
    });
  },
  
  changeType: function(e) {
    const type = e.currentTarget.dataset.type;
    const firstFoodOfType = this.data.allFoods.find(food => food.type === type);
    if (firstFoodOfType) {
      this.setData({
        scrollToFood: firstFoodOfType.index,
        selectedFoodType: type
      });
    }
  },
  
  
  
  increaseOrder: function(e) {
    const name = e.currentTarget.dataset.name;
    const foods = this.data.allFoods;
    const index = foods.findIndex(food => food.name === name);
    if(index !== -1){
      foods[index].quantity = (foods[index].quantity || 0) + 1;
      this.setData({ 
        allFoods: foods,
        currentFoods: this.data.currentFoods
      });
      this.addToCart(foods[index]); // Add the item to the cart
      this.computeTotalPrice(); // Recompute the total price
    }
  },
  
  decreaseOrder: function(e) {
    const name = e.currentTarget.dataset.name;
    const foods = this.data.allFoods;
    const index = foods.findIndex(food => food.name === name);
    if(index !== -1 && foods[index].quantity > 0){
      foods[index].quantity -= 1;
      if(foods[index].quantity === 0) {
        delete foods[index].quantity;
      }
      this.setData({ 
        allFoods: foods,
        currentFoods: this.data.currentFoods
      });
      this.removeFromCart(foods[index]); // Remove the item from the cart
      this.computeTotalPrice(); // Recompute the total price
    }
  },

  // Compute the total price based on the items in the cart
  computeTotalPrice: function() {
    const cartFoods = this.data.cartFoods;
    let totalPrice = 0;
    for (let i = 0; i < cartFoods.length; i++) {
      const food = cartFoods[i];
      totalPrice += food.price * food.quantity;
    }
    this.setData({
      totalPrice: totalPrice.toFixed(2)
    });
    const totalBookPrice = parseFloat(this.data.totalBookPrice);
    const totalPrice2 = parseFloat(this.data.totalPrice);

    if (!isNaN(totalPrice) && totalPrice2 !== 0){
      this.setData({
        pricePerPerson: (totalBookPrice / totalPrice2).toFixed(2)
      })
    }else{
      this.setData({
        pricePerPerson: 0
      })
    }
  },

  // Add a food item to the cart
  addToCart: function(food) {
    const cartFoods = this.data.cartFoods;
    const index = cartFoods.findIndex(item => item.name === food.name);
    if (index !== -1) {
      cartFoods[index].quantity++;
    } else {
      cartFoods.push({
        type: food.type,
        name: food.name,
        price: food.price,
        avatar: food.avatar,
        quantity: 1
      });
    }
    this.setData({
      cartFoods: cartFoods
    });
  },

  // Remove a food item from the cart
  removeFromCart: function(food) {
    const cartFoods = this.data.cartFoods;
    const index = cartFoods.findIndex(item => item.name === food.name);
    if (index !== -1) {
      cartFoods[index].quantity--;
      if (cartFoods[index].quantity === 0) {
        cartFoods.splice(index, 1);
      }
      this.setData({
        cartFoods: cartFoods
      });
    }
  },

  // Show the modal window with the cart contents
  showModal: function() {
    this.setData({
      showModal: true,
      // cartItems: this.data.cartFoods
    });
  },

  // Hide the modal window
  hideModal: function() {
    this.setData({
      showModal: false
    });
  },

  // Set the selected table
  selectTable: function(event) {
    this.setData({
      selectedTable: event.detail.value
    });
  },

  // // Handle the check button click in the modal window
  // handleCheck: function(event) {
  //   const value = event.detail.value;
  //   const result = this.data.totalPrice / value;
  //   wx.showModal({
  //     title: 'Result',
  //     content: result.toFixed(2).toString(),
  //     showCancel: false
  //   });
  // },

  handleCheck: function(event) {
    const value = parseInt(event.detail.value, 10); // Explicitly convert the input to a number
    const totalPrice = parseFloat(this.data.totalPrice);
    
    if (!isNaN(value)  && !isNaN(totalPrice)) {
      if (value == 0){
        const pricePerPerson = 0;
      }
      else{
        const pricePerPerson = (totalPrice / value).toFixed(2);
      }
      wx.showModal({
        title: 'Order Summary',
        content: `Total price: ${totalPrice.toFixed(2)}\nPrice per person: ${pricePerPerson}`,
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        success: function (res) {
          if (res.confirm) {
            console.log('Confirm');
          } else if (res.cancel) {
            console.log('Cancel');
          }
        }
      });
    } else {
      wx.showModal({
        title: '错误',
        content: '请输入正确的订单价',
        showCancel: false
      });
    }
  },
  totalBookPrice: 0,
  extraPrice: 0,
  bookPrice: 0,
  pricePerPerson: 0,
  addBookPrice: function(event){
    const add = parseInt(event.detail.value, 10);
    if (isNaN(add)){
      this.setData({ extraPrice: 0 });
    }
    else{
      this.setData({ extraPrice: add });
    }
    const extraPrice = parseFloat(this.data.extraPrice);
    const bookPrice = parseFloat(this.data.bookPrice);
    this.setData({ totalBookPrice: extraPrice +  bookPrice});
    const totalPrice = parseFloat(this.data.totalPrice);
    const totalBookPrice =  parseFloat(this.data.totalBookPrice);
    if (!isNaN(totalPrice) && totalPrice !== 0) {
      const pricePerPerson = (totalBookPrice / totalPrice).toFixed(2);
      this.setData({ pricePerPerson });
    }
    else{
      this.setData({ pricePerPerson: 0 });
    }
  },
  handlePriceInput: function(event) {
    const newBookPrice = parseInt(event.detail.value, 10);
    if (isNaN(newBookPrice)){
      this.setData({ bookPrice: 0 });
    }
    else{
      this.setData({ bookPrice: newBookPrice });
    }
    const extraPrice = parseFloat(this.data.extraPrice);
    const bookPrice = parseFloat(this.data.bookPrice);
    this.setData({ totalBookPrice: extraPrice +  bookPrice});
    const totalPrice = parseFloat(this.data.totalPrice);
    const totalBookPrice =  parseFloat(this.data.totalBookPrice);
    if (!isNaN(totalPrice) && totalPrice !== 0) {
      const pricePerPerson = (totalBookPrice / totalPrice).toFixed(2);
      this.setData({ pricePerPerson });
    }
    else{
      this.setData({ pricePerPerson: 0 });
    }
  },



  // selectFoodType: function(e) {
  //   this.setData({
  //     selectedFoodType: e.currentTarget.dataset.type,
  //   });
  // },

  handleCheck: function() {
    if (this.data.pricePerPerson === '') {
      wx.showModal({
        title: 'Error',
        content: 'Please enter a valid number of people.',
        showCancel: false
      });
    } else {
      wx.showModal({
        title: 'Order Summary',
        content: `Total price: ${this.data.totalPrice.toFixed(2)}\nPrice per person: ${this.data.pricePerPerson}`,
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        success: function (res) {
          if (res.confirm) {
            console.log('Confirm');
          } else if (res.cancel) {
            console.log('Cancel');
          }
        }
      });
    }
  },
  
  
  resetQuantity: function(foodArray) {
    for (let i = 0; i < foodArray.length; i++) {
      foodArray[i].quantity = 0;
    }
    return foodArray;
  },
  
  clearOrder: function() {
    let foods = this.data.allFoods;
    let currentFoods = this.data.currentFoods;
    let cartFoods = this.data.cartFoods;
  
    // Reset the quantity of all foods, currentFoods, and cartFoods
    foods = this.resetQuantity(foods);
    currentFoods = this.resetQuantity(currentFoods);
    cartFoods = this.resetQuantity(cartFoods);
  
    this.setData({
      allFoods: foods,
      currentFoods: currentFoods,
      cartFoods: [],
      totalPrice: 0,
      totalBookPrice: 0,
      extraPrice: 0,
      bookPrice: 0,
      pricePerPerson: 0
    });
  },
  
  onSearchInput: function(e) {
    this.setData({
      searchInput: e.detail.value,
    });
  },
  
  onSearchButton: function() {
    const foodToSearch = this.data.allFoods.find(food => food.name === this.data.searchInput);
    if (foodToSearch) {
      this.setData({
        scrollToFood: foodToSearch.index,
      });
    } else {
      // Find the first food where food.name includes the search input
      const foodToScroll = this.data.allFoods.find(food => food.name.includes(this.data.searchInput));
      if (foodToScroll) {
        this.setData({
          scrollToFood: foodToScroll.index,
        });
      } else {
        console.log("No food found with this name");
      }
    }
  },
  
  scroll: function(e) {
    // Get the scroll position
    const scrollTop = e.detail.scrollTop;
  
    // Get the query object
    const query = wx.createSelectorQuery();
    // Select all food items
    query.selectAll('.food-item').boundingClientRect();
    query.exec((res) => {
      // Find the first visible food item
      const firstVisibleFood = res[0].find(r => r.top + r.height > scrollTop - 1500);
  
      if (firstVisibleFood) {
        // Get the type of the first visible food
        
        const visibleFoodType = this.data.indexType[firstVisibleFood.id]
        console.log(firstVisibleFood.id, visibleFoodType);
        if (visibleFoodType !== this.data.selectedFoodType) {
          // If the type has changed, update it
          this.setData({
            selectedFoodType: visibleFoodType
          });
        }
      }
    });
  }
  


});
