<template>
<div v-html="richtextToHTML(fragmentref)"></div>
</template>
<script>

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
 props: ['fragmentref'],
 methods: {
    richtextToHTML (content) {
      if (typeof content.edges[0] !== 'undefined') {
      return documentToHtmlString(content.edges[0].node.fragment) 
      }
      else {
        return 'Content not found.'
      }
    }
  }
}
</script>