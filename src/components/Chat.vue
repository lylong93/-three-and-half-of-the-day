<template>
  <div class="chat">
    <h1>chat</h1>
    <div>
      <ul v-for="item in msgs">
        <li>{{item}}</li>
      </ul>
    </div>
    <input type="text" name="" class="inp" v-model="sendMsg">
    <button class="but" @click="send">send</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sendMsg: null,
      msgs: []
    }
  },
  mounted() {
    socket.on('Rmsg', (msg) => {
      this.msgs.push(msg)
    })
  },
  methods: {
    send() {
      socket.emit('Smsg', this.sendMsg)
      this.msgs.push(this.sendMsg)
      this.sendMsg = null
    }
  },
}

</script>
<style lang='scss'>
.inp {
  width: 70%;
  height: 50px;
  position: fixed;
  bottom: 50px;
  left: 0px;
}

.but {
  width: 20%;
  position: fixed;
  bottom: 50px;
  right: 0px;
}

</style>
