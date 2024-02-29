import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { setContext } from '@apollo/client/link/context'
import { createHttpLink } from '@apollo/client/link/http'
import { ApolloClient, InMemoryCache, ApolloProvider, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import 'bootstrap/dist/css/bootstrap.min.css'

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('authorization')
    return {
        headers: {
            ...headers,
            authorization: token ? `bearer ${token}` : null,
        },
    }
})

const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
})

const wsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://localhost:4000',
    })
)

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    authLink.concat(httpLink),
)

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}><App /></ApolloProvider>,
)
