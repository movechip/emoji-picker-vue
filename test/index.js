import Vue from 'vue';
import emojiPicker from '../src/components/emojiPicker/index.vue';

new Vue({
    el: '#app',
    components: {
        emojiPicker
    },
    data: {
        target: null,
        isShowEmoji: false,
        triggerCode: '&#x1F600;',
        customStyle: {
           // width: '400px',
           // height: '180px'
        }
    },
    created() {
        this.target = document.querySelector('#target');
    },
    methods: {
        showEmoji() {
            this.isShowEmoji = !this.isShowEmoji;
        }
    }
})