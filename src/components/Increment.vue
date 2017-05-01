<template>
<div class="IncrementButton">
  <button type="button" name="button" @click="increment">Increment + 1</button>
</div>
</template>
<script type="text/javascript">
import { incrementCounter } from '../vuex/actions'
export default {
  vuex:{
    actions:{
      increment:incrementCounter
    }
  }
}
</script>
