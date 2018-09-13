<template>
  <v-app>
    <v-toolbar fixed app color="primary" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <v-flex
          primary
          lighten-2
          py-3
          px-0
          text-xs-center
          white--text
          xs12
      >
        &copy;2018 — <strong>Ariel G&#252;elfi</strong>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Ariel G\u00FCelfi - Sr Software Developer'
      }
    }
  }
</script>
