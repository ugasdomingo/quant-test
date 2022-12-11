<template>
    <q-page>
        <div class="row col-12 item-center justify-between">
            <!-- Card for display podcast info -->
            <CardInfo :podcast="podcast" class="col-4 q-ma-sm" />
            <div class="col-8 q-pa-md">
                <q-card class="q-pl-xs">
                    <p class="text-h6">
                        Episodes : {{ podcastStore.onePodcast }}
                    </p>
                </q-card>
                <div class="">
                    <!-- table to detail all episodes info(soon) -->
                    <q-table :rows="rows" :columns="columns" row-key="name" />
                </div>
                <p class="text-h6 q-mt-md">
                    See all the Episodes on the next
                    <a
                        @click="openLink(podcastStore.urlPodcast)"
                        class="cursor-pointer text-blue"
                        target="_blank"
                        >link</a
                    >
                </p>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import { LocalStorage } from 'quasar';
import { useRoute } from 'vue-router';
import { usePodcastStore } from 'src/stores/podcast-store'; // Podcas Store funtions in pinia
import CardInfo from 'src/components/CardInfo.vue'; //Card to display podcast info

// Get ID param and fecth info from localStorage and episodes number at Podcast API
const route = useRoute();
const params = route.params.id; // get the ID from route params
const podcast = LocalStorage.getItem(params); // get the Podcast info in the localStore
const podcastStore = usePodcastStore(); // Acivate the Podcast Store (pinia)

// get podcast info of localStore on refresh page
const getPodcastInfo = () => {
    if (podcastStore.onePodcast == '') {
        podcastStore.onePodcast = LocalStorage.getItem('nPodcast');
    }
};
getPodcastInfo(); // get podcast info funtion

// Open the link to see Episodes detail
const openLink = (link) => {
    window.open(link);
};

// Episode's table (soon)
const columns = [
    {
        name: 'name',
        label: 'Title',
        align: 'left',
        field: (row) => row.name,
    },
    {
        name: 'date',
        label: 'Date',
        align: 'left',
    },
    {
        name: 'duration',
        label: 'Duration',
        align: 'left',
    },
];
const rows = [
    {
        name: 'Available Soon',
        date: 'Available Soon',
        duration: '',
    },
];
</script>
