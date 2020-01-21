<template>
<div>
<h2>(五)for迴圈的判斷+加扣除</h2>
<ul>
    <li v-for="(item,index) in list" v-if="item.horse >10">第{{index+1}}個{{item.farmer}}農場有{{item.horse}}批馬 ; 買走15批馬後剩下{{item.horse-15}}批馬</li>
</ul>
</div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {
                    farmer:"bob",
                    horse:20,
                },{
                    farmer:"dodo",
                    horse:50,
                },{
                    farmer:"lulu",
                    horse:100,
                },{
                    farmer:"wuwu",
                    horse:200,
                }
            ]
        }
    }
}
</script>
<style scoped>
ul{
   list-style: none; 
}
</style>