<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="">
      来一个牛逼闪闪的名字
      <input type="text" class="input" autofocus>
      <el-button type="primary">开始尬聊</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to chatRoom'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.input {
  border: none;
  outline: none;
  border-bottom: 1px solid black;
}

</style>
