<template>
  <div class="favor-panel">
    <person-card
      size="large"
      shadow
    />
  </div>
</template>

<script>
import PersonCard from '@/components/PersonCard'

export default {
  components: {
    PersonCard,
  }
}
</script>

<style lang="scss" scoped>
.favor-panel {
  width: 3.52rem;
  margin: 0 auto;
  padding: .1rem 0;
}
</style>
