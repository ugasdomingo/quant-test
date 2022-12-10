<template>
    <!-- Layout of the app -->
    <q-layout view="hHh lpR fFf">
        <q-header reveal elevated class="bg-primary transparent text-primary">
            <q-toolbar>
                <q-toolbar-title> Quant Podcast </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <!-- Display of all app -->
            <router-view />
        </q-page-container>
    </q-layout>
</template>
