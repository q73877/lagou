<template>
  <div class="page-film">
    <!-- 一级路由页面，详情页面 -->
    <header id="header">
      职位详情
      <div class="left">
        <span class="corner" @click="goBack"></span>
      </div>
      <div class="right">
        <span class="corner"></span>
      </div>
    </header>

    <div id="content">
      <div class="postitle">
        <h2 class="title">{{ filmobj.job }}</h2>
        <div class="collicon activeable">
          <span class="icon notcoll"></span>
          <span class="text">未收藏</span>
        </div>
      </div>

      <div class="detail">
        <div class="items">
          <span class="item salary">
            <em class="icon"></em>
            <span class="text">{{ filmobj.wage }}</span>
          </span>

          <span class="item workaddress">
            <em class="icon"></em>
            <span class="text">{{ filmobj.address }}</span>
          </span>

          <span class="item jobnature">
            <em class="icon"></em>
            <span class="text">全职</span>
          </span>

          <span class="item workyear">
            <em class="icon"></em>
            <span class="text">{{ filmobj.yearjob }}</span>
          </span>

          <span class="item education">
            <em class="icon"></em>
            <span class="text">{{ filmobj.education }}</span>
          </span>
        </div>
        <!-- 诱惑 -->
        <div class="temptation">{{ filmobj.ptt }}</div>
      </div>

      <div
        class="company activeable"
        data-lg-tj-id="19v6"
        data-lg-tj-no="0030"
        data-lg-tj-cid="410579"
      >
        <img :src="filmobj.img" alt class="logo" />
        <div class="desc">
          <div class="dleft">
            <h2 class="title">{{ filmobj.title }}</h2>
            <p class="info">{{ filmobj.cp }}</p>
          </div>
        </div>
      </div>

      <div class="positiondesc">
        <header class="header">职位描述</header>
        <div class="content">
          <p>岗位职责：</p>
          <p>
            1、具备与客户深度沟通、协助编写规划等战略能力
            <br />2、重点参与公司产品和项目的整体发展战略与产品的规划
            <br />3、提出产品方向，论证、制定产品规划及可行性方案
            <br />4、深入挖掘并围绕客户需求、运营需求、潜在需求等，汇总提炼并形成阶段性产品目标
            <br />5、独立输出产品设计原型、需求文档并组织评审
            <br />6、与研发、运营团队紧密协作，推进产品设计、研发、测试及上线全流程，把控产品质量，达成产品目标
            <br />7、完成需求分析，根据产品需求，编写软件需求规格说明书和必要的demo，提供功能开发使用
            <br />8、配合有关人员跟进项目，处理好后续的页面调整修改需求
            <br />9、关注和研究行业热点，为公司产品战略决策提供建议及改进意见
          </p>
          <p>任职条件：</p>
          <p>
            1、具备产品设计和产品管理经验，制定完成产品规划，把握和控制其优先级，拆解阶段目标并实施
            <br />2、对新事物、新产品敏感，喜欢琢磨、钻研新的软件、产品及服务
            <br />3、熟悉软件工程的理论，掌握软件需求获取与分析技术和管理方法
            <br />4、有较强的文档编写能力，较强的逻辑分析能力，良好的交流能力，善于归纳整理，准确把握客户需求，能承担一定的工作压力
            <br />5、熟练常用的建模工具和快速原型设计工具，如Rose，Together，Visio，Axure RP等
            <br />6、有政府等大型项目管理经验者优先考虑，有资产管理软件开发经验者优先
          </p>
          <p>
            有以下经验者优先：
            <br />&nbsp;&nbsp;&nbsp; 省级或市级互联网+政务服务（电子证照、数据共享、事项目录、电子监察、行政审批、网上办事大厅、统一受理平台等）项目及相关系统建设经验
          </p>
        </div>
      </div>

      <div class="positioneval">
        <div class="eval-title">
          面试评价
          <span id="total">
            (
            <span></span>)
          </span>
        </div>
        <ul class="list"></ul>
        <a class="eval-all" href="/user/expsList_6460970.html"></a>
      </div>

      <div class="fix_btn_group">
        <div
          class="deliver deliver_resume rows_bar"
          data-lg-tj-id="19v6"
          data-lg-tj-no="0020"
          data-lg-tj-cid="6460970"
          @click="pttfn"
        >投递简历</div>
          class="deliver deliver_resume rows_bar">投递简历</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.page-film {
  #header {
    height: 45px;
    line-height: 45px;
    background-color: #00b38a;
    color: #fff;
    font-size: 18px;
    text-align: center;
    position: relative;
    .left {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 40px;
      .corner {
        width: 9px;
        height: 20px;
        margin: 13px auto 0 auto;
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon2.png)
          no-repeat -1.5px -20.5px;
        background-size: 250px 250px;
        display: inline-block;
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 40px;
      .corner {
        width: 17px;
        height: 20px;
        margin: 13px auto 0 auto;
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon2.png)
          no-repeat -60px -46.5px;
        background-size: 250px 250px;
        display: inline-block;
      }
    }
  }

  #content {
    padding-bottom: 68px;
    .postitle {
      height: 48px;
      line-height: 48px;
      padding: 0 15px;
      border-bottom: 1px solid #e8e8e8;
      .title {
        color: #333;
        font-size: 18px;
        max-width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        float: left;
      }
      .collicon {
        float: right;
        width: 39px;
        position: relative;
        text-align: center;
        padding: 6px 10px 0 10px;
        height: 43px;
      }
      .notcoll {
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -170px -41px;
        background-size: 250px 250px;
      }
      .icon {
        display: block;
        width: 15px;
        height: 15px;
        margin: 0 auto;
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -150px -41px;
        background-size: 250px 250px;
      }
      .text {
        display: block;
        color: #888;
        font-size: 11px;
        line-height: 30px;
      }
    }
    /* .postitle:after{
            content:".";
            display: block;
            height:0;
            clear:both;
            visibility: hidden;
        } */
    .detail {
      border-bottom: 1px solid #e8e8e8;
      min-height: 10px;
      padding: 15px;
      .items {
        display: block;
        height: 53px;
      }
      .item {
        float: left;
        color: #333;
        font-size: 14px;
        position: relative;
        width: 33.33%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 11px;
      }
      .item:nth-child(3n-1) {
        text-align: center;
      }
      .item:nth-child(3n) {
        text-align: right;
      }
      .text {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        top: -1px;
      }
      .icon {
        display: inline-block;
        height: 13px;
        width: 13px;
        vertical-align: middle;
      }
      .salary .icon {
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -66px -48px;
        background-size: 250px 250px;
      }
      .workaddress .icon {
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -79px -49px;
        background-size: 250px 250px;
      }
      .jobnature .icon {
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -93px -49px;
        background-size: 250px 250px;
      }
      .workyear .icon {
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -110.5px -49.5px;
        background-size: 250px 250px;
      }
      .education .icon {
        background: url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -127.5px -49px;
        background-size: 250px 250px;
      }
      .temptation {
        color: #888;
        word-break: break-all;
        font-size: 13px;
      }
    }
    .company {
      border-bottom: 1px solid #e8e8e8;
      min-height: 10px;
      padding: 15px;
      height: 64.4px;
      .logo {
        width: 60px;
        height: 60px;
        float: left;
      }
      .desc {
        margin-left: 70px;
        min-height: 10px;
      }
      .dleft {
        float: left;
        min-height: 10px;
        min-width: 10px;
        max-width: 80%;
        .title {
          color: #00b38a;
          font-size: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 5px;
          font-weight: 600;
        }
        .info {
          color: #888;
          font-size: 14px;
        }
      }
    }
    .positiondesc {
      min-height: 10px;
      .header {
        height: 36px;
        line-height: 36px;
        padding-left: 15px;
        color: #00b38a;
        font-size: 14px;
        background-color: #d2f9f0;
      }
      .content {
        word-break: break-all;
        padding: 15px;
        color: #555;
        font-size: 12px;
        line-height: 22px;
      }
    }
    .positioneval {
      .eval-title {
        height: 36px;
        line-height: 36px;
        padding-left: 15px;
        color: #00b38a;
        font-size: 14px;
        background-color: #d2f9f0;
      }
      .list-item {
        padding: 15px;
        padding-bottom: 14px;
        border-bottom: none;
      }
      .eval-all {
        display: block;
        color: #00b38a;
        font-size: 15px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        margin-top: 12px;
      }
    }
    .fix_btn_group {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 1;
      height: 44px;
      width: 92%;
      padding: 12px 4%;
      line-height: 44px;
      background-color: rgba(255, 255, 255, 0.8);
    }
    .deliver {
      width: 100%;
      background-color: #00b38a;
      color: #fff;
      font-size: 16px;
      text-align: center;
      border-radius: 3px;
    }
  }
}
</style>


<script>
import { mapState, mapActions } from "vuex";
import { Toast } from 'vant'
export default {
  //修改在浏览器-vue 上显示的文件名 index -- File
  name: "Film",
  data() {
    return {
      id: this.$route.query.id,
      show:false
      //list: ""
    };
  },
  computed: {
    ...mapState("film", ["filmList"]),
    filmobj() {

      let that = this;
      let tmp = this.filmList.find(item => {
        // console.log('1aa')
        return item.id === that.id;
      });
     Toast.clear()
      return tmp;
    }
  },
  methods: {
    // ...mapActions('film',['getFilmList']),
    goBack(){
      this.$router.back()
    },
    pttfn() {

    },

  },
  created() {
     Toast.loading({
        mask: true,
        duration: 0, // 不让他自动消失
        message: '加载中...'
      })
    // this.getFilmList()
    //this.id = this.$route.query.id;
    //this.list = this.filmList;
    //console.log(this.id);
    //console.log(this.filmList);
    //console.log(this.list);
  }
};
</script>