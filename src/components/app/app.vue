<style src="./app.styl" lang="stylus" scoped></style>
<script src="./app.js"/>

<template lang="pug">
div(ref="con" class="con")
    slot
    div(class="emoji" v-show="show")
        div(class="nav")
            ul(class="clearfix")
                li(v-for="(v,k) in navCodes" :key="k")
                    label(@click="emojiSwitch(k)" :class="tmp[k]" v-html="v")
                    
        div(class="body")
            div(class="recent")
            div(class="container")
                div(v-for="(v,k) in emojiCodes" :key="k" :class="tmp2[k]")
                    ul(class="clearfix")
                        li(@click="d(vv)" v-for="(vv,kk) in v.codes" :key="vv" v-html="vv")
</template>