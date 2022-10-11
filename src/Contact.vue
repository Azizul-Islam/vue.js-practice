<template>
  <div>
    <h2>Contact Details</h2>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
    <p>Phone: {{ phone }}</p>
  </div>
</template>

<script>
export default {
    inject: ['name','email','phone']
}
</script>

<style>

</style>