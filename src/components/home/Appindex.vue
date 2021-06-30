<template>
  <div>
    <el-button type="success" icon="el-icon-circle-plus-outline" circle style="right: 20px" @click="addhero">
       添加英雄
    </el-button>
    <el-row style="margin: 50px;margin-top: 20px;">
      <el-col :span="6" v-for="(item,i) in herolist" :key="i" >
        <el-card :body-style="{ padding: '0px' }" style="border-radius: 30px">
          <img :src="item.heroimage" class="image" style="height: 300px">
          <div style="padding: 14px;">
            <span>姓名: {{item.heroname}}</span>
            <div class="bottom clearfix">
              <el-button type="danger" icon="el-icon-delete" circle style="float: right" @click="deletehero(i)"></el-button>
              <el-button type="primary" icon="el-icon-edit" circle style="float: right;margin-right: 5px" @click="modify(i)"></el-button>
              <el-button icon="el-icon-search" circle style="float: right" @click="detail(i)"></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="英雄详情" :visible.sync="dialogFormvisible" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 15px" >
      <!---->
      <el-form :model="hero">
        <el-form-item label="英雄名字"  :disabled="false">
          <el-input  autocomplete="off"  v-model="hero.heroname"></el-input>
        </el-form-item>
        <el-form-item label="英雄生日"  :disabled="false">
          <el-input  autocomplete="off"  v-model="hero.herobirthday"></el-input>
        </el-form-item>
        <el-form-item label="英雄介绍"  :disabled="false">
          <el-input  autocomplete="off"  v-model="hero.herointroduce"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormvisible = false" >确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改英雄信息" :visible.sync="dialogForm2visible" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 15px" >
      <!---->
      <el-form :model="modifyhero">
        <el-form-item label="英雄名字" >
          <el-input    v-model="modifyhero.heroname"></el-input>
        </el-form-item>
        <el-form-item label="英雄生日" >
          <el-input    v-model="modifyhero.herobirthday"></el-input>
        </el-form-item>
        <el-form-item label="英雄介绍" >
          <el-input    v-model="modifyhero.herointroduce"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="suremodify" >确定修改</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加英雄信息" :visible.sync="dialogForm3visible" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 15px" >
      <el-form :model="addheroitem">
        <el-form-item label="英雄名字" >
          <el-input    v-model="addheroitem.addheroname"></el-input>
        </el-form-item>
        <el-form-item label="英雄生日" >
          <el-input    v-model="addheroitem.addherobirthday"></el-input>
        </el-form-item>
        <el-form-item label="英雄介绍" >
        <el-input    v-model="addheroitem.addherointroduce"></el-input>
        </el-form-item>
        <el-form-item label="英雄照片(网址)" >
          <el-input    v-model="addheroitem.addheroimage"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sureadd" >确定添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AppIndex',
  data () {
    return {
      herolist: [
        {
          heroname: '鲁迅',
          herobirthday: '1881年9月25日',
          herointroduce: '文学家、思想家、中国现代文学的奠基人之一',
          heroimage: 'http://5b0988e595225.cdn.sohucs.com/images/20200509/60521bbbb52644a4915df3dbdbbc088e.jpeg'
        }],
      hero: {
        heroname: '',
        herobirthday: '',
        herointroduce: '',
        heroimage: ''
      },
      modifyhero: {
        heroname: '',
        herobirthday: '',
        herointroduce: ''
      },
      addheroitem: {
        addheroname: '',
        addherobirthday: '',
        addherointroduce: '',
        addheroimage: ''
      },
      dialogFormvisible: false,
      dialogForm2visible: false,
      dialogForm3visible: false,
      modifyheronum: 0
    }
  },
  methods: {
    addhero: function () {
      this.dialogForm3visible = true
    },
    deletehero: function (i) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.herolist.splice(i, 1)
      })
    },
    detail: function (i) {
      this.dialogFormvisible = true
      this.hero = this.herolist[i]
    },
    modify: function (i) {
      // eslint-disable-next-line no-unused-expressions,no-sequences
      this.dialogForm2visible = true
      this.modifyheronum = i
    },
    suremodify: function () {
      this.dialogForm2visible = false
      this.herolist[this.modifyheronum].heroname = this.modifyhero.heroname
      this.herolist[this.modifyheronum].herobirthday = this.modifyhero.herobirthday
      this.herolist[this.modifyheronum].herointroduce = this.modifyhero.herointroduce
      this.modifyhero.heroname = ''
      this.modifyhero.herobirthday = ''
      this.modifyhero.herointroduce = ''
    },
    sureadd: function () {
      // console.log(this.addheroitem.addheroname)
      this.herolist.push({
        heroname: this.addheroitem.addheroname,
        herobirthday: this.addheroitem.addherobirthday,
        herointroduce: this.addheroitem.addherointroduce,
        heroimage: this.addheroitem.addherointroduce
      })
      this.dialogForm3visible = false
      this.addheroitem.addheroname = ''
      this.addheroitem.addherobirthday = ''
      this.addheroitem.addheroimage = ''
      this.addheroitem.addherointroduce = ''
    }
  }
}
</script>

<style scoped>
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
