<template>
  <div class="contact">
    <div v-for="edge in $static.author.edges" :key="edge.node.id">
     <g-image :src="edge.node.thumbNail.file.url" class="thumb" />
      <h2>{{ edge.node.contactDetails.email }}</h2>
    </div>
  </div>
</template>

<static-query>
{
author: allContentfulAuthor{
  edges {
    node {
      firstname
      id
      lastname
      thumbNail: image {
        file {
          fileName
          url
        }
      }
      contactDetails: contact {
        linkedIn
        email
        twitter
        mobilePhone
      }
    }
  }
}
}
</static-query>

<style scoped>

.thumb {border-radius:150px; height:200px}

</style>