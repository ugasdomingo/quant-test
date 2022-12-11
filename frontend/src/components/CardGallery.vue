<script setup>
// Card to show every Podcast in the index page
import { LocalStorage } from 'quasar';
import { useRouter } from 'vue-router';
import { usePodcastStore } from 'src/stores/podcast-store';

// Props of the 100 Podcast fetch in the index page
defineProps({
    podcast: Object,
});

const router = useRouter();
const podcastStore = usePodcastStore();
const infoPodcast = async (podcast) => {
    await podcastStore.getOnePodcast(podcast.id);
    LocalStorage.set(podcast.id, podcast);
    LocalStorage.set('nPodcast', podcastStore.onePodcast);
    router.push(`/podcast/${podcast.id}`);
};
</script>

<template>
    <q-card
        @click="infoPodcast(podcast)"
        class="my-card column items-center cursor-pointer"
    >
        <!-- image of podcast -->
        <img style="height: 250px; max-width: 250px" :src="podcast?.img" />
        <q-card-section class="text-center">
            <!-- name of podcast -->
            <div class="text-sm text-weight-bolder text-black">
                {{ podcast?.name }}
            </div>
            <!-- author of podcast -->
            <div class="text-xs text-grey">Author: {{ podcast?.author }}</div>
        </q-card-section>
    </q-card>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 200px
  margin-bottom: 64px
.my-card img
  object-fit: cover
  border-radius: 50%
  width: 60%
  max-width: 50px
  max-height: 100px
  margin-top: -32px
</style>
