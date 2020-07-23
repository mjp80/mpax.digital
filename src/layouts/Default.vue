<template>
  <div>
     <nav>
       <ul>
      <li><g-link to="/">Homepage</g-link></li>
      <li><g-link to="/about/">About this site</g-link></li>
      </ul>
    </nav>
    <h1>Martin Paton's minimum viable website</h1>
    <slot />
    </div>
</template>

<script>
export default {
  metaInfo: {
    meta: [
      { name: 'author', content: 'Martin Paton' },
      { name: 'description', content: "Martin Paton/'s minimum viable website"},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
</script>