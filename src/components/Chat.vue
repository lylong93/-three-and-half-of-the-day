<template>
  <div class="chat">
    <div class="chat-header">
      <span :class="{act:value}">和小智对话</span>
      <el-switch v-model="value" active-color="#13ce66" inactive-color="#abb88e">
      </el-switch>
    </div>
    <div class="chat-main">
      <ul v-for="item in msgs">
        <li>
          <div :class="{right:item.user==='one'}">
            {{item.msg}}
          </div>
        </li>
      </ul>
    </div>
    <div class="chat-footer">
      <el-input class="inp" v-model="sendMsg" placeholder="请输入内容"></el-input>
      <el-button class="but" type="success" @click="sen">发送信息</el-button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      sendMsg: null,
      msgs: [],
      value: false
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
    },
    sen() {
      if (!this.sendMsg) {
        return
      }
      const that = this
      const msg = {
        user: 'one',
        msg: this.sendMsg
      }
      that.msgs.push(msg)
      axios.post('/api', {
        'key': '425487400d86479bb3c987856bce3bd2',
        'info': that.sendMsg
      }).then(function(response) {
        const msg = {
          user: 'api',
          msg: response.data.text
        }
        that.msgs.push(msg)
      })
      this.sendMsg = null
    }
  },
}

</script>
<style lang='scss'>
.chat-header {
  height: 25px;
  background: #963;
}

.chat-main {
  li {
    .right {
      text-align: right;
      background: yellow;
      color: red;
    }
  }
}

.chat-footer {
  .inp {
    width: 65%; // height: 50px;
    position: fixed;
    bottom: 30px;
    left: 5px;
  }

  .but {
    width: 30%; // height: 50px;
    position: fixed;
    bottom: 30px;
    right: 5px;
  }
}

.act {
  color: #6f6;
}

</style>
