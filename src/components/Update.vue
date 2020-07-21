<template>
  <div class="contact">
    <div v-for="edge in $static.update.edges" :key="edge.node.id">
      <h2>{{ edge.node.createdAt}} - {{ edge.node.title }}</h2>
      <div v-html="richtextToHTML(edge.node.content)"></div>
    </div>
  </div>
</template>

<static-query>
{
  update:allContentfulUpdate {
    edges {
      node {
        title
        createdAt(format:"MMMM Do, YYYY")
        content
      }
    }
  }
}

</static-query>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content)
    }
  }
}
</script>

<style scoped>

.thumb {border-radius:150px; height:200px}

</style>

