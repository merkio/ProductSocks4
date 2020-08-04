<template>
  <v-app>
    <Navbar />
    <Cart />
    <Product />
    <router-view />
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld';
  import Navbar from './components/Navbar';
  import Cart from './components/Cart';
  import Product from './components/Product';


  export default {
    name: 'App',

    components: {
      Cart,
      Navbar,
      Product
    },


    data: () => ( {
      //
    } ),
  };
</script>

<style>

</style>