<script setup>
// Card to show Podcast info
// Props of the 1 Podcast fetch to local storage
defineProps({
    podcast: Object,
});
</script>

<template>
    <q-card class="my-card column cursor-pointer">
        <!-- image of podcast -->
        <img
            style="
                height: 250px;
                max-width: 250px;
                align-self: center;
                margin-bottom: 32px;
            "
            :src="podcast?.img"
        />
        <q-card-section class="q-pl-sm q-mb-md">
            <!-- name of podcast -->
            <p class="text-sm text-weight-bolder text-black q-mb-none">
                {{ podcast?.name }}
            </p>
            <!-- author of podcast -->
            <span class="text-xs text-italic text-grey"
                >by: {{ podcast?.author }}</span
            >
        </q-card-section>
        <q-card-section>
            <!-- name of podcast -->
            <p class="text-sm text-weight-bolder text-black q-mb-none">
                Description:
            </p>
            <!-- author of podcast -->
            <span class="text-xs text-italic text-grey"
                >Author: {{ podcast?.summary }}</span
            >
        </q-card-section>
    </q-card>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  margin-bottom: 64px
.my-card img
  object-fit: cover
  border-radius: 8px
  width: 80%
  max-width: 150px
  max-height: 150px
  margin-top: 32px
</style>
