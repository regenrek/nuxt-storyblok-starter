import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      isLocalModalOpen: false,
      isLocalSubModalOpen: false,
      currentScreen: 'default'
    }
  },
  computed: {
    ...mapState({
      showModal: state => state.modal.showModal,
      showSubModal: state => state.modal.showSubModal,
      modalByName: state => state.modal.modalByName
    })
  },
  methods: {
    ...mapActions({
      openModalGlobal: 'modal/openModal',
      closeModalGlobal: 'modal/closeModal',
      openSubModalGlobal: 'modal/openSubModal',
      closeSubModalGlobal: 'modal/closeSubModal',
      openSuccessModalGlobal: 'modal/openSuccessModal',
      setModalOptions: 'modal/setModalOptions'
    }),
    isModalOpen (type) {
      // first check if we have a modalByName open if not check if local Modal is open
      return (type && this.modalByName === type) || this.isLocalModalOpen
    },
    isSubModalOpen () {
      return this.isSubModalOpen
    },
    closeModal () {
      this.isLocalModalOpen = false
      this.closeModalGlobal()
    },
    openModal (type, options) {
      this.isLocalModalOpen = true
      this.openModalGlobal({ name: type, options })
    },
    openSubModal () {
      this.isLocalSubModalOpen = true
      this.openSubModalGlobal()
    },
    closeSubModal () {
      this.isLocalSubModalOpen = false
      this.closeSubModalGlobal()
    },
    openSuccessModal (options) {
      this.isLocalModalOpen = true
      this.openSuccessModalGlobal(options)
    },
    modalStep (current) {
      return this.currentScreen === current
    },
    toModalStep (screen, options) {
      this.setModalOptions(options)
      this.currentScreen = screen
    }
  }
}
