<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  emits: ["close"],
  props: ["open"],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}
.modal-enter-active {
  animation: modal-arrive 1s ease 0s 1 normal forwards;
}

.modal-leave-active {
  animation: modal-exit 1s ease 0s 1 normal forwards;
}

@keyframes modal-arrive {
  0% {
    opacity: 0;
    transform: rotate(-540deg) scale(0);
  }

  100% {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}
@keyframes modal-exit {
  0% {
    opacity: 1;
    transform: rotate(0) scale(1);
  }

  100% {
    opacity: 0;
    transform: rotate(-540deg) scale(0);
  }
}
</style>
