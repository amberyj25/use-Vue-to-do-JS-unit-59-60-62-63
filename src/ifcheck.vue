<template>
<div>
<h2>(三)for迴圈的判斷</h2>
<ul>
<li v-for="item in farm" v-if="item.dogs>30">{{item.dogs}}</li>
</ul>
</div>
</template>
<script>
export default {
    data(){
        return {
            farm:[
                    {
                        farmer:"bob",
                        dogs:20
                    },{
                        farmer:"dodo",
                        dogs:50
                    }
                ]
        }
    }
}
</script>