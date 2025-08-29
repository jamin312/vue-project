<template>
  <div>
    <h3>Computed 속성</h3>
    <h4>연산에 의한 결과 반영</h4>
    <p>FirstName: <input type="text" v-model="fname" /></p>
    <p>LastName: <input type="text" v-model="lname" /></p>
    <p>FullName: {{ fullName }}</p>
  </div>
  <div>
    <h3>Watch 속성</h3>
    <h4>속성의 변경 이전, 이후 값을 처리</h4>
    <strong>{{ changeName }}</strong>
    <button @click="changeNaming" class="btn">change</button>
  </div>
  <div>
    <h4>과일 가격 및 수량에 따른 변동(Computed)</h4>
    <table>
      <thead>
        <tr>
          <th>과일</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="i" v-for="(fruit, i) in cartList">
          <td>{{ fruit.pname }}</td>
          <td>
            <input type="number" v-model="fruit.price" min="0" step="1000" />
          </td>
          <td><input type="number" v-model="fruit.qty" min="0" /></td>
        </tr>
        <tr>
          <td>총수량</td>
          <td colspan="2">{{ totalQty }}</td>
        </tr>
        <tr>
          <td>총 금액</td>
          <td colspan="2">{{ totalPrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      fname: "kildong",
      lname: "Hong",
      cartList: [
        { id: 1, pname: "사과", price: 1000, qty: 2 },
        { id: 2, pname: "포도", price: 2000, qty: 3 },
        { id: 3, pname: "수박", price: 6000, qty: 1 },
      ],
      changeName: "Park",
    };
  },
  // computed 안에 정의한 것: 함수처럼 보이지만 사실은 속성(계산된 속성)
  // 의존 값이 바뀔 때만 재계산 -> refresh
  computed: {
    fullName() {
      return this.fname + " / " + this.lname;
    },
    totalQty() {
      return this.cartList.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
    },
    totalPrice() {
      return this.cartList.reduce((acc, item) => {
        return acc + item.price * item.qty;
      }, 0);
    },
  },
  watch: {
    changeName(next, prev) {
      console.log("변경 전: " + prev + ", 변경 후: " + next);
    },
  },
  methods: {
    changeNaming() {
      this.changeName = this.changeName === "Park" ? "Hwang" : "Park";
    },
  },
};
</script>

<style scoped>
body {
  margin: auto;
  align: center;
}

table {
  margin: 20px auto; /* 좌우 자동으로 -> 중앙 정렬 */
  border-collapse: collapse; /* 테두리 겹침 방지 */
  text-align: center; /* 셀 안 내용 중앙 정렬 */
}

td,
th {
  border: 1px solid black; /* 올바른 border 문법 */
  padding: 8px 12px; /* 셀 안 여백 */
  width: 100px;
}

input[type="text"],
input[type="number"] {
  width: 100px; /* 가로 길이 100px로 고정 */
  text-align: center;
}

.btn {
  margin-left: 10px; /* strong과 버튼 사이 간격 */
}
</style>
