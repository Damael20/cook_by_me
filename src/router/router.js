import { createWebHistory, createRouter} from 'vue-router'

import connectionPage from '@/pages/PageConnectionVue.vue'
import HubPage from '@/pages/PageHubVue.vue'
import RecipePage from '@/pages/PageRecipe.vue'

const routes = [
    {
        path: "/",
        name: "Page de connexion",
        component : connectionPage
    },
    {
        path: "/homepage",
        name: "Homepage",
        component: HubPage

    },
    {
        path: "/recipe/:id",
        name: "Recette",
        component: RecipePage
    }
]

const ROUTER = createRouter({
    history : createWebHistory(),
    routes,
})

export default ROUTER