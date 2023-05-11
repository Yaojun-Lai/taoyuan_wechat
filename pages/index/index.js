Page({
  data: {
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
      "avatar": "",
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
      "avatar": "https://gitee.com/Yaojun-Lai/images_needed/raw/7700fee03402f76f5ed3f01a4f440fa7a1457d1b/%E5%92%B8%E9%B8%A1%E8%9B%8B.JPG",
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
      "avatar": "",
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
      "avatar": "",
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
      "avatar": "",
      "quantity": 0,
      "index": "food75"
    },
    {
      "type": "菜谱",
      "name": "清汤白菜",
      "price": 15,
      "avatar": "",
      "quantity": 0,
      "index": "food76"
    },
    {
      "type": "菜谱",
      "name": "麻花",
      "price": 15,
      "avatar": "",
      "quantity": 0,
      "index": "food77"
    },
    {
      "type": "菜谱",
      "name": "蛋黄酥",
      "price": 14,
      "avatar": "",
      "quantity": 0,
      "index": "food78"
    },
    {
      "type": "菜谱",
      "name": "麻婆豆腐",
      "price": 14,
      "avatar": "",
      "quantity": 0,
      "index": "food79"
    },
    {
      "type": "菜谱",
      "name": "酸菜豆腐",
      "price": 21,
      "avatar": "",
      "quantity": 0,
      "index": "food80"
    },
    {
      "type": "菜谱",
      "name": "鸡蛋面",
      "price": 10,
      "avatar": "",
      "quantity": 0,
      "index": "food81"
    },
    {
      "type": "菜谱",
      "name": "辣子鸡丁",
      "price": 17,
      "avatar": "",
      "quantity": 0,
      "index": "food82"
    },
    {
      "type": "菜谱",
      "name": "鸡肉豆腐",
      "price": 15,
      "avatar": "",
      "quantity": 0,
      "index": "food83"
    },
    {
      "type": "菜谱",
      "name": "鲫鱼豆腐汤",
      "price": 12,
      "avatar": "",
      "quantity": 0,
      "index": "food84"
    },
    {
      "type": "菜谱",
      "name": "虎皮肉",
      "price": 17,
      "avatar": "",
      "quantity": 0,
      "index": "food85"
    },
    {
      "type": "菜谱",
      "name": "酸菜鱼",
      "price": 29,
      "avatar": "",
      "quantity": 0,
      "index": "food86"
    },
    {
      "type": "菜谱",
      "name": "酸菜汆白肉",
      "price": 24,
      "avatar": "",
      "quantity": 0,
      "index": "food87"
    },
    {
      "type": "菜谱",
      "name": "酸辣土豆丝",
      "price": 20,
      "avatar": "",
      "quantity": 0,
      "index": "food88"
    },
    {
      "type": "菜谱",
      "name": "剁椒鱼头",
      "price": 17,
      "avatar": "",
      "quantity": 0,
      "index": "food89"
    },
    {
      "type": "菜谱",
      "name": "苦瓜炒蛋",
      "price": 16,
      "avatar": "",
      "quantity": 0,
      "index": "food90"
    },
    {
      "type": "菜谱",
      "name": "荠菜肉包",
      "price": 25,
      "avatar": "",
      "quantity": 0,
      "index": "food91"
    },
    {
      "type": "菜谱",
      "name": "苦瓜猪肉汤",
      "price": 21,
      "avatar": "",
      "quantity": 0,
      "index": "food92"
    },
    {
      "type": "菜谱",
      "name": "肉末烧饼",
      "price": 17,
      "avatar": "",
      "quantity": 0,
      "index": "food93"
    },
    {
      "type": "菜谱",
      "name": "红烧鸭",
      "price": 20,
      "avatar": "",
      "quantity": 0,
      "index": "food94"
    },
    {
      "type": "菜谱",
      "name": "荠菜馄炖",
      "price": 25,
      "avatar": "",
      "quantity": 0,
      "index": "food95"
    },
    {
      "type": "菜谱",
      "name": "苦瓜拌面",
      "price": 20,
      "avatar": "",
      "quantity": 0,
      "index": "food96"
    },
    {
      "type": "菜谱",
      "name": "黄焖鸡",
      "price": 27,
      "avatar": "",
      "quantity": 0,
      "index": "food97"
    },
    {
      "type": "菜谱",
      "name": "香椿拌豆腐",
      "price": 18,
      "avatar": "",
      "quantity": 0,
      "index": "food98"
    },
    {
      "type": "菜谱",
      "name": "松鼠鳜鱼",
      "price": 14,
      "avatar": "",
      "quantity": 0,
      "index": "food99"
    },
    {
      "type": "菜谱",
      "name": "香辣羊肉面",
      "price": 24,
      "avatar": "",
      "quantity": 0,
      "index": "food100"
    },
    {
      "type": "菜谱",
      "name": "酸菜羊肉",
      "price": 24,
      "avatar": "",
      "quantity": 0,
      "index": "food101"
    },
    {
      "type": "菜谱",
      "name": "银鱼南瓜羹",
      "price": 26,
      "avatar": "",
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
      "avatar": "",
      "quantity": 0,
      "index": "food104"
    },
    {
      "type": "菜谱",
      "name": "木须肉",
      "price": 27,
      "avatar": "",
      "quantity": 0,
      "index": "food105"
    },
    {
      "type": "菜谱",
      "name": "赛螃蟹",
      "price": 9,
      "avatar": "",
      "quantity": 0,
      "index": "food106"
    },
    {
      "type": "菜谱",
      "name": "狮子头",
      "price": 30,
      "avatar": "",
      "quantity": 0,
      "index": "food107"
    },
    {
      "type": "菜谱",
      "name": "蚂蚁上树",
      "price": 52,
      "avatar": "",
      "quantity": 0,
      "index": "food108"
    },
    {
      "type": "菜谱",
      "name": "粉丝蒸白菜",
      "price": 38,
      "avatar": "",
      "quantity": 0,
      "index": "food109"
    },
    {
      "type": "菜谱",
      "name": "羊肉泡馍",
      "price": 48,
      "avatar": "",
      "quantity": 0,
      "index": "food110"
    },
    {
      "type": "菜谱",
      "name": "南瓜馒头",
      "price": 31,
      "avatar": "",
      "quantity": 0,
      "index": "food111"
    }],
   

    pricePerPerson: '',
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
  handlePriceInput: function(event) {
    const people = parseInt(event.detail.value, 10);
    const totalPrice = parseFloat(this.data.totalPrice);
    if (!isNaN(people) && people !== 0 && !isNaN(totalPrice)) {
      
      const pricePerPerson = (people / totalPrice).toFixed(2);
      this.setData({ pricePerPerson });
    }
    else{
      const pricePerPerson = 0;
      this.setData({ pricePerPerson });
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
      totalPrice: 0
    });
  },
  
  


});
