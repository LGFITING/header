<template>
    <div class="lg-header" :class="{ 'is-fixed': fixed }">
      <div class="lg-header-button is-left">
        <slot name="left"></slot>
      </div>
        <h4 class="lg-header-title" v-text="title"></h4>
        <div class="lg-header-button is-right">
          <slot name="right"></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        props: {
          fixed: Boolean,
          title: String,
          left:Boolean
      }
    }
</script>
<style lang="css">
*{
    margin:0px;
    padding:0px;
}

.lg-header{
    width: 100%;
    text-align: center;
    display: flex;
}
.lg-header-title{
        flex:1;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: inherit;
}
.is-fixed{
    position: fixed;
    top: 0px;
}
.is-left{
    text-align:left;
}
.is-cancel{
    text-align:left;
    position: absolute;
    flex:1;
}
.is-right{
    text-align:right;
}
.is-complete{
    text-align:right;
    right: 0px;
    position: absolute;
    flex:1;
}
</style>
