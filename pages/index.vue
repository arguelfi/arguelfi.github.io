<template>
  <v-layout align-center justify-center fill-height text-justify>
    <v-flex xs12 sm10 md8>
      <v-tooltip top nudge-top="5">
        <v-btn
            fixed
            dark
            fab
            bottom
            right
            color="pink"
            slot="activator"
            href="/CV.pdf"
            target="_blank"
        >
          <v-icon>save_alt</v-icon>
        </v-btn>
        <span>Download PDF</span>
      </v-tooltip>
      <div v-html="compiledMarkdown"></div>
    </v-flex>
  </v-layout>
</template>
<script>
  import marked from 'marked'
  import cv from '../static/CV.md'

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
        this.$el.querySelectorAll('del').forEach((val, key) => {
          val.classList.add('html2pdf__page-break', 'hide')
        })
      })
    }
  }
</script>

