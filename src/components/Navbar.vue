<template>

  <div>
      <!-- <v-app-bar
          app
          color="primary"
          dark
          height="60"
        >
    </v-app-bar> -->

    <v-app-bar
    class="app-bar-bg"
    dark
      flat
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>商品ページ</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="primary"
    >
      <v-list
      dark
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="orange--text text--accent-4"
        >
          <v-list-item router to="/">
            <v-list-item-icon>
              <v-icon small>fa-trophy</v-icon>
            </v-list-item-icon>
            <v-list-item-title>shipping</v-list-item-title>
          </v-list-item>

          <v-list-item router to="/about">
            <v-list-item-icon>
              <v-icon small>fa-info-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Details</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
   data: () => ({
       drawer: false,
   })
}
</script>

<style>
  .app-bar-bg {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
  }
</style>