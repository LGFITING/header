<template>
    <div class="lg-button" @click="clickType">
        {{buttonname}}
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'buttonname',
        props:{
            buttonname:String,
            lgevent:String
        },
        methods:{
           clickType(){
             let vm =this;
             let type = this.lgevent
             vm.$emit('lgevent',type)
           }
        }
    }
</script>
<style scoped>

</style>
