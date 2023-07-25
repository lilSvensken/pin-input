<template>
  <form @submit="onSubmit">
    <div>
      <h2>Текущее значение: {{ inputValue }}</h2>
    </div>
    <pin-input
      :count="6"
      :defaultValue="inputValue"
      :hidden="false"
      @on-change="onChange"
      @on-error="onError"
    />

    <br />
    <div>
      <button type="button" @click="onClear">Clear all</button>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      inputValue: 12,
    };
  },
  methods: {
    onChange(newInputValue) {
      this.inputValue = Number(newInputValue);
    },
    onClear() {
      this.inputValue = "";
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
