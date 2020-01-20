<template>
<div>
<input type="button" value="button" @click="add">
<p>總額：{{number}}</p>
</div>
</template>
<script>
export default {
    data(){
        return{
            number:0
        }
    },
    methods:{
        add(){
            for(var i =0;i<5;i++){
                this.number +=i
            }
        }
    }
}
</script>
