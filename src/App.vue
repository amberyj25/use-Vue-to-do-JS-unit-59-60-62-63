<template>
<div class="wrap">
<h2>for 迴圈</h2>
<router-link :to="{name:'cross'}">(一)乘法</router-link>
<router-link :to="{name:'array'}">(二)for迴圈與陣列</router-link>
<router-link :to="{name:'ifcheck'}">(三)for迴圈與判斷</router-link>
<router-link :to="{name:'addtogether'}">(四)for迴圈的加總</router-link>
<router-link :to="{name:'ifcheckall'}">(五)for迴圈的判斷+加扣除</router-link>
<router-view></router-view>
</div>
</template>
<style>
.wrap{
    width: 1000px;
    margin: auto;
}
</style>