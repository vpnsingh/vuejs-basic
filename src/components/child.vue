<template>
    <div class="container">
        <h3>Child Component</h3>
        <p>Course : {{ course }}</p>
        <p>Version : {{ version }}</p>
        <p>Ratings : {{ rating }}</p>
    </div>
</template>

<script>
    export default {
        name: "Child",
        props: {
            course : String,
            version: String,
            rating: String
        }
    }
</script>

<style scoped>

</style>