<template>
  <div class="breadcrumb-container">
    <p>
      <child v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.title">
        <child v-if="breadcrumb.link">
          <a :href="breadcrumb.link">{{ breadcrumb.title }}</a>
        </child>
        <child v-else>
          {{ breadcrumb.title }}
        </child>
        <child v-if="index!=breadcrumbs.length-1"> > </child>
      </child>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped>
</style>
