<template>
  <div>
    <h3>数据的增删改查</h3>
     <div>
      <!-- <button @click="addfn">增加用户</button> -->
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" prop="date" align="center" width="100px">
      </el-table-column>
      <el-table-column label="姓名" prop="name" align="center" width="100px">
      </el-table-column>
      <el-table-column label="地址" prop="address" align="center" width="400px">
        <template slot="header" slot-scope="scope">
          <!-- slot 和slot-scope干什么的 -->
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
      </el-table-column>
      <el-table-column label="修改" align="right" width="300px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
   
    <!-- 表单 -->
    <MyDialog :form="form" :dialogFormVisible="dialogFormVisible" :formLabelWidth="formLabelWidth" @confirmfn_my="confirmfn" @my_cancelfn="cancelfn"></MyDialog>
    <button @click="getkan">看数据库数据改了没</button>
  </div>
</template>

<script>
import dayjs from "dayjs"
import instance from "../api/api";
import MyDialog from "../components/MyDialog.vue"
export default {
  name: "Index",
  data() {
    return {
      search: "",
      tableData: [],
      dialogFormVisible: false, //表单的显示隐藏
      form: {
        index:0,
        date: null,
        name: "",
        address: "",
      }, //表单的内容
      formLabelWidth: "120px",
    };
  },
  components:{
    MyDialog
  },
  created() {
    this.getall(); //
  },
  methods: {
    getkan(){
      instance.get("/all").then(res=>{console.log(res);})
    },
    handleEdit(scope) {
      console.log("edit", scope);
      this.form = scope.row;
      // this.form.date= println(this.form.date)
      this.form.index=scope.$index
      this.dialogFormVisible = true;
    },//fu
    handleDelete(scope) {
      console.log("scope", scope);
      this.$confirm("确定删除", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //确定
          this.deletefn(scope.$index).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          //取消
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },//fu

    //删除业务
    async deletefn(index) {
      let { data } = instance.delete("/delete", { params: { index } });
      this.getall();
      console.log("delete", data);
    },
   
    //请数据的业务
    async getall() {
      let { data } = await instance.get("/all");
      console.log(data);
      this.tableData = data.data;
    },
    cancelfn(){
      this.dialogFormVisible=false
    },
    async confirmfn(){
      this.dialogFormVisible=false
      this.form.date=dayjs(this.form.date).format("YYYY-MM-DD");
      this.updatefn()
    },
  //修改业务
    async updatefn(){
      let {date,name,address,index}=this.form
      let { data } = await instance.put("/update",{date,name,address,index});
      console.log("修改",data);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
