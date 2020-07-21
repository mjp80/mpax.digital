<template>
<div>
  <Sidebar />
  <Update />
  <FragmentRenderer :fragmentref=$page.content />
</div>
</template>
<script>

import Sidebar from '~/components/Sidebar.vue'
import Update from '~/components/Update.vue'
import FragmentRenderer from '~/components/FragmentRenderer.vue'

export default {
  components: {
    Sidebar,
    Update,
    FragmentRenderer
  },
  props: ['content']
}
</script>

<page-query>
{
  content:allContentfulFragment {
    edges {node {
    title
    fragment}}
  }
}
</page-query>
