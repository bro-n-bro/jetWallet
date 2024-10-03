<template>
    <!-- JetPack - Get address page -->
    <section class="page_container get_address">
        <div class="cont">
            <!-- JetPack - Get address page title -->
            <div class="page_title">
                Request for address
            </div>

            <!-- JetPack - Get address page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- JetPack - Get address desc -->
                    <div class="desc">
                        Some application requests data on your address, if you do not know who is requesting, do not allow it.
                    </div>

                    <!-- Buttons -->
                    <div class="btns">
                        <!-- Approve button -->
                        <button class="btn">
                            <span>{{ $t('message.btn_approve') }}</span>
                        </button>

                        <!-- Reject button -->
                        <button class="btn purple_btn">
                            <span>{{ $t('message.btn_reject') }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>

</script>


<style scoped>
    .desc
    {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
</style>