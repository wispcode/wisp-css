import Layout from './Layout.vue'
import DrawerDemo from './components/DrawerDemo.vue'
export default { 
	Layout, 
    enhanceApp({ app }) {
        app.component('DrawerDemo', DrawerDemo)
    }
}