export default {
  name: 'dashboardPage',
  data () {
    return {
      message: this.$store.getters.USER
    }
  },
  computed: {
    isLogIn () {
      return this.$store.getters.IS_LOGIN
    }
  }
}
