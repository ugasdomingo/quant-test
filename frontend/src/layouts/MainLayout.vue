<template>
    <!-- Layout of the app -->
    <q-layout view="hHh lpR fFf">
        <q-header reveal elevated class="bg-primary transparent text-primary">
            <q-toolbar>
                <q-toolbar-title>
                    <router-link
                        to="/"
                        class="text-bold"
                        style="text-decoration: none"
                        >Quant Podcast
                    </router-link>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <!-- Display of all app -->
            <router-view />
        </q-page-container>
    </q-layout>
</template>
