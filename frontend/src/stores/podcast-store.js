//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

// Set all the funtions and stores we've been using for get and process Podcast API
export const usePodcastStore = defineStore('podcast', () => {
    const allPodcast = ref([]); // Stores the 100 podcast
    const onePodcast = ref(); // Stores the info of one podcast

    const getAllPodcast = async () => {
        //Funtion to fetch the 100 Podcast
        try {
            const res = await api({
                url: '/us/rss/toppodcasts/limit=100/genre=1310/json',
                method: 'GET',
            });
            // Stores 100 podcast's id, name, author and image (To save space)
            allPodcast.value = res.data.feed.entry.map((item) => {
                return {
                    id: item.id.attributes['im:id'],
                    name: item['im:name'].label,
                    author: item['im:artist'].label,
                    img: item['im:image'][2].label,
                };
            });
        } catch (error) {
            throw error.response?.data || error;
        }
    };

    const getOnePodcast = async (id) => {
        //Funtion to fetch the 1 Podcast by their ID
        try {
            const res = await fetch(
                `https://api.allorigins.win/get?url=${encodeURIComponent(
                    'https://itunes.apple.com/lookup?id=' + id
                )}`
            );
            // Stores the information we need (To save space)
            onePodcast.value = res.json();
            console.log(res);
        } catch (error) {
            throw error.response?.data || error;
        }
    };

    return {
        allPodcast,
        getAllPodcast,
        onePodcast,
        getOnePodcast,
    };
});
