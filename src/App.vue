<template>
  <form @submit="onSubmit">
    <div>
      <h2>Текущее значение:</h2>
      <p>{{ inputValue }}</p>
    </div>
    <pin-input
      :count="8"
      :defaultValue="inputValue"
      @on-change="onChange"
      @on-error="onError"
    />
  </form>
</template>

<script>
import PinInput from "@/pin-input/pin-input.vue";

export default {
  name: "App",
  components: { PinInput },
  data() {
    return {
      inputValue: 0,
    };
  },
  methods: {
    onChange(newInputValue) {
      this.inputValue = newInputValue;
    },
    onError(message) {
      alert(message);
    },
    onSubmit(e) {
      e.preventDefault();
      alert(`newInputValue: ${this.inputValue}`);
    },
  },
};
</script>
