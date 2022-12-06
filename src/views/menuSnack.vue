<template>
    <div>
        <img src="../assets/ubi.jpg" alt="Ubi Goreng">
        <h2>Ubi Goreng Rp.10000</h2>
    </div>
    <div>
        <img src="../assets/tempe.jpg" alt="Tempe Goreng">
        <h2>Tempe Goreng Rp.15000</h2>
    </div>
    <div>
        <img src="../assets/tahu.jpg" alt="Tahu Goreng">
        <h2>tahu Goreng Rp.15000</h2>
    </div>
</template>

<script>
export default {
    menu:'menuSnack',
    data () {
        return {
            ubi:10000,
            tempe:15000,
            tahu:15000
        }
    },
    methods:{
 
}
}
</script>

<style lang="scss" scoped>

</style>