const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema')

const app = express()

app.get('/', (req, res) => {
    res.send("hi")
})

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Listening');
})

