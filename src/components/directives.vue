<template>
    <div class="container text-left">
        <p>Directives, are basically like HTML attributes which are added inside templates. 
            They all start with v- , to indicate that's a Vue special attribute.</p>
        <div class="data-block">
            <h3>v-text</h3>
            <code>v-text="info"</code>
            <p v-text="info"></p>
        </div> 
        <div class="data-block">
            <h3>v-once</h3>
            <code>&lt;p v-once&gt;</code>
            <p v-once>{{info}}</p>
        </div>    
        <div class="data-block">
            <h3>v-html</h3>
            <p>There are cases however where you want to output HTML and make the browser interpret it.</p>
            <code>v-html="htmldata"</code>
            <p v-html="htmldata"></p>
        </div> 
        <div class="data-block">
            <h3>v-bind</h3>
            <p>Interpolation only works in the tag content. You can't use it on attributes.</p>
            <code>v-bind:href="url"</code>
            <p><a v-bind:href="url">visit this link</a></p>
        </div>  
        <div class="data-block">
            <h3>Two-way binding using v-model</h3>
            <p>v-model lets us bind a form input element for example, and make it change the Vue data
                property when the user changes the content of the field:.</p>
            <code>v-model="message"</code>
            <div>
                <input v-model="message" placeholder="Enter a message">
                <p>Message is: {{ message }}</p>
            </div>
        </div>
        <div class="data-block">
            <h3>Conditionals using v-if</h3>
            <p>There are dedicated directives that allow you to perform more organized conditionals: v-if ,
                v-else and v-else-if.</p>
            <code>v-if="isAvailable"</code>
            <p v-if="isAvailable">Data is available</p>
        </div> 
        <div class="data-block">
            <h3>Loops using v-for</h3>
            <p>v-for allows you to render a list of items. Use it in combination with v-bind to set the
                properties of each item in the list</p>
            <code>v-for="item in items"</code>
            <ul>
                <li v-bind:key="item" v-for="item in items">{{ item }}</li>
            </ul>
        </div>
        <div class="data-block">
            <h3>Events using v-on</h3>
            <p>v-on allows you to listen to DOM events, and trigger a method when the event happens.
                Here we listen for a click event:</p>
            <code>v-on:click="callFunction"</code>
            <br><button class="btn btn-primary btn-sm" v-on:click="onCall('by user')">Click Me</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Directives",
        data() {
            return{
                info : "info var value",
                htmldata: "<b><u>HTML Content</u></b>",
                url: "https://vuejs.org/",
                message: "",
                isAvailable: true,
                items : ["Angular","React","Vue"],
            }
        },
        methods: {
            onCall(data){
                alert("Button Click :" + data)
            }
        }        
    }
</script>

<style scoped>
    .data-block{
        padding: 5px;
        margin: 5px 0;
        border-bottom: 1px solid #cdcdcd;
    }
</style>