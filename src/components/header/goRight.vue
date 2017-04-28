<template>
    <div class="goRight" @click="rightType">
        {{rightname}}
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'go-right',
        props:{
            rightname:String,
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
