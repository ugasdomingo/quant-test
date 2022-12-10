<template>
    <q-page>
        <!-- div to display the total of podcast that is show in and the input to filter -->
        <div class="row items-center q-mr-xl justify-end q-my-xl">
            <!-- Number of podcast been show -->
            <p
                class="number-podcast bg-primary text-white q-mr-md text-h4 q-pa-xs"
            >
                {{ nPodcast }}
            </p>
            <!-- input for filter podcast -->
            <q-input
                outlined
                v-model="textFilter"
                @keyup="filterPodcasts(textFilter)"
                type="text"
                label="filter podcast..."
                style="max-width: 300px"
            />
        </div>
        <!-- div to display all the podcast stored in showPodcast -->
        <div class="row justify-center">
            <template v-for="podcast of showPodcast" :key="podcast.id">
                <CardGallery :podcast="podcast" class="q-ma-sm" />
            </template>
        </div>
        <!-- spinner to show while information is loading-->
        <q-spinner-hourglass
            v-if="!showPodcast"
            color="primary"
            size="3em"
            :thickness="10"
            class="fixed-top-right"
        />
    </q-page>
</template>

<script setup>
import { usePodcastStore } from 'src/stores/podcast-store'; // Stores for fetch to the API
import CardGallery from 'src/components/CardGallery.vue'; // Component to show individual Podcast information
import { ref } from 'vue';

const podcastStore = usePodcastStore(); // Active the Stores for this page
const infoPodcast = ref(); // Stores the info of the podcast clicked by user
const showPodcast = ref(null); // Stores Podcast to show (even the filtered)
const hundredPodcast = ref(); // Stores the original fetch of 100 Podcast
const id = ref(); // Stores the id of the podcast clicked by user
const textFilter = ref(''); // Stores the input for the users filter
const nPodcast = ref(100); // Stores the Number of total podcast been show

// Funtion to camelcase the text input used for filter podcast
const camelSentence = (str) => {
    return (' ' + str)
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
            return chr.toUpperCase();
        });
};

// Funtion to get the 100 Podcast info and stores to process (We active it after)
const getPodcast = async () => {
    await podcastStore.getAllPodcast(); // call the fetch in Podcast Store
    hundredPodcast.value = podcastStore.allPodcast; // Stores the 100 Podcast info in original
    showPodcast.value = hundredPodcast.value; // Stores the 100 podcat info to process and filter
    id.value = podcastStore.allPodcast['id'];
};

//Funtion to filter podcast (no matter if user use lowerCase o upperCase)
const filterPodcasts = (textFilter) => {
    const camel = camelSentence(textFilter); // active the camelCase funtion
    showPodcast.value = hundredPodcast.value.filter(function (item) {
        if (item.name.match(textFilter)) {
            return item.name.match(textFilter);
        }
        if (item.name.match(camel)) {
            return item.name.match(camel);
        }
        if (item.author.match(textFilter)) {
            return item.author.match(textFilter);
        }
        if (item.author.match(camel)) {
            return item.author.match(camel);
        }
    });

    //Stores the number of podcast been show after filter
    nPodcast.value = showPodcast.value.length;
};

// Funtion to get the info of one Podcast by id
const getOnePodcast = () => {
    // with fetch
    fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
            'https://itunes.apple.com/lookup?id=' + id.value
        )}`
    )
        .then((response) => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok.');
        })
        .then((data) => (infoPodcast.value = data.contents));
};

getPodcast(); //Active Fetch to get 100 podcast just entering the page
</script>

<!-- style for number of podcast been show -->
<style lang="sass" scoped>
.number-podcast
    border-radius: 8px;
</style>
