<template>
    <!-- Auth page -->
    <section class="page_container auth_page">
        <div class="cont">
            <!-- Auth page title -->
            <div class="page_title">
                {{ $t('message.auth_title') }}
            </div>

            <!-- Auth page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Loader -->
                    <Loader v-if="loading" />

                    <!-- Auth -->
                    <Auth />

                    <div class="version">
                        {{ version }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, inject, onUnmounted, onMounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { DBgetMultipleData } from '@/utils/db'

    // Components
    import Auth from '@/components/Auth.vue'
    import Loader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        loading = ref(true),
        version = process.env.APP_VERSION || 'unknown'


    onMounted(async () => {
        // Get data from DB
        let DBData = await DBgetMultipleData('global', ['userLockTimestamp', 'authTimestamp'])

        if (new Date() - new Date(DBData.authTimestamp) < store.authTime) {
            // Auto auth
            emitter.emit('auth')
        } else {
            if (new Date(DBData.userLockTimestamp) - new Date() < store.userLockTime) {
                // Set user unlock
                await store.setUserUnlock()
            }

            // Hide loader
            loading.value = false
        }
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth')
    })


    // Event "auth"
    emitter.on('auth', async () => {
        // Auth
        await store.auth()

        // Hide loader
        loading.value = false

        // Redirect
        router.push('/account')
    })
</script>


<style scoped>
    .btns
    {
        margin-top: 0;
    }


    .version
    {
        font-size: 10px;

        margin-top: 12px;

        text-align: center;

        opacity: .5;
    }
</style>