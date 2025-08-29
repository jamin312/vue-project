<template>
  <h3><input type="number" v-model.number="valueText" /></h3>
  <h3><input type="number" v-model.number="valueNum" /></h3>
  <p>
    <select v-on:change="opSelect" v-model="operator">
      <option value="+">더하기</option>
      <option value="-">빼기</option>
      <option value="*">곱하기</option>
      <option value="/">나누기</option>
    </select>
  </p>

  <h3>
    <button v-on:click="sumNumber">더하기</button>
    <button v-on:click="minusNumber">빼기</button>
    <button v-on:click="multiNumber">곱하기</button>
    <button v-on:click="diviNumber">나누기</button>
  </h3>
  <p>위쪽 인풋 기본값 : {{ valueText }}</p>
  <p>결과 : {{ resultVal }}</p>
  <p>operator 선택값 : {{ operator }}</p>
  <p>operator 결과 : {{ opResult }}</p>
</template>

<script>
export default {
  data() {
    return {
      valueText: "20",
      valueNum: 10,
      resultVal: 0,
      operator: "*",
      opResult: 0,
    };
  },
  methods: {
    sumNumber() {
      this.resultVal = this.valueText + this.valueNum;
    },
    minusNumber() {
      this.resultVal = this.valueText - this.valueNum;
    },
    multiNumber() {
      this.resultVal = this.valueText * this.valueNum;
    },
    diviNumber() {
      this.resultVal = this.valueText / this.valueNum;
    },
    opSelect() {
      let result;

      if (this.operator == "*") {
        result = this.valueText * this.valueNum;
      } else if (this.operator == "+") {
        result = parseInt(this.valueText) + this.valueNum;
      } else if (this.operator == "-") {
        result = this.valueText - this.valueNum;
      } else {
        result = this.valueText / this.valueNum;
      }

      this.opResult = result;
    },
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style scoped></style>
