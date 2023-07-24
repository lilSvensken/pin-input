<template>
  <label>
    <input
      ref="input"
      type="number"
      :value="value"
      @input="onChange"
      @focus="onFocus"
    />
  </label>
</template>

<script>
export default {
  name: "field",
  emits: ["onChange", "onFocus"],
  props: {
    isFocus: Boolean,
    value: String,
  },
  watch: {
    isFocus() {
      this.setFocus();
    },
  },
  mounted() {
    this.setFocus();
  },
  methods: {
    setFocus() {
      if (this.isFocus) {
        this.$refs["input"].focus();
      }
    },
    onFocus() {
      this.$refs["input"].select();
      this.$emit("onFocus");
    },
    onChange(event) {
      const sliceValue = event.target.value.slice(-1);
      this.$refs["input"].value = sliceValue;
      this.$emit("onChange", sliceValue);
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
