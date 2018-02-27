<template>
  <div class="hello">
    <div>
      <el-button @click="handleClick">默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </div>

    <div style="margin-top: 20px">
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </div>
  </div>
</template>

<script>
import {queryById} from '../service/login.service'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: ''
    }
  },
  methods: {
    queryUserById () {
      console.log('------------')
      queryById(1).then((res) => {
        this.obj = res
        console.log(res)
      })
    },
    handleClick () {
      console.log(this.obj)
    }
  },
  mounted () {
    this.queryUserById()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
