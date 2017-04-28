<template>
    <div class="Complete" @click="rightType">
        {{complete}}
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'go-left',
        props:{
            complete:String,
            lgevent:String
        },
        methods:{
            rightType(){
                let type = this.lgevent
                    this.$emit('lgevent',type)
            }
        }
    }
</script>
