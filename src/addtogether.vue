<template>
<div class="button">
<button @click="add">按下算總額,每次都增加10</button>
<p>總額：{{number}}</p>
<button type="button" @click ="counter" >+2</button>
<p>{{number2}}</p>
</div>
</template>
<script>
export default {
    data(){
        return{
            number:0,
            number2:0,
        }
    },
    methods:{
        add(){
            for(var i =0;i<5;i++){
                this.number +=i
            }
        },
        counter(){
            this.number2 +=2
        }
    }
}
</script>
<style scoped>
</style>
