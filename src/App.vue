<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('Personal/getEnums');
  },
};
</script>
