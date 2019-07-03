<style src="./app.styl" lang="stylus" scoped></style>
<script src="./app.js"/>

<template lang="pug">
div(class="emoji")
    div(class="nav")
    div(class="body")
        div(class="recent")
        div(class="container")
            ul(class="clearfix")
                p #face
                li(@click="d(v)" v-for="(v,k) in emojiCodes" :key="k" v-html="v")
</template>