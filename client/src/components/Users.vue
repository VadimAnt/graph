<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in users">
        {{ index + 1 }}
        {{ item.email }}
        {{ item.id }}
        {{ item.fname }}
      </li>
    </ul>
  </div>
</template>

<script>

import gql from 'graphql-tag';
const users = gql`
  query {
    users{
      id
      email
      fname
    }
  }
`;

export default {
  name: 'Users',
  props: {
    msg: String
  },
  data: () => {
      return {
          users: []
      }
  },
  apollo: {
      // Local state 'posts' data will be updated
      // by the GraphQL query result
      users: {
          // GraphQL query
          query: users,
          // Will update the 'loading' attribute
          // +1 when a new query is loading
          // -1 when a query is completed
          loadingKey: 'loading',
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
