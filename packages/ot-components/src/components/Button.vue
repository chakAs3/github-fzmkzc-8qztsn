<template>
  <Button :type="type" :class="classes">
    <span class="label">
      {{ label }}
    </span>
  </Button>
</template>

<script setup>
// https://primefaces.org/primevue/button
import Button from 'primevue/button';
import { computed } from 'vue';

const props = defineProps({
  label: String,
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'medium' },
});

const classes = computed(() => [
  props.variant === 'primary' && '',
  props.variant === 'secondary' && 'button-secondary',
  props.variant === 'tertiary' && 'button-tertiary',
  props.size === 'small' && 'is-small',
  props.size === 'medium' && 'is-medium',
  props.size === 'large' && 'is-large',
]);
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
}

.button-secondary {
  background-color: blue;
  color: white;
}

.button-tertiary {
  background-color: orange;
  color: white;
}

.is-small {
  height: 2rem;
  font-size: 0.75rem;
}

.is-medium {
  height: 3rem;
}

.is-large {
  height: 4rem;
}
</style>
