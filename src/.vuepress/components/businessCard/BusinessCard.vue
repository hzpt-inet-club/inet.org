<script setup lang="ts">
import {teams} from './businessData'

let props = defineProps({
  keyName:String
})
let datas = teams.get(props.keyName)
</script>

<template>
  <h1>{{props.keyName}}</h1>
  <h2>人员组成</h2>
  <div class="alone">
    <div v-for="(data,key) in datas" v-bind:key="key">
      <div class="card">
        <div class="photo"><img :src="`https://github.com/${data.githubName}.png`" alt=""></div>
        <h1>{{data.name}}</h1>
        <h2>{{data.jobTitle}}</h2>
        <p v-html="data.introduce"></p>
        <a :href="`https://github.com/${data.githubName}`">了解更多</a>
      </div>
    </div>
  </div>
</template>

<style>
*{
    /* 初始化 */
    margin: 0;
    padding: 0;
}
.alone{
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平+垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    /* 渐变背景 */
    /* background: linear-gradient(200deg,#517fa4,#243949); */
}
.card{
    /* 相对定位 */
    position: relative;
    width: 300px;
    height: 450px;
    margin: 20px;
    background-color: #758a99;
    border-radius: 20px;
    /* 溢出隐藏 */
    overflow: hidden;
    /* 弹性布局 */
    display: flex;
    /* 元素纵向排列 */
    flex-direction: column;
    /* 居中 */
    align-items: center;
    color: #fff;
    /* 阴影 */
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
    /* 不让其被挤压 */
    flex-shrink: 0;
}
.card .photo img{
    width: 100%;
    height: 100%;
    /* 保持原有尺寸比例，裁切长边 */
    object-fit: cover;
}

.card .photo{
    /* 默认大图 */
    /* 绝对定位 */
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0%;
    overflow: hidden;
    /* 动画过渡 */
    transition: 0.5s;
}
/* 鼠标移入变小图 */
.card:hover .photo{
    top: 30px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
}
/* 这里加个黑色到透明的渐变背景，可以更好的看清楚名字 */
.card .photo::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,transparent 50%,#222);
}
.card h1{
    position: absolute;
    top: 370px;
    transition: 0.5s;
}
.card:hover h1{
    top: 170px;
}
.card h2{
    margin-top: 220px;
    width: 80%;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
}
.card p{
    width: 90%;
    text-indent: 32px;
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 30px;
}
.card a{
    font-size: 14px;
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    border: 1px solid rgba(255,255,255,0.5);
    padding: 8px 32px;
    border-radius: 8px;
}
.card a:hover{
    color: #fff;
    background-color: rgba(255,255,255,0.2);
}
</style>
