<template>
  <div>{{ msg }}</div>

  <table class="add">
    <thead>
      <tr>
        <th>상품명</th>
        <td><input type="text" v-model="prod_name" /></td>
      </tr>
      <tr>
        <th>가격</th>
        <td><input type="text" v-model="prod_price" /></td>
      </tr>
      <tr>
        <td colspan="2"><button @click="registProd">상품등록</button></td>
      </tr>
    </thead>
  </table>

  <table class="list">
    <thead>
      <tr>
        <th>상품번호</th>
        <th>상품명</th>
        <th>가격</th>
        <th>카테고리</th>
      </tr>
    </thead>
    <tbody>
      <tr v-bind:key="i" v-for="(prod, i) in prodList">
        <td>{{ prod.id }}</td>
        <td>{{ prod.product_name }}</td>
        <td>{{ prod.product_price }}</td>
        <!-- prod[`category${prod.category_id}`] -->
        <td>
          {{ prod.category1 }} / {{ prod.category2 }} / {{ prod.category1 }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "Axios 연습",
      prod_name: "",
      prod_price: 1000,
      prodList: [],
    };
  },
  methods: {
    //  /api/productList
    async getProdList() {
      // pending, fullfiled, rejected
      let response = await axios.post(
        "http://localhost:3000/api/productList",
        []
      );
      return response.data; // Promise 타입 반환
    },
    async registProd() {
      let product = {
        product_name: this.prod_name,
        product_price: this.prod_price,
        seller_id: 1,
        category_id: 1,
      };
      let response = await axios.post(
        "http://localhost:3000/api/productInsert",
        { param: [product] }
      );
      response = await this.getProdList();
      console.log(response);
      this.prodList = response;
      // .then((result) => {
      //   console.log(result);
      // })
      // .catch((err) => console.error(err));
    },
  },
  mounted() {
    // this.prodList = this.getProdList();
    // console.log(this.prodList);
    this.getProdList() //
      .then((list) => {
        this.prodList = list;
        console.log(list);
      });
  },
};
</script>

<style scoped>
table {
  margin: 20px auto; /* 좌우 자동으로 -> 중앙 정렬 */
  border-collapse: collapse; /* 테두리 겹침 방지 */
  text-align: center; /* 셀 안 내용 중앙 정렬 */
}

td,
th {
  border: 2px solid black; /* 올바른 border 문법 */
  padding: 8px 12px; /* 셀 안 여백 */
}
</style>
