<template>
    <div id="sketch"></div>
</template>
<script>
export default {
    data() {
        return { p5js: null };
    },
    created() {
        this.p5js = new p5(sketch);
    },
    destroyed() {
        this.p5js.remove();
    }
}
</script>
<style>
#sketch {
    margin-left: -64px;
    overflow: visible;
    height: 96px;
}
</style>
