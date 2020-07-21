<template>
<div v-html="richtextToHTML"></div>




</template>
<script>

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
 props: ['fragmentref'],
 methods: {
    richtextToHTML (content) {
        console.log(fragmentref.edges.node)
      return documentToHtmlString(content)
    }
  }
}
</script>