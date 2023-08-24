let interstitialAd = null;
Page({
  data: {
    showModal: false,
    searchInput: '',
    
  
    allFoods: [{'name': '灰鹅',
    'text': '线索一：这鸟儿额头灰灰的，看着有些呆乎乎的。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/19.png',
    'index': 'bird0'},
   {'name': '灰鹅',
    'text': '线索二：翅膀颜色脏脏的，不是白色也不是黑色。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/53.png',
    'index': 'bird1'},
   {'name': '灰鹅',
    'text': '线索三：这黄黄短短的脚蹼，真的能游得快么？',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/87.png',
    'index': 'bird2'},
   {'name': '中华秋沙鸭',
    'text': '线索一：长相十分潦草，像出门没梳头一样。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/23.png',
    'index': 'bird3'},
   {'name': '中华秋沙鸭',
    'text': '线索二：全身羽毛灰白，像个软软的大枕头。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/57.png',
    'index': 'bird4'},
   {'name': '中华秋沙鸭',
    'text': '线索三：翅膀的颜色黑白相间，仿佛穿了一件墨染的花外套',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/91.png',
    'index': 'bird5'},
   {'name': '中华秋沙鸭',
    'text': '线索四：一看就会游泳！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/125.png',
    'index': 'bird6'},
   {'name': '中华秋沙鸭',
    'text': '线索五：在水中扑腾嬉戏时会展开翅膀，这时能看到它白色翅羽末端的墨色',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/159.png',
    'index': 'bird7'},
   {'name': '鸳鸯',
    'text': '线索一：嘴巴红红，眼睛圆圆，羽毛的颜色却很丰富',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/25.png',
    'index': 'bird8'},
   {'name': '鸳鸯',
    'text': '线索二：这种鸟儿经常被绣在手帕上，光是绣身体就得用三种颜色的丝线。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/59.png',
    'index': 'bird9'},
   {'name': '鸳鸯',
    'text': '线索三：我捡到了一片它的翅羽，黄灿灿的，真好看！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/93.png',
    'index': 'bird10'},
   {'name': '鸳鸯',
    'text': '线索四：它蹬着脚蹼游来游去的样子，我看了整整一下午。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/127.png',
    'index': 'bird11'},
   {'name': '鸳鸯',
    'text': '线索五：它在水中嬉戏玩耍，翅膀的颜色像夕阳一样！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/161.png',
    'index': 'bird12'},
   {'name': '白鹭',
    'text': '线索一：它的脑袋后面有根细长的白色羽毛，像小辫子一样',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/27.png',
    'index': 'bird13'},
   {'name': '白鹭',
    'text': '线索二：它的脑袋后面有根细长的白色羽毛，像小辫子一样',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/61.png',
    'index': 'bird14'},
   {'name': '白鹭',
    'text': '线索三：全身只有脚和嘴的颜色一样。是马大卫上次说的那只蓝嘴鸟吗？',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/95.png',
    'index': 'bird15'},
   {'name': '丹顶鹤',
    'text': '线索一：它，它的嘴尖尖的，嘴的颜色和头顶的颜色相近。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/29.png',
    'index': 'bird16'},
   {'name': '丹顶鹤',
    'text': '线索二：这只鸟好像在书中见过，灰灰的尾羽，还有胸前雪白的羽毛！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/63.png',
    'index': 'bird17'},
   {'name': '丹顶鹤',
    'text': '线索三：黑白相间的羽毛，怎么看都像是蘸了墨汁儿。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/97.png',
    'index': 'bird18'},
   {'name': '丹顶鹤',
    'text': '线索四：它墨色的脚细而长，端站时透着一股清冷气息。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/131.png',
    'index': 'bird19'},
   {'name': '丹顶鹤',
    'text': '线索五：它还会飞！翅膀展开时，像一张被墨色渲染半边的白纸。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/165.png',
    'index': 'bird20'},
   {'name': '白琵鹭',
    'text': '线索一：这只鸟儿的嘴巴长长的，扁扁的，好像一把琵琶！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/31.png',
    'index': 'bird21'},
   {'name': '白琵鹭',
    'text': '线索二：鹅黄的羽毛，浑圆的背部，看起来像一块和田玉。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/65.png',
    'index': 'bird22'},
   {'name': '白琵鹭',
    'text': '线索三：浑身上下羽毛都是一个颜色，翅膀敛起来的时候好矜持的样子。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/99.png',
    'index': 'bird23'},
   {'name': '白琵鹭',
    'text': '线索四：它的脚黑黑的，我本来还以为它的脚丫子也是黄色的呢，哎！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/133.png',
    'index': 'bird24'},
   {'name': '白琵鹭',
    'text': '线索五：飞过的时候我捡到了一片儿它翅膀上的羽毛，淡淡的黄色真好看。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/167.png',
    'index': 'bird25'},
   {'name': '朱鹭',
    'text': '线索一：头顶红红，嘴巴黑黑，好像...还有粉粉的冠羽？',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/33.png',
    'index': 'bird26'},
   {'name': '朱鹭',
    'text': '线索二：它的上半身白白粉粉的，到尾部红色越来越深。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/67.png',
    'index': 'bird27'},
   {'name': '朱鹭',
    'text': '线索三：它的翅羽粉色略深，羽毛翘起的样子也很可爱。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/101.png',
    'index': 'bird28'},
   {'name': '朱鹭',
    'text': '线索四：虽然也是红红的脚爪，但它的脚爪可比小鸭子们细长多啦！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/135.png',
    'index': 'bird29'},
   {'name': '朱鹭',
    'text': '线索五：粉翅膀从我头顶掠过。粉红也是红！"红"运当头，我要走好运了？！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/169.png',
    'index': 'bird30'},
   {'name': '麻雀',
    'text': '线索一：脑袋像个泥团子，很可爱。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/189.png',
    'index': 'bird31'},
   {'name': '麻雀',
    'text': '线索二：圆滚滚的身体，一定吃了很多东西。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/223.png',
    'index': 'bird32'},
   {'name': '麻雀',
    'text': '线索三：翅膀灰灰的，也像个泥团子。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/257.png',
    'index': 'bird33'},
   {'name': '麻雀',
    'text': '线索四：好短的脚！走起路来，蹦蹦跳跳的！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/291.png',
    'index': 'bird34'},
   {'name': '麻雀',
    'text': '线索五：它扑棱着灰色的小翅膀从我头顶飞过，好可爱啊！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/325.png',
    'index': 'bird35'},
   {'name': '虎皮鹦鹉',
    'text': '线索一：眼睛圆圆的，透着天真与可爱。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/191.png',
    'index': 'bird36'},
   {'name': '虎皮鹦鹉',
    'text': '线索二：这颜色，躲在草丛一定很难被发现吧！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/225.png',
    'index': 'bird37'},
   {'name': '虎皮鹦鹉',
    'text': '线索三：翅膀上的花纹一条一条的，像老虎的花纹一样！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/259.png',
    'index': 'bird38'},
   {'name': '虎皮鹦鹉',
    'text': '线索四：爪子黄黄的！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/293.png',
    'index': 'bird39'},
   {'name': '虎皮鹦鹉',
    'text': '线索五：我以为飘落脚边的是一片翠竹叶，没想到是它的翅羽！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/327.png',
    'index': 'bird40'},
   {'name': '斑鸠',
    'text': '线索一：它没有又细又长的嘴巴。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/193.png',
    'index': 'bird41'},
   {'name': '斑鸠',
    'text': '线索二：它的尾羽颜色简单，样式朴素，看上去并不华丽。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/227.png',
    'index': 'bird42'},
   {'name': '斑鸠',
    'text': '线索三：粽灰色的翅膀圆圆胖胖，平时应该吃得挺好的！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/261.png',
    'index': 'bird43'},
   {'name': '斑鸠',
    'text': '线索四：它的脚不长也不短，不黑也不蓝。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/295.png',
    'index': 'bird44'},
   {'name': '斑鸠',
    'text': '线索五：它咕咕叫着跑来跑去，结果摔了一跤，掉下去一片粽灰色的羽毛。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/329.png',
    'index': 'bird45'},
   {'name': '戴胜',
    'text': '线索一：今天看到了一只鸟，脑袋长得像把扇子！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/195.png',
    'index': 'bird46'},
   {'name': '戴胜',
    'text': '线索二：它长着黄色浑圆的身子和漂亮的花尾羽。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/229.png',
    'index': 'bird47'},
   {'name': '戴胜',
    'text': '线索三：翅膀上的羽毛有条纹，还挺好看的！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/263.png',
    'index': 'bird48'},
   {'name': '戴胜',
    'text': '线索四：它没有细细长长的脚。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/297.png',
    'index': 'bird49'},
   {'name': '戴胜',
    'text': '线索五：它飞走时落下一片羽毛，色彩花纹都很特别！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/331.png',
    'index': 'bird50'},
   {'name': '竹鹧鸪',
    'text': '线索一：别的鸟儿都有好看的小帽子，只有它没有。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/197.png',
    'index': 'bird51'},
   {'name': '竹鹧鸪',
    'text': '线索二：泥土色的羽毛不华丽，却自有朴素之美。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/231.png',
    'index': 'bird52'},
   {'name': '竹鹧鸪',
    'text': '线索三：通过脚来看，它应该不会游泳。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/265.png',
    'index': 'bird53'},
   {'name': '绿原鸡',
    'text': '线索一：头戴红冠，像个雄赳赳气昂昂的将军。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/199.png',
    'index': 'bird54'},
   {'name': '绿原鸡',
    'text': '线索二：墨绿色的身体，高高翘起的尾羽，让它看上去十分有气势。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/233.png',
    'index': 'bird55'},
   {'name': '绿原鸡',
    'text': '线索三：浑身上下颜色相同，翅膀也是墨绿墨绿的。！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/267.png',
    'index': 'bird56'},
   {'name': '绿原鸡',
    'text': '线索四：它的脚不够细长，不能站在水中，也没有脚蹼，应该不会游泳。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/301.png',
    'index': 'bird57'},
   {'name': '绿原鸡',
    'text': '线索五：我捡了好几片它的羽毛，准备拿来做个墨绿色的毽子！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/335.png',
    'index': 'bird58'},
   {'name': '勺鸡',
    'text': '线索一：羽冠挺立，看上去非常有精神！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/201.png',
    'index': 'bird59'},
   {'name': '勺鸡',
    'text': '线索二：虽然羽毛的颜色朴素，前胸却有一抹鲜亮的红色。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/235.png',
    'index': 'bird60'},
   {'name': '勺鸡',
    'text': '线索三：它的翅膀上没有白色，也没有黑色！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/269.png',
    'index': 'bird61'},
   {'name': '勺鸡',
    'text': '线索四：一看就不会游泳！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/303.png',
    'index': 'bird62'},
   {'name': '勺鸡',
    'text': '线索五：它的翅膀像一件棕色的蓑衣！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/337.png',
    'index': 'bird63'},
   {'name': '红腹锦鸡',
    'text': '线索一：头戴金丝冠，像画本子上描述的小皇子一样！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/203.png',
    'index': 'bird64'},
   {'name': '红腹锦鸡',
    'text': '线索二：腹羽深红，尾羽又长又绚丽！好好看！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/237.png',
    'index': 'bird65'},
   {'name': '红腹锦鸡',
    'text': '线索三：翅膀的颜色也很绚丽，有红色，还有蓝色！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/271.png',
    'index': 'bird66'},
   {'name': '红腹锦鸡',
    'text': '线索四：它的爪子黄黄的，和羽冠的颜色差不多！',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/305.png',
    'index': 'bird67'},
   {'name': '红腹锦鸡',
    'text': '线索五：全红的翅膀色彩绚丽，翱翔蓝天之上，仿佛旭日东升。',
    'avatar': 'cloud://taoyuan-cloud-4g8w43cza768e4d3.7461-taoyuan-cloud-4g8w43cza768e4d3-1320400107/images/339.png',
    'index': 'bird68'}]
  
  ,
    adLoaded: false,
    currentFoods: []
  },
  onShareAppMessage: function(){

  },
  handleAdLoad: function() {
    this.setData({ adLoaded: false });
  },
  handleAdError: function() {
    // console.log('yes')
    // this.setData({ adLoaded: true });
  },
  handleAdClose: function() {
    this.setData({ adLoaded: true });
  },
  onLoad: function() {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-acc0e44e8b34c9c3'
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
  this.setData({
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
  inputOrder: function(e) {
    const name = e.currentTarget.dataset.name;
    const foods = this.data.allFoods;
    const index = foods.findIndex(food => food.name === name);
    let quantity = parseInt(e.detail.value, 10); // Convert the input to a number
  
    // If the input is invalid (not a number, negative, or empty), set quantity to 0
    if (isNaN(quantity) || quantity < 0) {
      quantity = 0;
    }
  
    if (index !== -1) {
      foods[index].quantity = quantity; // Set the new quantity
      const cartFoods = this.data.cartFoods;
      const cartIndex = cartFoods.findIndex(item => item.name === name);
      
      if (foods[index].quantity === 0) {
        delete foods[index].quantity;
        if (cartIndex !== -1) {
          cartFoods.splice(cartIndex, 1);
        }
      } else {
        if (cartIndex !== -1) {
          cartFoods[cartIndex].quantity = quantity;
        } else {
          cartFoods.push({
            type: foods[index].type,
            name: foods[index].name,
            price: foods[index].price,
            avatar: foods[index].avatar,
            quantity: quantity
          });
        }
      }
  
      this.setData({
        allFoods: foods,
        cartFoods: cartFoods
      });
  
      this.computeTotalPrice(); // Recompute the total price
    }
  },
  
  JumpToManual: function(){
    wx.navigateTo({
      url: '/pages/manual/manual',
    })
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
      totalPrice: totalPrice.toFixed(0)
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
  addBookPrice: function(event){
    // console.log(event.detail);
    const add = parseInt(event.detail.value, 10);
    
    if (isNaN(add)){
      this.setData({ extraPrice: 0 });
    }
    else{
      this.setData({ extraPrice: add });
    }
    this.setData({
      displayPrice: add === 0 ? "" : add
    });
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
    this.setData({
      displayBookPrice: newBookPrice === 0 ? "" : newBookPrice
    });
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
      pricePerPerson: 0,
      displayBookPrice: "",
      displayPrice: "",
      searchInput: ''
 
    });
    // const event = {detail: {value: 'katherine'}};
    // this.addBookPrice(event);
  },
  
  onSearchInput: function(e) {
    const searchTerm = e.detail.value;
    this.setData({
      searchInput: e.detail.value,
    });
    const foodToSearch = this.data.allFoods.find(food => food.text === searchTerm);
    if (foodToSearch) {
      // console.log(this.data.scrollToFood)
      this.setData({
        scrollToFood: foodToSearch.index,
      });
    
    } else {
      // Find the first food where food.name includes the search input
      const foodToScroll = this.data.allFoods.find(food => food.text.includes(searchTerm));
      if (foodToScroll) {
        this.setData({
          scrollToFood: foodToScroll.index,
        });
      } 
    }

  },
  onShareAppMessage: function(){

  },
  onShareTimeline: function(){

  },
  onSearchButton: function() {
    
    const foodToSearch = this.data.allFoods.find(food => food.text === this.data.searchInput);
    if (foodToSearch) {
      console.log(this.data.scrollToFood)
      this.setData({
        scrollToFood: foodToSearch.index,
      });
      console.log(this.data.scrollToFood)
      console.log(typeof(this.data.scrollToFood))
    } else {
      // Find the first food where food.name includes the search input
      const foodToScroll = this.data.allFoods.find(food => food.text.includes(this.data.searchInput));
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
        // console.log(firstVisibleFood.id, visibleFoodType);
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
