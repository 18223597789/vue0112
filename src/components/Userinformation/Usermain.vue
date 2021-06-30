<template>
  <el-form style="width: 600px">
    <el-form-item label="学号">
      <el-input type="text" v-model="xuehao" :disabled="true" style="" ></el-input>
    </el-form-item>
    <el-form-item label="名字">
      <el-input type="text" v-model="name" :disabled="true" style="" ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Usermain',
  data () {
    return {
      xuehao: '曙光1901 631907060112',
      name: '刘彻'
    }
  }
}

</script>

<style scoped>

</style>
