import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Home from './Home.vue'
export default function(router){
    router.map({
        '/foo':{
            component:Foo
        },
        '/bar':{
            component:Bar
        },
        '/home':{
            component:Home
        }
    })
    router.redirect({
        '*':'/home'
    })
}
