import React, { Component } from 'react'
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  } from 'graphql';
  
  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return 'world';
          },
        },
      },
    }),
});

var query = '{ hello }';

graphql(schema, query).then(result => {
  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);
});

class GraphQL extends Component {
    render() {
        console.log(this.props, "Test Javacript")
        return (
            <div>
                <h3>GraphQL Example</h3>
            </div>
        )
    }
}

export default GraphQL
