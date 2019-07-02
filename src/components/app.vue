<template lang="pug">
div {{ hello }}
</template>

<script>
export default {
    data() {
        return {
            hello: 'hello world'
        }
    }
}
</script>

<style lang="stylus" scoped>
_color-red = blue
div
    color _color-red
</style>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>


