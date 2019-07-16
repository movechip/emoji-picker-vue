import { emojiCodes, navCodes } from './codepoints';
let navState = [],
    containerState = [];
navCodes.forEach(v => { 
    navState.push({ 'switch-nav': false }); 
    containerState.push({ 'switch-container': false }) 
});
export default {
    props: ['target', 'show'],
    data() {
        return {
            emojiCodes,
            navCodes,
            caret: 0,
            navState,
            containerState,
            showIdx: 0,
            recents: ['\u{1F600}', '\u{1F601}', '\u{1F602}', '\u{1F603}']
        }
    },
    mounted() {
        this.addClickEventToTarget();
        this.setPosition();
        this.navState[this.showIdx]['switch-nav'] = true;
        this.containerState[this.showIdx]['switch-container'] = true;
    },
    methods: {
        d(codepoint,flag) {
            const html = this.target.innerHTML;
            this.target.innerHTML = html.substr(0, this.caret) + codepoint + html.substr(this.caret);
            this.caret += 2;

            this.setRecent(flag,codepoint);
        },
        setRecent(flag,codepoint) {
            if(this.recents.indexOf(codepoint) >= 0)return;
            !flag ? (this.recents.length < 7 ? this.recents.unshift(codepoint) : (this.recents.pop(),this.recents.unshift(codepoint))) : '';
        },
        addClickEventToTarget() {
            this.target.addEventListener('click', () => {

                this.caret = document.getSelection().anchorOffset;
            });
        },
        setPosition() {
            let emoji = this.$refs.emoji,
                trigger = emoji.children[0],
                emojiMain = emoji.children[1],
                top = trigger.offsetTop + trigger.offsetHeight,
                left = trigger.offsetLeft;
            emojiMain.style.top = top + 'px';
            emojiMain.style.left = left + 'px';
        },
        emojiSwitch(k) {
            this.navState[this.showIdx]['switch-nav'] = false;
            this.containerState[this.showIdx]['switch-container'] = false;
            this.showIdx = k;
            this.navState[k]['switch-nav'] = true;
            this.containerState[k]['switch-container'] = true;
        }
    }
}