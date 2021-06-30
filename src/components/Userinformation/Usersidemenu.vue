<template>
  <el-menu
    class="categories"
    default-active="0"
    active-text-color="red">
    <el-menu-item index="0">
      <i class="el-icon-user-solid"></i>
      <span slot="title">全部信息</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Usersidemenu'
}
</script>

<style scoped>
.categories {
  position: fixed;
  margin-left: 50%;
  left: -600px;
  top: 100px;
  width: 150px;
}
</style>
