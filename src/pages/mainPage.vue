<template>
    <div class="mainPage" style="height:100%">
        <p><strong>前端踩过的那些坑</strong></p>
        <a href="#/iosErrorPage"><strong>ios系统兼容性问题演示</strong></a><br>
        <a href="#/layOutErrorPage"><strong>布局问题演示</strong></a><br>
        <a href="#/javascriptAsyncErrorPage"><strong>javascript异步执行问题演示</strong></a><br>
    </div>
</template>
<script>
export default {
    name:'mainPage'
}
</script>
<style>
.mainPage{
    background: url('../../static/pic/moon8_mandel_big.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
}
p{
    color: #fc8801;
    font-family: cursive;
    font-size: 88px;
    margin: 0;
    padding-top: 60px;
    margin-bottom: 30px;
}
a{
    display: inline-block;
    margin-top: 8px;
    color: black;
    cursor: hand;
    font-size: 26px;
    text-decoration: none;
    font-family: monospace;
}
a:hover{
    color: rgb(50, 107, 192);
    cursor: hand;
    font-size: 30px;
    text-decoration: none;
    font-family: auto;
}
</style>

