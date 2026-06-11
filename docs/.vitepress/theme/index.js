import Layout from './Layout.vue'
import DrawerDemo from './components/DrawerDemo.vue'
import DialogDemo from './components/DialogDemo.vue'

export default { 
	Layout, 
    enhanceApp({ app }) {
        app.component('DrawerDemo', DrawerDemo)
		app.component('DialogDemo', DialogDemo)
    }
}