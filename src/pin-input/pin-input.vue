<template>
  <div class="container">
    <field
      v-for="index in count"
      :key="index"
      :index="index"
      :isFocus="index === numActiveField"
      :value="controller[index]"
      @on-focus="onFocusField(index)"
      @on-change="onChangeInput(index, $event)"
    />
  </div>
</template>

<script>
import Field from "@/pin-input/components/field/field.vue";

export default {
  name: "pin-input",
  components: { Field },
  props: {
    count: Number,
  },
  emits: ["onChange"],
  data() {
    return {
      controller: {},
      numActiveField: 1,
    };
  },
  mounted() {
    this.controller = new Array(this.count).fill("");
  },
  methods: {
    onChangeInput(index, fieldValue) {
      this.controller[index] = fieldValue;

      let newInputValue = Number(
        this.controller.map((item) => (item === "" ? "0" : item)).join("")
      );
      this.setActiveField();
      this.$emit("onChange", newInputValue);
    },
    onFocusField(index) {
      this.numActiveField = index;
    },
    setActiveField() {
      if (this.numActiveField < this.count) {
        this.numActiveField++;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
