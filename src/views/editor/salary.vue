<template>
  <div class="page-salary">
    <div id="content">
      <div class="info">
        <span class="text up">
          <em class="left"></em>
          你值得更好的生活，
        </span>
        <br />
        <span class="text down">
          告诉我你期望的薪水。
          <em class="right"></em>
        </span>
      </div>

      <ul class="list">
        <li class="activeable item" @click="job('没有要求')">没有要求</li>
        <li class="activeable item" @click="job('2k以下')">2k以下</li>
        <li class="activeable item" @click="job('2k-5k')">2k-5k</li>
        <li class="activeable item" @click="job('5k-10k')">5k-10k</li>
        <li class="activeable item" @click="job('10k-15k')">10k-15k</li>
        <li class="activeable item" @click="job('5k-25k')">15k-25k</li>
        <li class="activeable item" @click="job('25k-50k')">25k-50k</li>
        <li class="activeable item" @click="job('50k以上')">50k以上</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.page-salary {
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
    .up {
      top: 35px;
      left: -22px;
    }
    .down {
      top: 40xp;
      left: 23px;
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
  .list {
    margin-left: 15px;
    .item {
      height: 44px;
      line-height: 44px;
      color: #666;
      font-size: 15px;
      border-bottom: 1px solid #e8e8e8;
      padding: 0 15px 0 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("film", ["jobSearch"])
  },
  methods: {
    ...mapActions("film", ["setJob"]),
    job(aa) {
      let user = this.jobSearch;
      if (this.jobSearch.length > 0) {
        user[0].salary = aa;
      } else {
        user = [{ salary: aa }];
      }
      this.setJob(user);
      this.$router.push("/editor/position");
    }
  }
};
</script>
