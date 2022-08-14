<template>
  <div class="container">
    <div class="container">
      <!--
         The Transition component is a built-in Vue Component that, when applied, adds and removes extra CSS "enter" utility classes to the element that it is wrapping, which allow the dev to animate said element's appearance when it mounts the DOM
      -->
      <transition name="text">
        <p v-show="paragraphVisability">This is only sometime visable</p>
      </transition>
      <!-- 
        Similarly, after the element that is being wrapped by Vue's Transition component un-mounts the DOM, the Transition component adds and removes extra CSS utility "leave" classes to the element that it is wrapping, which allow the dev to animate said element's removal from the DOM
      -->

      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <font-awesome-icon
      :class="{
        animate: animatedBlock,
        'block-color-animation': animatedBlock,
      }"
      class="vue-block"
      icon="fa-brands fa-vuejs"
    />

    <button @click="doAnimation">{{ ctaText }}</button>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
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
      paragraphVisability: false,
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
    toggleParagraph() {
      this.paragraphVisability = !this.paragraphVisability;
    },
  },
  computed: {
    ctaText() {
      return this.animatedBlock ? "Stop Animation" : "Start Animation";
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
  min-height: 200px;
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

/* Default CSS utility classes added by Vue's Transition Component when the element that it is wrapping first gets added to the DOM */
/* .v-enter-from {
  opacity: 0;
  transform: rotateX(-100deg);
} */
.text-enter-active {
  animation: textin 0.3s ease-out;
}
/* .v-enter-to {
  opacity: 1;
  transform: rotateX(0deg);
} */

/* Default CSS utility classes added by Vue's Transition Component when the element that it is wrapping gets removed from the DOM */

/* .v-leave-from {
  opacity: 1;
  transform: rotateX(0deg);
} */
.text-leave-active {
  animation: textout 0.3s ease-out;
}
/* .v-leave-to {
  opacity: 0;
  transform: rotateX(-100deg);
} */

/* Animation for Vue logo box */
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

/* Animation for adding paragraph text to the DOM */
@keyframes textin {
  0% {
    opacity: 0;
    transform: rotateX(-100deg);
    transform-origin: top;
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: top;
  }
}

/* Animation for removing paragraph text to the DOM */
@keyframes textout {
  0% {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: top;
  }

  100% {
    opacity: 0;
    transform: rotateX(-100deg);
    transform-origin: top;
  }
}
</style>
