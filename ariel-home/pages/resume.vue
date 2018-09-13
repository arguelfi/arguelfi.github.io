<template>
  <v-layout align-center justify-center fill-height text-justify>
    <v-flex xs12 sm8 md6>
      <div v-html="compiledMarkdown"></div>
    </v-flex>
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
        return marked(cv, { sanitize: true, smartLists: true })
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$el.querySelectorAll('table').forEach((val, key) => {
          val.classList.add('v-datatable', 'v-table', 'table-back', 'theme--light')
          val.removeChild(val.querySelector('thead'))
        })
      })
    }
  }
</script>