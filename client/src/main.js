import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import Users from './components/Users';

const httpLink = new HttpLink({
	// You should use an absolute URL here
	uri: 'http://localhost:3000/graphql',
});

const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

Vue.use(VueApollo);
Vue.use(VueRouter);

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
});

Vue.config.productionTip = false;


const router = new VueRouter({
	routes: [
		{
			path: '/users',
			name: 'Users',
			component: Users
		}
	],
	mode: 'history'
});




new Vue({
	provide: apolloProvider.provide(),
	router: router,
  render: h => h(App)
}).$mount('#app');
