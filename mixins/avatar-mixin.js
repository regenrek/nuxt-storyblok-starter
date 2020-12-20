import ModalMixin from '~/mixins/modal-mixin'

const MAX_IMAGE_SIZE = 1000000
const S3_API_URL =
  'https://dev-vhbackendstack-devvhbucketd8badb77-hrr14h7v6zx.s3.eu-central-1.amazonaws.com/public/'

const STORAGE_URL = '/storage/uploadimage'

export default {
  data() {
    return {
      imageName: null,
      imageBase64: null,
      imageBlob: null,
      contentType: null
    }
  },
  mixins: [ModalMixin],
  computed: {
    apiUrl() {
      return S3_API_URL
    },
    isUserProfile() {
      return this.$route.name === 'user-profile-edit'
    }
  },
  methods: {
    onFileSelected(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }

      this.imageName = files[0].name

      const reader = new FileReader()
      reader.onload = (e) => {
        this.contentType = e.target.result.substring(
          0,
          e.target.result.indexOf(';')
        )
        this.contentType = this.contentType.substring(
          this.contentType.indexOf(':') + 1
        )
        if (
          !e.target.result.includes('data:image/jpeg') &&
          !e.target.result.includes('data:image/png')
        ) {
          return alert('Wrong file type - JPG/PNG only.')
        }
        if (e.target.result.length > MAX_IMAGE_SIZE) {
          return alert('Image is too large - 1Mb maximum')
        }
        this.imageBase64 = e.target.result
      }
      reader.readAsDataURL(files[0])
    },

    getBlobFromLocalImage() {
      const binary = atob(this.imageBase64.split(',')[1])
      const array = []
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
      }
      const blobData = new Blob([new Uint8Array(array)], {
        type: this.contentType
      })
      return blobData
    },

    resetLocalImage() {
      this.imageName = null
      this.imageBase64 = null
      this.contentType = null
    },

    async deleteImage(image) {
      //await Storage.remove(image.replace(this.apiUrl, ''))
      return ''
    },

    async uploadImage() {
      return 'tbd'
      // try {
      //   const res = await Storage.put(
      //     this.$uuid.v1() + '_' + this.imageName,
      //     this.getBlobFromLocalImage(),
      //     {
      //       contentType: this.contentType
      //     }
      //   )
      //   const avatarUrl = this.apiUrl + res.key
      //   return avatarUrl
      // } catch (error) {
      //   console.error(error)
      // }
    },

    async updateImage(image) {
      return await Promise.all([
        this.deleteImage(image),
        this.uploadImage()
      ]).then((result) => {
        return result[1]
      })
    },

    async processImage(image) {
      // if (!this.imageBase64 && this.avatar) {
      //   return image
      // } else if (!this.imageBase64 && !this.avatar) {
      //   return this.deleteImage(image)
      // } else if (this.imageBase64 && this.avatar && image) {
      //   return await this.updateImage(image)
      // } else {
      //   return await this.uploadImage(image)
      // }
    },

    async uploadImage2(imageAsBlob) {
      try {
        const type = '.' + imageAsBlob.type.replace('image/', '')
        // const res = await Storage.put(
        //   this.$uuid.v1() + '_' + type,
        //   imageAsBlob,
        //   {
        //     contentType: this.contentType
        //   }
        // )
        //const avatarUrl = this.apiUrl + res.key
        //return avatarUrl
      } catch (error) {
        console.error(error)
      }
    },

    async updateImage2(imageAsBlob) {
      return await Promise.all([
        // this.deleteImage(this.avatar)
        //this.uploadImage2(imageAsBlob)
      ]).then((result) => {
        return result[1]
      })
    },

    async processAvatar(blob) {
      let data = new FormData()
      data.append('file', blob)
      try {
        const resp = await this.$axios.$post(STORAGE_URL, data, {
          headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`
          },
          timeout: 30000
        })
        return this.apiUrl + resp.filename
      } catch (error) {
        console.error(error)
        return false
      }
    }
  }
}
