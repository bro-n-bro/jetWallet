<template>
    <component :is="layout" />
</template>


<script setup>
    import { onBeforeMount, inject, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { useTitle } from '@vueuse/core'


    const i18n = inject('i18n'),
        route = useRoute(),
        title = useTitle(),
        layout = computed(() => route.meta.layout || 'default-layout')


    onBeforeMount(() => {
        // Set title
        title.value = i18n.global.t('message.page_title')
  })
</script>