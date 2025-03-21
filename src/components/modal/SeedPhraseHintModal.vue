<template>
    <!-- Seed phrase hint modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data" :class="{ closing: isClosing }">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.seed_phrase_hint_title') }}
                </div>

                <!-- Seed phrase hin modal data -->
                <div class="mnemonic_wrap">
                    <div class="mnemonic">
                        <div v-for="(word, index) in props.mnemonic.split(' ')" :key="index">
                            {{ index + 1 }}. {{ word }}
                        </div>
                    </div>
                </div>

                <!-- Seed phrase hin button -->
                <div class="btns">
                    <!-- Copy button -->
                    <button class="btn copy_btn" @click.prevent="copyHandler()">
                        <span>
                            {{ $t('message.btn_copy') }}
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_copy"></use></svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject, onMounted, onUnmounted } from 'vue'
    import { useNotification } from '@kyvg/vue3-notification'
    import { useClipboard } from '@vueuse/core'


    const props = defineProps(['mnemonic']),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        { copy } = useClipboard(),
        isClosing = ref(false)


    onMounted(() => {
        // Event "close_any_modal"
        emitter.on('close_any_modal', closeHandler)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_any_modal', closeHandler)
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_seed_phrase_hint_modal"
            emitter.emit('close_seed_phrase_hint_modal')
        }, 200)
    }


    // Copy handler
    function copyHandler() {
        // Copy
        copy(props.mnemonic)

        // Clean notifications
        notification.notify({
            group: 'default',
            clean: true
        })

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 750,
            title: i18n.global.t('message.notification_copied_title'),
            type: 'copied'
        })
    }
</script>


<style scoped>
    .modal_title
    {
        padding-left: 10px;
    }


    .mnemonic_wrap
    {
        margin-top: 15px;
        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom, #5d33ce 0%, #200750 100%);
    }


    .mnemonic
    {
        font-size: 16px;

        padding: 7px 5px;

        border-radius: 9px;
        background: #06000e;

        column-gap: 8px;
        column-count: 2;
    }


    .mnemonic > *
    {
        padding: 2px 8px 2px 4px;

        transform: translateZ(0);

        --webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;
    }


    .mnemonic > * + *
    {
        margin-top: 8px;
    }



    .btns .btn span
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        gap: 10px;
    }


    .btns .btn .icon
    {
        display: block;

        width: 24px;
        height: 24px;
    }
</style>