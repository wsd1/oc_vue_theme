<template>

    <div class="column">

      <h2>Log In</h2>
      <p>Log in to your account to get some great quotes.</p>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <input 
          type="text" 
          class="form-control"
          placeholder="Enter your email"
          v-model="credentials.email"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="credentials.password"
          @keyup.enter="submit"
        >
      </div>
      <button class="btn btn-primary" @click="submit" >Access</button>
    </div>







  

</template>

<script>
import auth from '../../app/auth'

export default {

  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      error: ''
    }
  },

  methods: {

    submit() {

      var credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }

      auth.login(this, credentials, 'secretquote')

    }
  }
  
}
</script>