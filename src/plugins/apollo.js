import Vue from 'vue'
import vueApollo from 'vue-apollo'
import { ApolloClient} from 'apollo-client'
import { createHttpLink} from 'apollo-link-http'
import { InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

Vue.use(vueApollo)

const httplink = createHttpLink({uri: process.env.VUE_APP_API})

const cache = new InMemoryCache()

const apolloClient =  new ApolloClient({
    link : httplink,
    cache
})

export default new VueApollo({defaultClient: apolloClient})

