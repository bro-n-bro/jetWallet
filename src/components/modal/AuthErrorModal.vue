<template>
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <router-link to="/" class="close_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </router-link>

                <div class="modal_title">
                    {{ $t('message.auth_error_title') }}
                </div>

                <div class="modal_desc">
                    {{ $t('message.auth_error_desc') }}
                </div>

                <div class="btns">
                    <router-link to="/import_wallet" class="btn">
                        <span>{{ $t('message.btn_import_existing_wallet') }}</span>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="overlay"></div>
    </section>
</template>


<script setup>
    import { onBeforeMount, ref } from 'vue'
    import { clearData } from '@/utils/db'

    // Components
    import Loader from '@/components/Loader.vue'


    const loading = ref(true)


    onBeforeMount(async () => {
        // Clear data
        await clearData('wallet')

        // Hide loader
        loading.value = false
    })
</script>