<template>
    <v-card align="center" justify="center" class="mt-12">
        <v-img :src="this.$store.getters.variants[this.$store.getters.selectedVariant].variantImage"  alt="靴下の写真" height="500" width="400"></v-img>
    </v-card>
</template>

<script>
export default {
    }

</script>

<style>

</style>