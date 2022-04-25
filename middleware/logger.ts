export default defineNuxtRouteMiddleware((to, from) => {
	console.log('logging from middleware');
	console.log(to);
	console.log(from);
});
