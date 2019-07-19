import { emojiCodes, tabCodes, recentCodes } from './codepoints';
import { returnStatement } from 'babel-types';

export default {
    props: ['target', 'show'],
    data() {
        return {
            emojiCodes,
            tabCodes,
            caret: 0,
            tabState: [],
            tabviewState: [],
            showIdx: 0,
            recentCodes
        }
    },
    created() {
        this.supportIE9Plus();
        this.tabCodes.forEach(_ => {
            this.tabState.push({ 'emoji-js-tab--is-active': false });
            this.tabviewState.push({ 'emoji-js-tabview--is-active': false })
        });
    },
    mounted() {
        this.addClickEventToTarget();
        this.setPosition();
        this.tabState[this.showIdx]['emoji-js-tab--is-active'] = true;
        this.tabviewState[this.showIdx]['emoji-js-tabview--is-active'] = true;
    },
    methods: {
        insertEmoji(codepoint, flag) {
            const html = this.target.innerHTML;
            this.target.innerHTML = html.substr(0, this.caret) + codepoint + html.substr(this.caret);

            codepoint.length < 9 ? this.caret += 1 : this.caret += 2;

            this.setRecent(flag, codepoint);
        },
        setRecent(flag, codepoint) {
            if (this.recentCodes.indexOf(codepoint) >= 0) return;
            flag ? '' : (this.recentCodes.length < 7 ?
                this.recentCodes.unshift(codepoint) :
                (this.recentCodes.pop(), this.recentCodes.unshift(codepoint))
            );
        },
        addClickEventToTarget() {
            this.target.addEventListener('click', () => {

                this.caret = document.getSelection().anchorOffset;
            });
            this.target.addEventListener('keyup', () => {

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
        switchTab(k) {
            this.tabState[this.showIdx]['emoji-js-tab--is-active'] = false;
            this.tabviewState[this.showIdx]['emoji-js-tabview--is-active'] = false;
            this.showIdx = k;
            this.tabState[k]['emoji-js-tab--is-active'] = true;
            this.tabviewState[k]['emoji-js-tabview--is-active'] = true;
        },
        supportIE9Plus() {
            //The color of unicode-emoji-code of IE9+ is only black and white
            window.navigator.userAgent.match(/(MSIE|Trident)/i) !== null ?
                document.body.style.fontFamily = 'Segoe UI Emoji' : '';
        },
        setScrollBar() {debugger;
            const flag = window.navigator.userAgent.match(/Webkit/i) == null;
            if(!flag) return;
            let tmpDiv = document.createElement('div');
            tmpDiv.style.width = '100px';
            document.body.append(tmpDiv);
            tmpDiv.style.overflowY = 'scroll';
            
            const scrollBarWidth = 100 - tmpDiv.offsetWidth;
            document.body.remove(tmpDiv);
            const emojiBody = this.$refs.emojibody;
            emojiBody.style.width = emojiBody.offsetWidth + scrollBarWidth + 'px';
        }
    }
}