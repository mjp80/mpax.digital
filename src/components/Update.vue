<template>
<div>
  <h2>Latest updates</h2>
    <div v-for="edge in $static.update.edges" :key="edge.node.id">
      <h3>{{ edge.node.created}} - {{ edge.node.title }}</h3>
      <div v-html="richtextToHTML(edge.node.content)">
        </div>
    </div>
</div>
</template>

<static-query>
{
  update:allContentfulUpdate(sortBy:"created") {
    edges {
      node {
        title
        created(format:"MMMM Do, YYYY")
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

