<template>
<div>
<h2>(二)for迴圈與陣列</h2>
<ul>
    <li v-for="item in array">{{item}}</li>
</ul>
</div>
</template>
<script>
export default {
    data(){
        return {
            array:["賈伯斯","卡斯柏","特斯拉","卡司特"],
        }
    }
}
</script>