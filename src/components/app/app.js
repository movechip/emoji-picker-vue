import { emojiCodes, navCodes } from './codepoints';
let tmp = [],
    tmp2 = [];
navCodes.forEach(v => { 
    tmp.push({ isShow: false }); 
    tmp2.push({ divIsShow: false }) 
});
export default {
    props: ['target', 'show'],
    data() {
        return {
            emojiCodes,
            navCodes,
            caret: 0,
            tmp,
            tmp2,
            showIdx: 0
        }
    },
    mounted() {
        this.addClickEventToTarget();
        this.setPosition();
        tmp[this.showIdx].isShow = true;
        tmp2[this.showIdx].divIsShow = true;
    },
    methods: {
        d(codepoint) {
            const html = this.target.innerHTML;
            this.target.innerHTML = html.substr(0, this.caret) + codepoint + html.substr(this.caret);
            this.caret += 2;
        },
        addClickEventToTarget() {
            this.target.addEventListener('click', () => {

                this.caret = document.getSelection().anchorOffset;
            });
        },
        setPosition() {
            let con = this.$refs.con,
                trigger = con.children[0],
                emoji = con.children[1],
                top = trigger.offsetTop + trigger.offsetHeight,
                left = trigger.offsetLeft;
            emoji.style.top = top + 'px';
            emoji.style.left = left + 'px';
        },
        emojiSwitch(k) {
            this.tmp[this.showIdx].isShow = false;
            this.tmp2[this.showIdx].divIsShow = false;
            this.showIdx = k;
            this.tmp[k].isShow = true;
            this.tmp2[k].divIsShow = true;
        }
    }
}