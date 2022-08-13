<template>
  <div class="container">
    <font-awesome-icon
      :class="{
        animate: animatedBlock,
        'block-color-animation': animatedBlock,
      }"
      class="vue-block"
      icon="fa-brands fa-vuejs"
    />

    <button @click="doAnimation">Animate</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    doAnimation() {
      this.animatedBlock = !this.animatedBlock;
    },
    reset() {
      setTimeout(() => {
        this.animatedBlock = false;
      }, 2000);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.vue-block {
  background-color: #41b883;
  width: 8rem;
  height: 8rem;
  margin-bottom: 2rem;
  border: 4px solid black;
  border-radius: 3px;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  position: relative;
  animation: animate 2.5s cubic-bezier(0.37, 0, 0.63, 1) 0s infinite normal forwards;
}

@keyframes animate {
  0%,
  100% {
    background-color: #34495e;
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }

  10% {
    transform: rotate(8deg);
    background-color: #41b883;
  }

  20%,
  40%,
  60% {
    transform: rotate(-10deg);
    background-color: gold;
  }

  30%,
  50%,
  70% {
    transform: rotate(10deg);
    background-color: rgb(219, 255, 18);
  }

  80% {
    transform: rotate(-8deg);
    background-color: rgb(144, 255, 18);
  }

  90% {
    transform: rotate(8deg);
    background-color: rgb(18, 255, 18);
  }
}
</style>
