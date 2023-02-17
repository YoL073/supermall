<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  data() {
    return {}
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { Swiper, SwiperItem },
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>
