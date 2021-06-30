<template>
  <el-container style="">
    <el-aside style="width: 200px;margin-top: 20px">
      <Usersidemenu></Usersidemenu>
    </el-aside>
    <el-container>
      <el-main style="border: red 1px solid">
        <Usermain></Usermain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Usersidemenu from './Usersidemenu'
import Usermain from './Usermain'
export default {
  name: 'Userindex',
  components: {Usermain, Usersidemenu}
}
</script>

<style scoped>
.el-header {
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-left: 10%;
  margin-top: 30px;
  width: 800px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin-left: 13%;
  margin-top: 20px;
  width: 800px;
}
</style>
