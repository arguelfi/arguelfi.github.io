<template>
  <v-layout>
    <section>
      <v-layout
          column
          align-center
          justify-center
          class="white--text"
      >
        <div v-html="compiledMarkdown"></div>
      </v-layout>
    </section>
  </v-layout>
</template>

<script>
  import marked from 'marked'
  import cv from './CV.md'

  export default {
    head: {
      title: 'CV - Ariel G\u00FCelfi'
    },
    computed: {
      compiledMarkdown: function () {
        console.debug(cv)
        return marked(cv, { sanitize: true })
      }
    }
  }
</script>