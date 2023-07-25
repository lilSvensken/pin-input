<template>
  <form @submit="onSubmit">
    <div>
      <h2>Текущее значение:</h2>
      <p>{{ inputValue }}</p>
    </div>
    <pin-input :count="3" :defaultValue="inputValue" @on-change="onChange" />
  </form>
</template>

<script>
import PinInput from "@/pin-input/pin-input.vue";

export default {
  name: "App",
  components: { PinInput },
  data() {
    return {
      inputValue: 123456,
    };
  },
  methods: {
    onChange(newInputValue) {
      this.inputValue = newInputValue;
    },
    onSubmit(e) {
      e.preventDefault();
      console.log("newInputValue:", this.inputValue);
    },
  },
};
</script>
