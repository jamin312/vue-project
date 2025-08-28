<template>
  <div>
    <h3>{{ msg }}</h3>
    <table>
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="i" v-for="(prod, i) in prodList">
          <td>{{ prod.product_name }}</td>
          <td v-text="prod.price"></td>
          <td>{{ prod.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "학생목록",
      data: [
        { id: 1, name: "홍길동", age: 20 },
        { id: 2, name: "김민수", age: 22 },
        { id: 3, name: "최익수", age: 23 },
      ],
      prodList: [],
    };
  },
  mounted() {
    // DataBindingList 컴포넌트가 생성이 되면, 생성주기 라는게 있음, 생성>마운트>소멸..
    // 컴포넌트가 닫히면 소멸 뭐 이런..
    fetch("http://192.168.0.83:3000/products")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.prodList = result;
      });
  },
};
</script>

<style></style>
