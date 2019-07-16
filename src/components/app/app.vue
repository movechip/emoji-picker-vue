<style src="./app.styl" lang="stylus" scoped></style>
<script src="./app.js"/>

<template lang="pug">
div(ref="emoji" class="emoji")
    slot
    div(class="emoji-main" v-show="show")
        div(class="emoji-main__nav")
            ul
                li(v-for="(v,k) in navCodes" :key="k")
                    label(@click="emojiSwitch(k)" :class="navState[k]" v-html="v")
                    
        div(class="emoji-main__recent")
            p recent
            ul
                li(@click="d(v,'recent')" v-for="(v,k) in recents" :key="k" v-html="v")
        div(class="emoji-main__container")
            div(v-for="(v,k) in emojiCodes" :key="k" :class="containerState[k]")
                ul
                    li(@click="d(vv)" v-for="(vv,kk) in v.codes" :key="kk" v-html="vv")
</template>