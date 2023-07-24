<template>
  <div class="container">
    <field
      v-for="index in count"
      :key="index"
      :index="index"
      :isFocus="index === numActiveField"
      :value="controller[index]"
      @on-focus="onFocusField(index)"
      @on-change="onChangeInputField(index, $event)"
      @keydown.delete="clearField($event)"
      @keydown.arrow-left="prevField($event, true)"
      @keydown.arrow-right="nextField($event, true)"
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
    onChangeInputField(index, fieldValue) {
      this.controller[index] = fieldValue;

      let newInputValue = Number(
        this.controller.map((item) => (item === "" ? "0" : item)).join("")
      );
      this.nextField();
      this.$emit("onChange", newInputValue);
    },
    onFocusField(index) {
      this.numActiveField = index;
    },
    prevField() {
      if (this.numActiveField > 1) {
        this.numActiveField--;
      }
    },
    nextField() {
      if (this.numActiveField < this.count) {
        this.numActiveField++;
      }
    },
    clearField(event) {
      event.preventDefault();
      this.controller[this.numActiveField] = "";
      this.prevField();
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
