<template>
  <div>
    <b-table striped hover :items="tableData" :fields="dropCol"></b-table>

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
          { label: "date", key: "date", },
          { label: "name", key: "name", },
          { label: "address", key: "address", },
        ],
        dropCol: [
          { label: "date", key: "date", },
          { label: "name", key: "name", },
          { label: "address", key: "address", },
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
      }
    },
    mounted() {
      this.rowDrop();
      this.columnDrop();
    
    },
    methods: {
      //row and drag
      rowDrop() {
        const tbody = document.querySelector(".b-table > tbody");
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
        const wrapperTr = document.querySelector(".b-table > thead > tr");
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
    }
  }
</script>