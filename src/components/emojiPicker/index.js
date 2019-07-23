import { emojiCodes, tabCodes, recentCodes } from './codepoints';
import { returnStatement } from 'babel-types';

export default {
    props: ['target', 'show', 'config'],
    data() {
        return {
            emojiCodes,
            tabCodes,
            caret: 0,
            tabState: [],
            tabviewState: [],
            showIdx: 0,
            recentCodes,
            defaultStyle: {
                width: '288px',
                height: '180px'
            }
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
        this.setStyle();
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
        setStyle() {
            if(!this.config) return;

            const width = this.config.width,
                height = this.config.height;
            width ? (this.defaultStyle.width = width): '';
            height ? this.defaultStyle.height = height : '';
            
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
        queryScrollBarWidth() {
            const el = document.createElement('div');
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.left = '0';
            el.style.visibility = 'hidden';
            el.style.width = '100px';
            el.style.height = '100px';
            document.body.appendChild(el);

            const width = el.clientWidth || el.offsetWidth;
            el.style.overflowY = 'scroll';

            const widthScrollBar = width - (el.clientWidth || el.offsetWidth);

            document.body.removeChild(el);
            return widthScrollBar;
        }
    }
}