<template>
    <div class="hello">hello {{ world }}</div>
</template>

<script>
export default {
    data() {
        return {
            world: 'vue!'
        }
    }
}
</script>

<style scoped>
.hello {
    font-size: 22px;
    line-height: 36px;
    font-weight: bold;
}
</style>
