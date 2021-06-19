import { createApp, h } from 'vue'
import HomeComponent from "./components/Home";
import BoardListComponent from "./components/BoardList";
import BoardFormComponent from "./components/BoardForm";
import NotFoundComponent from "./components/Error";

const routes = {
    '/': HomeComponent,
    '/board/list': BoardListComponent,
    '/board/form': BoardFormComponent,
    '/error': NotFoundComponent
}

const SimpleRouter = {
    data: () => ({
        currentRoute: window.location.pathname
    }),

    computed: {
        CurrentComponent() {
            return routes[this.currentRoute] || NotFoundComponent
        }
    },

    render() {
        return h(this.CurrentComponent)
    }
}

createApp(SimpleRouter).mount('#app')