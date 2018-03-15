<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in users">
        {{ index + 1 }}
        {{ item.email }}
        {{ item.id }}
        {{ item.fname }}
        {{ item.lname }}
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
      lname
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
      users: {
          query: users,
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
