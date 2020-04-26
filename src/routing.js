import HelloWorld from './components/HelloWorld.vue'
import Interpolation from './components/interpolation'
import Directives from './components/directives'
import Apicall from './components/apiCall'

 export default [
    { path: '/helloworld', component: HelloWorld },
    { path: '/interpolation', component: Interpolation },
    { path: '/directives', component: Directives },
    { path: '/apicall', component: Apicall }
  ];