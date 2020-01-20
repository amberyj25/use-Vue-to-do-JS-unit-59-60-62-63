<template>
<div>
<h2>for 迴圈</h2>
<router-link :to="{name:'cross'}">(一)乘法</router-link>
<router-link :to="{name:'array'}">(二)for迴圈與陣列</router-link>
<router-link :to="{name:'ifcheck'}">(三)for迴圈與判斷</router-link>
<router-link :to="{name:'addtogether'}">(四)for迴圈的加總</router-link>
<router-view></router-view>
</div>
</template>