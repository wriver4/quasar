export default {
  name: 'q-carousel-slide',
  inject: ['carousel'],
  props: {
    imgSrc: String
  },
  computed: {
    computedStyle () {
      const style = {}
      if (this.imgSrc) {
        style.backgroundImage = `url(${this.imgSrc})`
        style.backgroundSize = `cover`
        style.backgroundPosition = `50%`
      }
      if (!this.carousel.fullscreen && this.carousel.height) {
        style.maxHeight = this.carousel.height
      }
      return style
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'q-carousel-slide scroll',
      style: this.computedStyle
    }, this.$slots.default)
  },
  created () {
    this.carousel.__registerSlide()
  },
  beforeDestroy () {
    this.carousel.__unregisterSlide()
  }
}