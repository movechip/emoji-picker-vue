import emojiCodes from './codepoints';
export default {
    props: ['target'],
    data() {
        return {
            emojiCodes,
            caret: 0
        }
    },
    mounted() {
        this.target.addEventListener('click',() => {
            
            this.caret = document.getSelection().anchorOffset;
        })
    },
    methods: {
        d(codepoint) {
            const html = this.target.innerHTML;
            this.target.innerHTML = html.substr(0,this.caret) + codepoint + html.substr(this.caret);
            this.caret += 2;
        }
    }
}