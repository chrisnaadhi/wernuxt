<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  --at-apply: py-2 px-4 my-4 text-white border-none bg-green-400 cursor-pointer;
}
</style>
