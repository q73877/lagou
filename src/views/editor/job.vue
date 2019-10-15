<template>
  <!-- 职位页面 /job -->
  <div class="page-job">
    <div id="content">
      <div class="info">
        <span class="text up">
            <em class="left"></em>
            想找什么职位？
          <em class="right"></em>
        </span>
      </div>
      <div id="rinputer">
        <div class="rinputer">
          <input type="text" class="inputer" placeholder="输入你想定制的职位">
          <span class="button">OK</span>
        </div>
        <ul class="predata">
          <li class="item">产品经理</li>
          <li class="item">Java</li>
          <li class="item">运营</li>
          <li class="item">Android</li>
          <li class="item">PHP</li>
          <li class="item">UI</li>
          <li class="item">IOS</li>
          <li class="item">编辑</li>
          <li class="item">BD</li>
        </ul>
      </div>
      
    </div>
  </div>

</template>
<style lang="scss">
  .page-job{
    .info{
      background:url(https://www.lgstatic.com/images/mobile/asset/common/img/back-info.png) no-repeat;
      background-size: 320px 125px;
      height:125px;
      color:#00b38a;
      font-size: 20px;
      text-align: center;
      border-bottom: 1px solid #e8e8e8; 
      .text{
        display: inline-block;
        position: relative;
        height:25px;
        top:50px;
      }     
      .left,.right{
        display: inline-block;
        width:13px;
        height:10.5px;
        position: absolute;
      }
      .left{
        left:-20px;
        top:-2px;
        background:url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png) no-repeat -102.5px -4px;
        background-size: 250px 250px;
      }
      .right{
        left:-20px;
        top:-2px;
        background:url(https://www.lgstatic.com/images/mobile/asset/common/img/icon.png) no-repeat -119.5px -4px;
        background-size: 250px 250px;
      }      
    }
    .rinputer{
      border-top: none;
      height:50px;
      line-height: 50px;
      border: 1px solid #e8e8e8;
      position: relative;
      margin-right: 60px;
      padding-right: 45px;
    }
    .inputer,.button{
      display: block;
      height:100%;
    }
    .inputer{
      display: block;
      margin-left: 23px;
      font-size: 16px;
      width:100%;
    }
    .button{
      position: absolute;
      top:0;
      right:-61px;
      width:60px;
      border-left: 1px solid #e8e8e8;
      text-align: center;
      font-size: 16px;
      color:#c2cfcc;
      border-bottom: 1px solid #e8e8e8;
    }
    .predata{
      margin-left: 15px;
      .item{
          height:44px;
          line-height: 44px;
          color:#666;
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