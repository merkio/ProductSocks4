<template>
<v-container>
    <v-row>
        <v-col cols="12" md="5"> 
            <ProductImage />
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
            <Purchase />
            <Select />
            <Tabs />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import ProductImage from '@/components/ProductImage.vue'
import Purchase from '@/components/Purchase.vue'
import Tabs from '@/components/Tabs.vue'
import Select from '@/components/Select.vue'
export default {
    components:{
        ProductImage,
        Purchase,
        Tabs,
        Select,
        
}}
</script>

<style>

</style>