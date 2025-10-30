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
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('ID:', route.params.id);
</script>

<style lang="scss" scoped></style>
