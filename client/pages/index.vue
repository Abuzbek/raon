<template>
<div>
  <header>
     <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="n in banners"
        :key="n"
        :style="`background : url(${require(`../assets/images/${n}`)})no-repeat center center / cover;`"
        class="swiperSlide"
      >
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination swiperPag" slot="pagination"></div>
  </header>
  <v-container class="pt-15">
    <Dialog v-bind="productPush" v-if="dialog" @dialogFalse="dialogFalse()"/>
    <h1 class="text-center">BEST SELLER</h1>
     <v-row>
    <v-col v-for="n in products" :key="n" cols="6" xl="2" lg="3" md="4">
      <Card  v-bind="n" @cartId="selectId" />
    </v-col>
  </v-row>
  </v-container>
</div>
</template>
<script>
import Card from '../components/card'
import Dialog from '../components/dialog'
import SwiperCore , {Pagination, EffectFade} from 'swiper'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Pagination, EffectFade]);
export default {
  data() {
    return {
      banners: [ '1.jpg', '2.jpg', '3.jpg' ],
      swiperOptions: {
        loop:true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // Some Swiper option/callback...
      },
      dialog:false,
      products:'',
      productPush:null,
      clickedId: false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Dialog,
    Card
  },
  directives: {
    swiper: directive
  },
  async asyncData({$axios}){
    const product = await $axios.$get('http://localhost:8080/api')
    return {product}
  },
  mounted(){
    this.products = this.product
  },
  methods:{
    // pushId(id){
    //   if(this.clickedId){
    //     this.$axios.$post('http://localhost:8080/api/product/delete', {id: id})
    //   }
    //   else{
    //     this.$axios.$post('http://localhost:8080/api/product', {id: id})
    //   }
    //   this.clickedId = !this.clickedId
    // }
    selectId(select){
      console.log(select);
      this.productPush = select
      this.dialog = !this.dialog
    },
    dialogFalse(select){
      this.dialog = select
    }
  }

}
</script>

<style lang="scss">
.swiperSlide{
  width: 100%;
  height: 90vh;
}

header{
  position: relative;
  padding-bottom: 60px;
  .swiperPag{
    position: absolute;
    bottom: 10px;
    width: 100%;
    z-index:1 !important;
    .swiper-pagination-bullet{
      margin: 0px 5px;
      width: 10px;
      height: 10px;
      background-color: transparent;
      border: 2px solid #a5a5a5;
      border-radius: 6px;
      outline: 1px solid transparent;
      cursor: pointer;
      -webkit-transition: .3s ease-in-out;
      transition: .3s ease-in-out;
      opacity:1 !important;
      &-active{
        border: 2px solid #000;
        cursor: pointer;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
      }
      
    }
  }
}
</style>
