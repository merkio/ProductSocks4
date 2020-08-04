<template>
 <v-container>
     <v-row>
         <v-col cols="12">
                     <div class="text-right">
                         <v-btn rounded dark class="teal accent-4">
                             Cart[{{this.$store.getters.cart.length}}]
                         </v-btn>
                     </div>
             </v-col>
     </v-row>
 </v-container>
</template>

<script>
export default {


}
</script>

<style>

</style>