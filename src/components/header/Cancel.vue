<template>
    <div class="Cancel" @click="leftType">
        {{cancelname}}
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'go-left',
        props:{
            cancelname:String,
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
