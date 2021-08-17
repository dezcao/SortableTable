<template>
  <div style="width: 800px">
    <el-table :data="tableData" border row-key="id" align="left">
      <el-table-column
        v-for="(item, index) in col"
        :key="`col_${index}`"
        :prop="dropCol[index].prop"
        :label="item.label"
      >
      </el-table-column>
    </el-table>

    <pre style="text-align: left">
      {{ dropCol }}
    </pre>
    <hr />
    <pre style="text-align: left">
      {{ tableData }}
    </pre>

  </div>
</template>
<script>
/* eslint-disable */
// 원본 소스 : https://www.programmersought.com/article/8319768213/
import Sortable from "sortablejs";
export default {
  data() {
    return {
      col: [
        { Label: "date", prop: "date", },
        { Label: "name", prop: "name", },
        { Label: "address", prop: "address", },
      ],
      dropCol: [
        { Label: "date", prop: "date", },
        { Label: "name", prop: "name", },
        { Label: "address", prop: "address", },
      ],
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: " 1",
          address: "100 Lane, Jinshajiang Road, Putuo District, Shanghai",
        },
        {
          id: "2",
          date: "2016-05-04",
          name: " 2",
          address: "200 Lane, Jinshajiang Road, Putuo District, Shanghai",
        },
        {
          id: "3",
          date: "2016-05-01",
          name: " 3",
          address: "300 Lane, Jinshajiang Road, Putuo District, Shanghai",
        },
        {
          id: "4",
          date: "2016-05-03",
          name: " 4",
          address: "400 Lane, Jinshajiang Road, Putuo District, Shanghai",
        },
      ],
    };
  },
  mounted() {
    this.rowDrop();
    this.columnDrop();
  },
  methods: {
    //row and drag
    rowDrop() {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        },
      });
    },
    //column drag
    columnDrop() {
      const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.dropCol[evt.oldIndex];
          this.dropCol.splice(evt.oldIndex, 1);
          this.dropCol.splice(evt.newIndex, 0, oldItem);
        },
      });
    },
  },
};
</script>
<style scoped>
</style>