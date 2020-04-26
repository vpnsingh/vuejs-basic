<template>
    <div class="container">
        <h3>Data From API</h3>
        <div class="table-responsive" v-if="postData">
            <table class="table table-bordered">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                <tr v-bind:key="data.id" v-for="data in postData">
                    <td>{{data.id}}</td>
                    <td>{{data.title}}</td>
                    <td>{{data.body}}</td>
                </tr>
            </table>
        </div>
        <div v-else>
            <p>Hold on... we are fetching data :)</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data () {
            return {
                postData: null
            }
        },
        mounted () {
            axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.postData = response.data
            })
        }
    }
</script>

<style scoped>

</style>