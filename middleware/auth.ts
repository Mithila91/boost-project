export default defineNuxtRouteMiddleware((to, from) => {
	const isAuthenticated = false;
	if (!isAuthenticated) {
		return abortNavigation('not allowed');
	}
});
