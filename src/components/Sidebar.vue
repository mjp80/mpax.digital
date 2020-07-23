<template>
  <section class="sidebar">
<nav>
  <ul>
    <li>Home</li>
    <li>About</li>
  </ul>
  <RichTextFragmentRenderer :fragmentref=$static.contacts />
</nav>
  </section>
</template>

<static-query>
{
contacts: allContentfulContactCard {
  edges {
    node {
      id 
      email
      mobilePhone
      twitter
      linkedIn
    }
  }
}
}
</static-query>

<script>
import ContactCard from '~/components/ContactCard.vue'
import RichTextFragmentRenderer from '~/components/RichTextFragmentRenderer.vue'

export default {
  components: {
    ContactCard,
    RichTextFragmentRenderer
  }
}
</script>

<style scoped>
.sidebar {
  width: 150px;
  background-color:beige;
}
ul {list-style-type: none;}
li {padding:20px}
</style>