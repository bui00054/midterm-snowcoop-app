import mapView from '../../shared/map-view/map-view.component.vue'

export default {
  name: 'dashboardPage',
  components: {
    mapView
  },
  data () {
    return {
      message: this.$store.getters.USER,
      adddressList: null
    }
  },
  computed: {
    isLogIn () {
      return this.$store.getters.IS_LOGIN
    }
  },
  mounted () {
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
      this.addressList = addressList
    })
  }
}