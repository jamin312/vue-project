<template>
  <div class="child-container">
    {{ msg }}
    <h3>{{ title }}</h3>

    <div v-if="isShow">
      <p>Likes: {{ likes }}</p>
      <p>is OK ? {{ isOk ? "Yes" : "No" }}</p>
    </div>

    <h3>Member List</h3>
    <ul>
      <li v-for="(family, i) in memberList" :key="i">
        {{ family.name }} - {{ family.age }} years old.
      </li>
    </ul>
    <input v-model="name" />
    <input type="text" v-model="age" />
    <button @click="callParentEvent">call parent event</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Child Component",
      name: "",
      age: 0,
    };
  },
  props: {
    title: { type: String, default: "Default Title" },
    likes: { type: Number, default: 0 },
    isOk: { type: Boolean, default: false },
    isShow: { type: Boolean, default: true },
    memberList: {
      type: Array,
      default: function () {
        return [];
      },
    }, // Object, Array => 함수로 초기 정의
  },
  methods: {
    callParentEvent() {
      // 부모가 @eventName으로 받을 이벤트 이름 , 부모로 전달할 데이터 (여러 개 가능)
      // this.$emit("child-clicked", { name: this.name, age: this.age });
      this.$emit("child-clicked"); // 부모 component 로 event 송출 // 부모의 child-clicked 호출
    },
  },
  mounted() {
    console.log(this); // this => 컴포넌트 자신.
    this.$parent.msg = "부모 컴포넌트"; // 데이터는 부모 → 자식으로 내려가야 합니다. (props로 전달) / 좋지 않은 방식
  },
};
</script>

<style scoped>
.child-container {
  border: 2px dotted red;
}
li {
  list-style: none;
}
</style>
