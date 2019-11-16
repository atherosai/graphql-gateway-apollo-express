# GraphQL gateway boilerplate

Starter kit for building API gateway with GraphQL

## Setup

You can run the code by installing dependencies with

``` bash
npm i
```

and running development environment

``` bash
npm run dev
```

GraphQL playground is then accesible at

[http://localhost:8000/graphql](http://localhost:8000/graphql)

## Technologies

* Node.js
* Apollo server
* Official graphql-js schema builder
* Full TypeScript support
* Express.js
* Eslint, Nodemon, Dotenv, Eslint, Prettier, Jest

## This is supporting code for the following articles on our [blog](https://atheros.ai/blog)

* [Input Object Type as an Argument for GraphQL Mutations and Quries](https://atheros.ai/blog/input-object-type-as-an-argument-for-graphql-mutations-and-queries)
* [GraphQL quick tip: How to pass variables in GraphiQL](https://atheros.ai/blog/graphql-quick-tip-how-to-pass-variables-in-graphiql)
* [GraphQL Scalars and their input and result coercion](https://atheros.ai/blog/graphql-scalars-and-their-input-and-result-coercion)
* [How to use GraphQL enum type and its best practices](https://atheros.ai/blog/how-to-use-graphql-enum-type-and-its-best-practices)
* [How to design GraphQL custom scalars](https://atheros.ai/blog/how-to-design-graphql-custom-scalars)
* [How to use GraphQL aliases](https://atheros.ai/blog/how-to-use-graphql-aliases)
* [How to query your schema with GraphQL fragments](https://atheros.ai/blog/how-to-query-your-schema-with-graphql-fragments)
* [GraphQL List - How to use arrays in GraphQL schema](https://atheros.ai/blog/graphql-list-how-to-use-arrays-in-graphql-schema)

## Notes

* secrets folder should be encrypted using some vault solutions like Google KMS
* https/www redirects should be performed in reverse proxy
* this starter kit has minimal setup and is continously evolving