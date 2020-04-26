<template>
    <nav class="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
    <img class="navbar-brand" src="../assets/vuejs-wide.png" id="logo_custom" width="10%"  alt="logo">
    <button class="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon "></span>
    </button>
        <div class="collapse navbar-collapse " id="collapsibleNavbar">
            <ul class="navbar-nav m-auto ">
                <li class="nav-item">
                    <router-link to="/interpolation" class="nav-link">Interpolation</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/directives" class="nav-link">Directives</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/apicall" class="nav-link">Api Call</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/helloworld" class="nav-link">Hello World & Props</router-link>
                </li>  
            </ul>
            <!-- <form class="form-inline ml-auto">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> -->
        </div>  
    </nav>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

.custom-navbar{box-shadow: 0px 0px 10px #eee; z-index:5;background-color: #fff;}
.nav-link{color: #32475E !important;}
.custom-toggler.navbar-toggler {border-color: #32475E;}
.custom-toggler .navbar-toggler-icon {background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(247,32,78, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");}
.custom-toggler .navbar-toggler-icon{width: 18px!important;}
.custom-toggler:hover{border-color: rgb(255,255,255); background-color: #32475E;}
.navbar-toggler-icon:hover{background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");}#logo_custom{margin-top: -6px;}
@media only screen and (max-width: 760px) { #logo_custom{width: 40%;}}

</style>