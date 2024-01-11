export default defineNuxtRouteMiddleware((to, from) => {
    const userUsLoggedIn = false
    if (!userUsLoggedIn) {
        return navigateTo({
            path: "/login" 
        })
    }
})
