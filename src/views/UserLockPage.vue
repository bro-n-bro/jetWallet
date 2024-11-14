<template>
    <!-- User lock page -->
    <section class="page_container user_lock_page">
        <div class="cont">
            <!-- User lock page title -->
            <div class="page_title">
                {{ $t('message.user_lock_title') }}
            </div>

            <!-- User lock page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <div class="desc">
                        {{ $t('message.user_lock_desc', { time: store.userLockTime / 60 / 1000 }) }}
                    </div>

                    <div class="timer">
                        <div class="label">
                            {{ $t('message.user_lock_timer_label') }}
                        </div>

                        <vue-countdown :time="store.userLockTime - (new Date() - new Date(userLockTimestamp))" v-slot="{ minutes, seconds }" class="val">
                            {{ minutes < 10 ? '0' + minutes : minutes }} : {{ seconds < 10 ? '0' + seconds : seconds }}
                        </vue-countdown>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { onBeforeMount, ref } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { DBgetData } from '@/utils/db'


    const store = useGlobalStore(),
        router = useRouter(),
        userLockTimestamp = ref('')


    onBeforeMount(async () => {
        // Get data from DB
        userLockTimestamp.value = await DBgetData('global', 'userLockTimestamp')

        // Finish timer
        setTimeout(async () => {
            // Set user unlock
            await store.setUserUnlock()

            // Redirect
            router.push('/auth')
        }, store.userLockTime - (new Date() - new Date(userLockTimestamp.value)))
    })
</script>


<style scoped>
    .desc
    {
        font-size: 14px;
    }


    .timer
    {
        margin-top: 48px;

        text-align: center;
    }


    .timer .label
    {
        margin-bottom: 4px;

        opacity: .5;
    }


    .timer .val
    {
        font-size: 28px;
    }
</style>