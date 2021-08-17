<template>
  <div>
<!--     
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" v-for="(c, index) in col" :key="`col_${index}`">
              {{c.text}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in tableData"
            :key="item.id"
          >
            <td>{{ item.date }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table> -->

    <v-data-table
      :headers="dropCol"
      :items="tableData"
    ></v-data-table>
  
  </div>
</template>

<script>
/* eslint-disable */
// 원본 소스 : https://dev.to/andynoir/draggable-table-row-with-vuejs-vuetify-and-sortablejs-1o7l
import Sortable from "sortablejs";

  export default {
    data() {
      return {
        col: [
          { text: "date", value: "date", },
          { text: "name", value: "name", },
          { text: "address", value: "address", },
        ],
        dropCol: [
          { text: "date", value: "date", },
          { text: "name", value: "name", },
          { text: "address", value: "address", },
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
        const tbody = document.querySelector(".v-data-table__wrapper tbody");
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
        const wrapperTr = document.querySelector(".v-data-table__wrapper thead tr");
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
    
  }
</script>