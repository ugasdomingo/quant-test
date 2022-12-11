Quant Podcast.

This is a Single Page Application, where you can find 100 podcast listed in Itunes. Enjoy it at: 

Read the next index to find whatever you need in this app development, I'm using an MIT license.

Readme index:
1. Tech used
2. App structure
3. How to consume Itunes Podcast API in this app
4. Notes

------------- START ---------

1. This App consume the Itunes Podcast API. And I build frontend using
--> VueJs
--> Pinia
--> ViteJs
--> Eslint
--> Axios
--> Quasar (SCSS)
--> Prettier

2. I use a basic app structure and all the code is in "src":
    App.vue     --> To set VueJs with composition API
    boot        --> Axios config
    components  --> All the app's components
    layouts     --> To desing the app's layout.
    css         --> Used for the global quasar variables
    pages       --> Indexpage, Podcast info page
    router      --> Only index page route
    store       --> Pinia stores and config


3. Fetch used to consume Itunes podcast API

--> Get data from 100 podcast list in the url: https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json

    Get Podcast's Name = res.data.feed.entry[n]["im:name"].label
    Get Author's Name = res.data.feed.entry[n]["im:artist"].label
    Get Podcast's ID = res.data.feed.entry[n].id.attributes["im:id"]
    Get Podcast's summary = res.data.feed.entry[n]["summary"].label

--> Get data from individual Podcast, using this url: https://
itunes.apple.com/lookup?id={podcastId}

4. Notes

a) All the code is commented, so you can get every step.
b) Build command "quasar build"
c) Dev command "quasar dev"
d) NPM for Install