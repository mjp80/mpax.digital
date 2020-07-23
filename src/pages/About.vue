<template>
<Layout>
<div>
<RichTextFragmentRenderer :fragmentref=$page.about />
<Update />
</div>
</Layout>
</template>
<script>

import Update from '~/components/Update.vue'
import RichTextFragmentRenderer from '~/components/RichTextFragmentRenderer.vue'
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Update,
    Layout,
    RichTextFragmentRenderer
  },  
  metaInfo() {
    return {
      title: this.$page.about.edges[0].node.title
    }
  }
}
</script>

<page-query>
query{
  about:allContentfulFragment(filter: { title: { eq: "About" }}) {
    edges {
      node {
      fragment
      title
    }
    }
  }
}
</page-query>