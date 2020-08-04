<template>
    <v-content>
        <h1 class="display-2 ml-5 mb-10">Socks</h1>
        <p class="display-5" v-if="inStock">
            <v-icon class="mr-2">far fa-thumbs-up</v-icon>
                in Stock
        </p>
        <p class="display-5" v-else>
            <v-icon class="mr-2">fas fa-heart-broken</v-icon>
                out of Stock
        </p>

    </v-content>
</template>

<script>
    export default {
        data: () => ( {

        } ),
        computed: {
            inStock() {
                return this.$store.getters.variants[ this.$store.getters.selectedVariant ].variantQuantity 
                }
            },       

    }
</script>

<style>

</style>