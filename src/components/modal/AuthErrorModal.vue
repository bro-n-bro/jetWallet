<template>
    <!-- Auth error modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Loader -->
                <Loader v-if="loading" />

                <template v-else>
                <!-- Close button -->
                <router-link to="/" class="close_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </router-link>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.auth_error_title') }}
                </div>

                <!-- Modal desc -->
                <div class="modal_desc">
                    {{ $t('message.auth_error_desc') }}
                </div>

                <!-- Modal buttons -->
                <div class="btns">
                    <!-- Import button -->
                    <router-link to="/import_wallet" class="btn">
                        <span>{{ $t('message.btn_import_existing_wallet') }}</span>
                    </router-link>
                </div>
                </template>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { onBeforeMount, ref } from 'vue'
    import { useGlobalStore } from '@/store'

    // Components
    import Loader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        loading = ref(true)


    onBeforeMount(async () => {
        // Clear data
        await store.clearAllData()

        // Hide loader
        loading.value = false
    })
</script>