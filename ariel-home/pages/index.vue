<template>
  <v-layout align-center justify-center fill-height text-justify>
    <v-flex xs12 sm8 md6>
      <v-tooltip top nudge-top="5">
        <v-btn
            fixed
            dark
            fab
            bottom
            right
            color="pink"
            slot="activator"
            @click=download
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
  import html2canvas from 'html2canvas'
  import JsPDF from 'jspdf'
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
      this.html2canvas = html2canvas
    },
    methods: {
      download () {
        html2canvas(document.body, {
          ignoreElements: (element) => {
            return element.nodeName === 'FOOTER' ||
                element.classList.contains('v-tooltip__content') ||
                element.classList.contains('v-btn')
          },
          scrollY: 0
        }).then(canvas => {
          // document.body.appendChild(canvas)
          let data = canvas.toDataURL('image/png')
          let pdf = new JsPDF('landscape', undefined, 'A4')
          pdf.addImage(data, 'PNG', 0, 0, 297, 210)
          pdf.save('CVArielGuelfi.pdf')
        })
        // let pdfName = 'CVArielGuelfi'
        // let pdf = new Jspdf('p', 'pt', 'letter')
        // pdf.addHTML(document.querySelector('#app'), 10, 10)
        // pdf.save(pdfName + '.pdf')
      }
    }
  }
</script>