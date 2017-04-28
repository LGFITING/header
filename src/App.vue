<template>
  <!-- <div id="app">
      <lg-header title="主题" fixed>
          <go-left slot='left'
                   :leftname=leftname
                   @lgevent="lgevent"
                    :lgevent=leftname
                    v-show="left"
                    v-link="'/Bar'">
          </go-left>
           <go-cancel slot='cancel'
                    :cancelname=cancelname
                    @lgevent="lgevent"
                     :lgevent=cancelname
                    v-show="cancel">
            </go-cancel>
          <go-right slot='right'
                    :rightname=rightname
                    v-show="right"
                    @lgevent="lgevent"
                    :lgevent= rightname>
         </go-right>
          <go-complete slot='complete'
                   :complete=complete
                    v-show="finish"
                    @lgevent="lgevent"
                    :lgevent=complete>
         </go-complete>
      </lg-header>
          <div class="" style="margin-top:50px;text-align:center;">
            <p @click="choose" v-text="chooseList"></p>
          </div>
  </div> -->

  <router-view></router-view>
</template>

<script>
import lgHeader from './components/Header.vue'
import goLeft from './components/header/goLeft.vue'
import goRight from './components/header/goRight.vue'
import goCancel from './components/header/Cancel.vue'
import goComplete from './components/header/Complete.vue'

export default {
  replace: false,
  data () {
    return {
        oprate:false,
        leftname:'返回',
        rightname:'发送',
        complete:'完成',
        cancelname:'取消',
        finish:false,
        right:true,
        chooseList:'点击选择列表',
        left:true,
        cancel:false
    }
},
ready(){
    let vm = this;
    if(vm.oprate==true){
        vm.leftname = '取消'
    }
    else{
        vm.leftname = '返回'
    }
},
methods:{
    lgevent(type){
        let vm = this;
        if(type=="取消"){
            console.log(type);
            vm.left = true;
            vm.cancel = false;
            vm.right = true;
            vm.finish = false;
        }
        if(type=="返回"){
            console.log(type);
        }
        if(type=="完成"){
            console.log(type);
            vm.left = true;
            vm.cancel = false;
            vm.right = true;
            vm.finish = false;
        }
        if(type=="发送"){
            console.log(type);
        }
},
choose(){
        let vm = this;
        vm.left = false;
        vm.cancel = true;
        vm.right = false;
        vm.finish = true;
}
},
components:{
    lgHeader,
    goLeft,
    goRight,
    goCancel,
    goComplete
}
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
