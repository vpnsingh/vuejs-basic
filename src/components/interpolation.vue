<template>
    <div class="container text-left">
        <p>The most basic form of data binding is text interpolation using the “Mustache” syntax (double curly braces):</p>
        <ul>
            <li>App Name is <b>{{appName}}</b></li>
            <li>{{ name === 'Stuart' ? 'Stuart' : 'stranger' }}</li>
            <li>Random Math : {{ Math.sqrt(16) * Math.random() }}</li>
            <li>1975*5363 : {{ 1975*5363}}</li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'Interpolation',
    data(){
        return{
            appName: "Vuejs Basic Session",
            name: "Stuart"
        }
    }
}
</script>

<style scoped>

</style>