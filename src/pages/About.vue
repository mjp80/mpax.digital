<template>
<div>
  <Sidebar />
  <Update />
  <RichTextFragmentRenderer :fragmentref=$page.content />
</div>
</template>
<script>

import Sidebar from '~/components/Sidebar.vue'
import Update from '~/components/Update.vue'
import RichTextFragmentRenderer from '~/components/RichTextFragmentRenderer.vue'

export default {
  components: {
    Sidebar,
    Update,
    RichTextFragmentRenderer
  },
  props: ['content']
}
</script>

<page-query>
{
  content:allContentfulFragment {
    edges {
      node {
      fragment
    }
    }
  }
}
</page-query>
