<template>
  <!-- 公司规模 /stages -->
  <div class="page-stages">
    <div id="content">
      <div class="info">
        <span class="text up">
            <em class="left"></em>
            对公司的规模可有要求？
            <em class="right"></em>
        </span>
      </div>
      
      <ul class="list">
        <li class="activeable item">没有要求</li>
        <li class="activeable item">
          初创型
          <em>(天使轮及未投资)</em>
        </li>
        <li class="activeable item">
          成长型
          <em>(A轮或B轮融资)</em>
        </li>
        <li class="activeable item">
          成熟型
          <em>(C轮融资以上但未上市)</em>
        </li>
        <li class="activeable item">上市公司</li>
      </ul>
    </div>
  </div>


</template>
<style lang="scss">
  .page-stages{
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
    .list{
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
      .desc{
        font-style: normal;
        color:#cbcbcb;        
      }
    }
  }
</style>