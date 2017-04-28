<template>
    <div class="goBack" @click="leftType">
        {{leftname}}
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'go-left',
        props:{
            leftname:String,
            lgevent:String
        },
        methods:{
            leftType(){
                let type = this.lgevent
                    this.$emit('lgevent',type)
            }
        }
    }
</script>
