  
const app = Vue.createApp({
  data: () => ({
      users: [],
  }),
  methods: {
      getUsers(){
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => {
              return res.json()
          })
          .then(data => {
              this.users = data;
          })
          .catch(err =>{
              console.log(err)
          })
      }
  }
})

const vm = app.mount('#app')