<template>
<layout>
<RichTextFragmentRenderer :fragmentref=$page.content />
</layout>
</template>
<script>

import RichTextFragmentRenderer from '~/components/RichTextFragmentRenderer.vue'
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    RichTextFragmentRenderer
  },
  metaInfo() {
    return {
      title: this.$page.content.edges[0].node.title
    }
  }
}
</script>

<page-query>
{
  content:allContentfulFragment(filter: { title: { eq: "Introduction" }}) {
    edges {
      node {
      fragment
      title
    }
    }
  }
}
</page-query>
