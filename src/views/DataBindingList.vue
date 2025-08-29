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
        <!-- v-bind:key="i" 는 <tr>을 구분하는 고유 ID 역할. -->
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
  beforeCreate() {
    console.log("beforeCreatee");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  mounted() {
    // DataBindingList 컴포넌트가 생성이 되면, 생성주기 라는게 있음, 생성>마운트>소멸..
    // 컴포넌트가 닫히면 소멸 뭐 이런..
    fetch("http://192.168.0.8:3000/products")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.prodList = result;
      });
  },
};
</script>

<style></style>

<!--
created → 컴포넌트가 메모리에 생성된 직후

mounted → 실제로 DOM에 붙은 직후

updated → 데이터가 변경될 때 -> beforeUpdate, updated 훅 실행

unmounted → 컴포넌트가 화면에서 제거될 때  -->
