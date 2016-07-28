/**
 * Created by tww316 on 16/7/28.
 */
const cityMap = [
  {
    "city_code": "001",
    "city_name": "北京",
  },
  {
    "city_code": "002",
    "city_name": "广州",
  },
  {
    "city_code": "003",
    "city_name": "杭州",
  },
  {
    "city_code": "004",
    "city_name": "上海",
  },
  {
    "city_code": "005",
    "city_name": "深圳",
  },
  {
    "city_code": "006",
    "city_name": "成都",
  },
  {
    "city_code": "007",
    "city_name": "大连",
  },
  {
    "city_code": "008",
    "city_name": "东莞",
  },
  {
    "city_code": "009",
    "city_name": "佛山",
  },
  {
    "city_code": "010",
    "city_name": "福州",
  },
  {
    "city_code": "011",
    "city_name": "济南",
  },
  {
    "city_code": "012",
    "city_name": "昆明",
  },
  {
    "city_code": "013",
    "city_name": "南京",
  },
  {
    "city_code": "014",
    "city_name": "南通",
  },
  {
    "city_code": "015",
    "city_name": "宁波",
  },
  {
    "city_code": "016",
    "city_name": "青岛",
  },
  {
    "city_code": "017",
    "city_name": "厦门",
  },
  {
    "city_code": "018",
    "city_name": "绍兴",
  },
  {
    "city_code": "019",
    "city_name": "苏州",
  },
  {
    "city_code": "020",
    "city_name": "天津",
  },
  {
    "city_code": "021",
    "city_name": "温州",
  },
  {
    "city_code": "022",
    "city_name": "无锡",
  },
  {
    "city_code": "023",
    "city_name": "武汉",
  },
  {
    "city_code": "024",
    "city_name": "西安",
  },
  {
    "city_code": "025",
    "city_name": "长沙",
  },
  {
    "city_code": "026",
    "city_name": "重庆",
  },
  {
    "city_code": "027",
    "city_name": "珠海",
  },
  {
    "city_code": "028",
    "city_name": "包头",
  },
  {
    "city_code": "029",
    "city_name": "常州",
  },
  {
    "city_code": "030",
    "city_name": "潮州",
  },
  {
    "city_code": "031",
    "city_name": "大庆",
  },
  {
    "city_code": "032",
    "city_name": "抚顺",
  },
  {
    "city_code": "033",
    "city_name": "赣州",
  },
  {
    "city_code": "034",
    "city_name": "广汉",
  },
  {
    "city_code": "035",
    "city_name": "贵阳",
  },
  {
    "city_code": "036",
    "city_name": "桂林",
  },
  {
    "city_code": "037",
    "city_name": "哈尔滨",
  },
  {
    "city_code": "038",
    "city_name": "海口",
  },
  {
    "city_code": "039",
    "city_name": "合肥",
  },
  {
    "city_code": "040",
    "city_name": "呼和浩特",
  },
  {
    "city_code": "041",
    "city_name": "湖州",
  },
  {
    "city_code": "042",
    "city_name": "惠州",
  },
  {
    "city_code": "043",
    "city_name": "吉安",
  },
  {
    "city_code": "044",
    "city_name": "吉林",
  },
  {
    "city_code": "045",
    "city_name": "嘉兴",
  },
  {
    "city_code": "046",
    "city_name": "江门",
  },
  {
    "city_code": "047",
    "city_name": "揭阳",
  },
  {
    "city_code": "048",
    "city_name": "金华",
  },
  {
    "city_code": "049",
    "city_name": "拉萨",
  },
  {
    "city_code": "050",
    "city_name": "兰州",
  },
  {
    "city_code": "051",
    "city_name": "乐山",
  },
  {
    "city_code": "052",
    "city_name": "丽水",
  },
  {
    "city_code": "053",
    "city_name": "茂名",
  },
  {
    "city_code": "054",
    "city_name": "梅州",
  },
  {
    "city_code": "055",
    "city_name": "南昌",
  },
  {
    "city_code": "056",
    "city_name": "南宁",
  },
  {
    "city_code": "057",
    "city_name": "秦皇岛",
  },
  {
    "city_code": "058",
    "city_name": "泉州",
  },
  {
    "city_code": "059",
    "city_name": "三亚",
  },
  {
    "city_code": "060",
    "city_name": "汕头",
  },
  {
    "city_code": "061",
    "city_name": "韶关",
  },
  {
    "city_code": "062",
    "city_name": "沈阳",
  },
  {
    "city_code": "063",
    "city_name": "十堰",
  },
  {
    "city_code": "064",
    "city_name": "石家庄",
  },
  {
    "city_code": "065",
    "city_name": "台州",
  },
  {
    "city_code": "066",
    "city_name": "太原",
  },
  {
    "city_code": "067",
    "city_name": "唐山",
  },
  {
    "city_code": "068",
    "city_name": "威海",
  },
  {
    "city_code": "069",
    "city_name": "潍坊",
  },
  {
    "city_code": "070",
    "city_name": "乌鲁木齐",
  },
  {
    "city_code": "071",
    "city_name": "咸宁",
  },
  {
    "city_code": "072",
    "city_name": "徐州",
  },
  {
    "city_code": "073",
    "city_name": "烟台",
  },
  {
    "city_code": "074",
    "city_name": "扬州",
  },
  {
    "city_code": "075",
    "city_name": "宜昌",
  },
  {
    "city_code": "076",
    "city_name": "义乌",
  },
  {
    "city_code": "077",
    "city_name": "银川",
  },
  {
    "city_code": "078",
    "city_name": "湛江",
  },
  {
    "city_code": "079",
    "city_name": "张家口",
  },
  {
    "city_code": "080",
    "city_name": "长春",
  },
  {
    "city_code": "081",
    "city_name": "肇庆",
  },
  {
    "city_code": "082",
    "city_name": "镇江",
  },
  {
    "city_code": "083",
    "city_name": "郑州",
  },
  {
    "city_code": "084",
    "city_name": "中山",
  },
  {
    "city_code": "085",
    "city_name": "株洲",
  },
  {
    "city_code": "086",
    "city_name": "淄博",
  },
  {
    "city_code": "087",
    "city_name": "安康",
  },
  {
    "city_code": "088",
    "city_name": "安宁",
  },
  {
    "city_code": "089",
    "city_name": "安庆",
  },
  {
    "city_code": "090",
    "city_name": "安阳",
  },
  {
    "city_code": "091",
    "city_name": "鞍山",
  },
  {
    "city_code": "092",
    "city_name": "白城",
  },
  {
    "city_code": "093",
    "city_name": "百色",
  },
  {
    "city_code": "094",
    "city_name": "蚌埠",
  },
  {
    "city_code": "095",
    "city_name": "宝鸡",
  },
  {
    "city_code": "096",
    "city_name": "保定",
  },
  {
    "city_code": "097",
    "city_name": "保山",
  },
  {
    "city_code": "098",
    "city_name": "毕节",
  },
  {
    "city_code": "099",
    "city_name": "滨州",
  },
  {
    "city_code": "100",
    "city_name": "沧州",
  },
  {
    "city_code": "101",
    "city_name": "昌吉",
  },
  {
    "city_code": "102",
    "city_name": "常德",
  },
  {
    "city_code": "103",
    "city_name": "巢湖",
  },
  {
    "city_code": "104",
    "city_name": "郴州",
  },
  {
    "city_code": "105",
    "city_name": "承德",
  },
  {
    "city_code": "106",
    "city_name": "池州",
  },
  {
    "city_code": "107",
    "city_name": "滁州",
  },
  {
    "city_code": "108",
    "city_name": "楚雄",
  },
  {
    "city_code": "109",
    "city_name": "达州",
  },
  {
    "city_code": "110",
    "city_name": "大理",
  },
  {
    "city_code": "111",
    "city_name": "大同",
  },
  {
    "city_code": "112",
    "city_name": "丹东",
  },
  {
    "city_code": "113",
    "city_name": "德阳",
  },
  {
    "city_code": "114",
    "city_name": "德州",
  },
  {
    "city_code": "115",
    "city_name": "东营",
  },
  {
    "city_code": "116",
    "city_name": "峨眉山",
  },
  {
    "city_code": "117",
    "city_name": "鄂州",
  },
  {
    "city_code": "118",
    "city_name": "恩施",
  },
  {
    "city_code": "119",
    "city_name": "抚州",
  },
  {
    "city_code": "120",
    "city_name": "阜新",
  },
  {
    "city_code": "121",
    "city_name": "阜阳",
  },
  {
    "city_code": "122",
    "city_name": "邯郸",
  },
  {
    "city_code": "123",
    "city_name": "汉中",
  },
  {
    "city_code": "124",
    "city_name": "菏泽",
  },
  {
    "city_code": "125",
    "city_name": "贺州",
  },
  {
    "city_code": "126",
    "city_name": "衡水",
  },
  {
    "city_code": "127",
    "city_name": "衡阳",
  },
  {
    "city_code": "128",
    "city_name": "红河州",
  },
  {
    "city_code": "129",
    "city_name": "淮安",
  },
  {
    "city_code": "130",
    "city_name": "淮北",
  },
  {
    "city_code": "131",
    "city_name": "淮南",
  },
  {
    "city_code": "132",
    "city_name": "黄冈",
  },
  {
    "city_code": "133",
    "city_name": "黄山",
  },
  {
    "city_code": "134",
    "city_name": "黄石",
  },
  {
    "city_code": "135",
    "city_name": "鸡西",
  },
  {
    "city_code": "136",
    "city_name": "吉首",
  },
  {
    "city_code": "137",
    "city_name": "济宁",
  },
  {
    "city_code": "138",
    "city_name": "佳木斯",
  },
  {
    "city_code": "139",
    "city_name": "焦作",
  },
  {
    "city_code": "140",
    "city_name": "锦州",
  },
  {
    "city_code": "141",
    "city_name": "晋中",
  },
  {
    "city_code": "142",
    "city_name": "荆门",
  },
  {
    "city_code": "143",
    "city_name": "荆州",
  },
  {
    "city_code": "144",
    "city_name": "景德镇",
  },
  {
    "city_code": "145",
    "city_name": "九江",
  },
  {
    "city_code": "146",
    "city_name": "开封",
  },
  {
    "city_code": "147",
    "city_name": "廊坊",
  },
  {
    "city_code": "148",
    "city_name": "丽江",
  },
  {
    "city_code": "149",
    "city_name": "连云港",
  },
  {
    "city_code": "150",
    "city_name": "辽阳",
  },
  {
    "city_code": "151",
    "city_name": "聊城",
  },
  {
    "city_code": "152",
    "city_name": "临汾",
  },
  {
    "city_code": "153",
    "city_name": "临沂",
  },
  {
    "city_code": "154",
    "city_name": "柳州",
  },
  {
    "city_code": "155",
    "city_name": "六安",
  },
  {
    "city_code": "156",
    "city_name": "龙岩",
  },
  {
    "city_code": "157",
    "city_name": "娄底",
  },
  {
    "city_code": "158",
    "city_name": "泸州",
  },
  {
    "city_code": "159",
    "city_name": "洛阳",
  },
  {
    "city_code": "160",
    "city_name": "吕梁",
  },
  {
    "city_code": "161",
    "city_name": "马鞍山",
  },
  {
    "city_code": "162",
    "city_name": "绵阳",
  },
  {
    "city_code": "163",
    "city_name": "牡丹江",
  },
  {
    "city_code": "164",
    "city_name": "南充",
  },
  {
    "city_code": "165",
    "city_name": "南平",
  },
  {
    "city_code": "166",
    "city_name": "南阳",
  },
  {
    "city_code": "167",
    "city_name": "内江",
  },
  {
    "city_code": "168",
    "city_name": "平顶山",
  },
  {
    "city_code": "169",
    "city_name": "萍乡",
  },
  {
    "city_code": "170",
    "city_name": "莆田",
  },
  {
    "city_code": "171",
    "city_name": "齐齐哈尔",
  },
  {
    "city_code": "172",
    "city_name": "钦州",
  },
  {
    "city_code": "173",
    "city_name": "琼海",
  },
  {
    "city_code": "174",
    "city_name": "衢州",
  },
  {
    "city_code": "175",
    "city_name": "曲靖",
  },
  {
    "city_code": "176",
    "city_name": "日照",
  },
  {
    "city_code": "177",
    "city_name": "三明",
  },
  {
    "city_code": "178",
    "city_name": "商丘",
  },
  {
    "city_code": "179",
    "city_name": "上饶",
  },
  {
    "city_code": "180",
    "city_name": "邵阳",
  },
  {
    "city_code": "181",
    "city_name": "石河子",
  },
  {
    "city_code": "182",
    "city_name": "四平",
  },
  {
    "city_code": "183",
    "city_name": "绥化",
  },
  {
    "city_code": "184",
    "city_name": "泰安",
  },
  {
    "city_code": "185",
    "city_name": "泰州",
  },
  {
    "city_code": "186",
    "city_name": "通化",
  },
  {
    "city_code": "187",
    "city_name": "通辽",
  },
  {
    "city_code": "188",
    "city_name": "铜陵",
  },
  {
    "city_code": "189",
    "city_name": "铜仁",
  },
  {
    "city_code": "190",
    "city_name": "芜湖",
  },
  {
    "city_code": "191",
    "city_name": "梧州",
  },
  {
    "city_code": "192",
    "city_name": "西宁",
  },
  {
    "city_code": "193",
    "city_name": "咸阳",
  },
  {
    "city_code": "194",
    "city_name": "湘潭",
  },
  {
    "city_code": "195",
    "city_name": "襄阳",
  },
  {
    "city_code": "196",
    "city_name": "孝感",
  },
  {
    "city_code": "197",
    "city_name": "忻州",
  },
  {
    "city_code": "198",
    "city_name": "新乡",
  },
  {
    "city_code": "199",
    "city_name": "新余",
  },
  {
    "city_code": "200",
    "city_name": "信阳",
  },
  {
    "city_code": "201",
    "city_name": "邢台",
  },
  {
    "city_code": "202",
    "city_name": "宿迁",
  },
  {
    "city_code": "203",
    "city_name": "宿州",
  },
  {
    "city_code": "204",
    "city_name": "许昌",
  },
  {
    "city_code": "205",
    "city_name": "雅安",
  },
  {
    "city_code": "206",
    "city_name": "延安",
  },
  {
    "city_code": "207",
    "city_name": "延边",
  },
  {
    "city_code": "208",
    "city_name": "盐城",
  },
  {
    "city_code": "209",
    "city_name": "宜春",
  },
  {
    "city_code": "210",
    "city_name": "益阳",
  },
  {
    "city_code": "211",
    "city_name": "永州",
  },
  {
    "city_code": "212",
    "city_name": "玉林",
  },
  {
    "city_code": "213",
    "city_name": "岳阳",
  },
  {
    "city_code": "214",
    "city_name": "运城",
  },
  {
    "city_code": "215",
    "city_name": "枣庄",
  },
  {
    "city_code": "216",
    "city_name": "张家界",
  },
  {
    "city_code": "217",
    "city_name": "漳州",
  },
  {
    "city_code": "218",
    "city_name": "长治",
  },
  {
    "city_code": "219",
    "city_name": "周口",
  },
  {
    "city_code": "220",
    "city_name": "自贡",
  },
  {
    "city_code": "221",
    "city_name": "北海",
  },
  {
    "city_code": "222",
    "city_name": "崇左",
  },
  {
    "city_code": "223",
    "city_name": "儋州",
  },
  {
    "city_code": "224",
    "city_name": "宁德",
  },
  {
    "city_code": "225",
    "city_name": "遂宁",
  },
  {
    "city_code": "226",
    "city_name": "文昌",
  },
  {
    "city_code": "227",
    "city_name": "玉溪",
  },
  {
    "city_code": "228",
    "city_name": "西昌",
  },
  {
    "city_code": "229",
    "city_name": "文山",
  },
  {
    "city_code": "230",
    "city_name": "宜州",
  },
  {
    "city_code": "231",
    "city_name": "宜宾",
  },
  {
    "city_code": "232",
    "city_name": "天水",
  },
  {
    "city_code": "233",
    "city_name": "攀枝花",
  },
  {
    "city_code": "234",
    "city_name": "巴中",
  },
  {
    "city_code": "235",
    "city_name": "广安",
  },
  {
    "city_code": "236",
    "city_name": "绵竹",
  },
  {
    "city_code": "237",
    "city_name": "江油",
  },
  {
    "city_code": "238",
    "city_name": "广元",
  },
  {
    "city_code": "239",
    "city_name": "眉山",
  },
  {
    "city_code": "240",
    "city_name": "渭南",
  },
  {
    "city_code": "241",
    "city_name": "泰兴",
  },
  {
    "city_code": "242",
    "city_name": "辽源",
  },
  {
    "city_code": "243",
    "city_name": "舟山",
  },
  {
    "city_code": "244",
    "city_name": "怀化",
  },
  {
    "city_code": "245",
    "city_name": "亳州",
  },
  {
    "city_code": "246",
    "city_name": "宣城",
  },
  {
    "city_code": "247",
    "city_name": "榆林",
  },
  {
    "city_code": "249",
    "city_name": "晋南",
  },
  {
    "city_code": "250",
    "city_name": "黄岩",
  },
  {
    "city_code": "251",
    "city_name": "晋北",
  },
  {
    "city_code": "252",
    "city_name": "阿拉尔",
  },
  {
    "city_code": "266",
    "city_name": "朔州",
  },
  {
    "city_code": "264",
    "city_name": "盘锦",
  },
  {
    "city_code": "276",
    "city_name": "涿州",
  },
  {
    "city_code": "271",
    "city_name": "赤峰",
  },
  {
    "city_code": "274",
    "city_name": "呼伦贝尔",
  },
  {
    "city_code": "272",
    "city_name": "松原",
  },
  {
    "city_code": "277",
    "city_name": "鹤壁",
  },
  {
    "city_code": "278",
    "city_name": "济源",
  },
  {
    "city_code": "279",
    "city_name": "濮阳",
  },
  {
    "city_code": "280",
    "city_name": "漯河",
  },
  {
    "city_code": "281",
    "city_name": "驻马店",
  },
  {
    "city_code": "282",
    "city_name": "新密",
  },
  {
    "city_code": "283",
    "city_name": "巩义",
  },
  {
    "city_code": "265",
    "city_name": "本溪",
  },
  {
    "city_code": "273",
    "city_name": "白山",
  },
  {
    "city_code": "270",
    "city_name": "铁岭",
  },
  {
    "city_code": "267",
    "city_name": "乌兰察布",
  },
  {
    "city_code": "268",
    "city_name": "鄂尔多斯",
  },
  {
    "city_code": "269",
    "city_name": "乌海",
  },
  {
    "city_code": "284",
    "city_name": "三门峡",
  },
  {
    "city_code": "262",
    "city_name": "普洱",
  },
  {
    "city_code": "51",
    "city_name": "张掖",
  },
  {
    "city_code": "52",
    "city_name": "庆阳",
  },
  {
    "city_code": "275",
    "city_name": "吴忠",
  },
  {
    "city_code": "285",
    "city_name": "黄骅",
  },
  {
    "city_code": "253",
    "city_name": "葫芦岛",
  },
  {
    "city_code": "254",
    "city_name": "凯里",
  },
  {
    "city_code": "255",
    "city_name": "安顺",
  },
  {
    "city_code": "256",
    "city_name": "儋州市",
  },
  {
    "city_code": "257",
    "city_name": "红河",
  },
  {
    "city_code": "258",
    "city_name": "伊宁市",
  },
  {
    "city_code": "259",
    "city_name": "罗定",
  },
  {
    "city_code": "260",
    "city_name": "阳江",
  },
  {
    "city_code": "261",
    "city_name": "伊宁",
  },
  {
    "city_code": "263",
    "city_name": "营口",
  },
  {
    "city_code": "286",
    "city_name": "莱芜",
  },
  {
    "city_code": "287",
    "city_name": "昆山",
  },
  {
    "city_code": "288",
    "city_name": "太仓",
  }
];

export default cityMap;
