<template>
  <div id="app">
      <lg-header :title=theme fixed>
        <lg-button slot="left"
             :buttonname=leftbutton
              @lgevent="lgevent"
              :lgevent=leftbutton left :class="{active:isActive}">
        </lg-button>
        <lg-button slot="right"
              :buttonname=rightbutton
              @lgevent="lgevent"
              :lgevent=rightbutton right :class="{active:isActive}">
        </lg-button>
      </lg-header>
          <div class="" style="margin-top:50px;text-align:center;">
            <p @click="choose" v-text="chooseList"></p>
          </div>
  </div>

  <router-view></router-view>
</template>

<script>
import lgHeader from './components/Header.vue'
import lgButton from './components/Mybutton.vue'
export default {
  replace: false,
  data () {
    return {
        oprate:true,
        chooseList:'点击选择列表',
        leftbutton:'',
        rightbutton:'',
        theme:'自定义主题',
        isActive:false
    }
},
ready(){
    let vm = this;
    if(vm.oprate==true){
        vm.leftbutton = '返回'
        vm.rightbutton = '发送'
    }
},
methods:{
    lgevent(type){
        let vm = this;
        if(type=="取消"){
          vm.leftbutton = '返回'
          vm.rightbutton = '发送'
          vm.isActive = false
          console.log(type);
        }
        if(type=="返回"){
            console.log(type);
        }
        if(type=="发送"){
            console.log(type);
        }
        if(type=="完成"){
          vm.leftbutton = '返回'
          vm.rightbutton = '发送'
          console.log(type);
          vm.isActive = false
        }
},
choose(){
        let vm = this;
        vm.leftbutton = '取消'
        vm.rightbutton = '完成'
        vm.isActive = true
}
},
components:{
    lgHeader,
    lgButton
}
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
.active{
  color:blue;
  font-size:bold;
}
</style>
