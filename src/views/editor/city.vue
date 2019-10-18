<template>
  <div class="page-city">
    <div id="content">
      <div class="info">
        <span class="text">
          <em class="left"></em>
          告诉我你期望的工作地点?
          <em class="right"></em>
        </span>
      </div>
      <div class="city">
        <div class="cities-header">热门城市</div>
        <table class="cities-list">
          <tr class="cities-list-item">
            <td class="cities-item" @click="job('北京')">北京</td>
            <td class="cities-item" @click="job('上海')">上海</td>
            <td class="cities-item" @click="job('广州')">广州</td>
          </tr>
          <tr>
            <td class="cities-item" @click="job('深圳')">深圳</td>
            <td class="cities-item" @click="job('武汉')">武汉</td>
            <td class="cities-item" @click="job('成都')">成都</td>
          </tr>
        </table>

        <div v-for="(a,b) in citycity">
          <div class="cities-header">{{a.nameStr}}</div>
          <table class="cities-list" v-for="(c,d) in a.cityList" v-if="d%3==2">
            <tr class="cities-list-item">
              <td class="cities-item">{{a.cityList[d-2]}}</td>
              <td class="cities-item">{{a.cityList[d-1]}}</td>
              <td class="cities-item">{{a.cityList[d]}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-city {
  .info {
    background: url(https://www.lgstatic.com/images/mobile/asset/common/img/back-info.png)
      no-repeat;
    background-size: 320px 125px;
    height: 125px;
    color: #00b38a;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
    .text {
      display: inline-block;
      position: relative;
      height: 25px;
      top: 50px;
    }
    .left,
    .right {
      display: inline-block;
      width: 13px;
      height: 10.5px;
      position: absolute;
    }
    .left {
      left: -20px;
      top: -2px;
      background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
        no-repeat -102.5px -4px;
      background-size: 250px 250px;
    }
    .right {
      right: -14px;
      top: 15px;
      background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
        no-repeat -119.5px -4px;
      background-size: 250px 250px;
    }
  }
  .city {
    .cities-header {
      border-bottom: 1px solid #e8e8e8;
      height: 25px;
      line-height: 25px;
      padding: 0 15px;
      font-size: 13px;
      color: #888;
    }
    .cities-list {
      width: 100%;
      border-bottom: 1px solid #e8e8e8;
    }
    .cities-item {
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 16px;
      color: #333;
      min-width: 100px;
    }
  }
}
</style>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      citycity: [
        {
          cityList: [
            "蚌埠",
            "保定",
            "北京",
            "包头",
            "长春",
            "成都",
            "赤峰",
            "重庆",
            "长沙",
            "常州",
            "沧州",
            "东莞",
            "大连",
            "大庆",
            "大同",
            "德阳",
            "德州",
            "达州",
            "鄂州",
            "佛山",
            "阜阳",
            "福州",
            "抚州"
          ],
          name: "",
          nameStr: "ABCDEF"
        },
        {
          cityList: [
            "桂林",
            "贵阳",
            "广州",
            "赣州",
            "淮安",
            "邯郸",
            "哈尔滨",
            "合肥",
            "呼和浩特",
            "海口",
            "黄石",
            "衡水",
            "河源",
            "衡阳",
            "杭州",
            "惠州",
            "湖州",
            "菏泽",
            "吉安",
            "晋城",
            "金华",
            "吉林",
            "江门",
            "济南",
            "济宁",
            "嘉兴",
            "晋中",
            "荆州",
            "焦作"
          ],
          name: "",
          nameStr: "GHIJ"
        },
        {
          cityList: [
            "昆明",
            "六安",
            "聊城",
            "廊坊",
            "临汾",
            "拉萨",
            "乐山",
            "洛阳",
            "临沂",
            "连云港",
            "兰州",
            "柳州",
            "马鞍山",
            "茂名",
            "眉山",
            "绵阳",
            "梅州",
            "宁波",
            "南昌",
            "南充",
            "南京",
            "南宁",
            "南通",
            "南阳"
          ],
          name: "",
          nameStr: "KLMN"
        },
        {
          cityList: [
            "平顶山",
            "莆田",
            "萍乡",
            "濮阳",
            "青岛",
            "秦皇岛",
            "齐齐哈尔",
            "清远",
            "泉州",
            "衢州"
          ],
          name: "",
          nameStr: "OPQR"
        },
        {
          cityList: [
            "韶关",
            "上海",
            "石家庄",
            "宿迁",
            "商丘",
            "上饶",
            "汕头",
            "绍兴",
            "沈阳",
            "三亚",
            "深圳",
            "苏州",
            "深圳市",
            "泰安",
            "天津",
            "唐山",
            "太原",
            "台州"
          ],
          name: "",
          nameStr: "STUV"
        },
        {
          cityList: [
            "潍坊",
            "武汉",
            "芜湖",
            "威海",
            "乌鲁木齐",
            "无锡",
            "温州",
            "西安",
            "许昌",
            "宣城",
            "孝感",
            "香港特别行政区",
            "厦门",
            "西宁",
            "邢台",
            "新乡",
            "咸阳",
            "信阳",
            "徐州",
            "银川",
            "盐城",
            "宜昌",
            "宜春",
            "阳江",
            "榆林",
            "烟台",
            "岳阳",
            "扬州",
            "淄博",
            "珠海",
            "镇江",
            "湛江",
            "张家口",
            "周口",
            "肇庆",
            "中山",
            "遵义",
            "郑州",
            "株洲",
            "漳州",
            "枣庄"
          ],
          name: "",
          nameStr: "WXYZ"
        }
      ]
    };
  },
  computed: {
    ...mapState("film", ["jobSearch"])
  },
  methods: {
    ...mapActions("film", ["setJob"]),
    job(aa) {
      let user = this.jobSearch;
      if (this.jobSearch.length > 0) {
        user[0].city = aa;
      } else {
        user = [{ city: aa }];
      }
      this.setJob(user);
      this.$router.push("/editor/position");
    }
  }
};
</script>
