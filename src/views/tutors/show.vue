<template>
  <div>
    <breadcrumbs>
      <template v-slot:model> Tutores </template>
      <template v-slot:action> Tutor </template>
    </breadcrumbs>
    <pre>
      {{ $route.params.id }}
    </pre>
  </div>
</template>

<script setup>
import breadcrumbs from "@/components/breadcrumbs.vue";
<<<<<<< HEAD
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('ID:', route.params.id);
=======
>>>>>>> 87fd98366f348993d4ad19c3798811935b17db1f
</script>

<style lang="scss" scoped></style>
