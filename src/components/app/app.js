export default {
    props: ['target'],
    data() {
        return {
            emojiCodes: [
                '\u{1F600}','\u{1F601}','\u{1F602}','\u{1F603}',
                '\u{1F604}','\u{1F605}','\u{1F606}','\u{1F607}',
                '\u{1F608}','\u{1F609}','\u{1F60A}','\u{1F60B}',
                '\u{1F60C}','\u{1F60D}','\u{1F60E}','\u{1F60F}',
                '\u{1F610}','\u{1F611}','\u{1F612}','\u{1F613}',
                '\u{1F614}','\u{1F615}','\u{1F616}','\u{1F617}',
                '\u{1F618}','\u{1F619}','\u{1F61A}','\u{1F61B}',
                '\u{1F61C}','\u{1F61D}','\u{1F61E}','\u{1F61F}',
                '\u{1F620}','\u{1F621}','\u{1F622}','\u{1F623}'
            ],
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