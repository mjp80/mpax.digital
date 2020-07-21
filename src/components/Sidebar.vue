<template>
  <section class="sidebar">
<nav>
  <ul>
    <li>Home</li>
    <li>About</li>
    <ContactCard />
  </ul>
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

export default {
  components: {
    ContactCard
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