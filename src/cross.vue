<template>
<div>
    <h2>(一)for迴圈-1的乘法</h2>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
</div>
</template>
<script>
export default {
    data(){
        return {
            list:["1*1=1","1*2=2","1*3=3","1*4=4"],
        }
    }
}
</script>