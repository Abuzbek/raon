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
    <h1 class="text-center">BEST SELLER</h1>
     <v-row>
    <v-col v-for="n in products" :key="n" cols="6" xl="2" lg="3" md="4">
      <v-card
        class="mx-auto"
      >
        <v-img
          v-ripple="{class: 'warning--text'}"
          class="white--text align-end"
          height="200px"
          :src="n.img"
        >
        </v-img>
        <v-card-subtitle class="pb-0">
          Number 10
        </v-card-subtitle>
        <v-card-text class="text--primary pb-2">
          <div>{{n.name}}</div>
          <v-row>
            <v-col class="pt-1 pb-1" v-if="n.sale" cols="12" md="auto">
              {{n.sale}}
            </v-col>
            <v-col class="pt-1 pb-1" cols="12" md="auto">
              <div :class="{'line': n.sale}">
                {{n.price}}
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="warning"
            @click="pushId(n._id)"
          >
            В корзину
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</div>
</template>

<script>
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
      products:'',
      clickedId: false
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  async asyncData({$axios}){
    const product = await $axios.$get('http://localhost:8080/api/product')
    return {product}
  },
  mounted(){
    this.products = this.product
  },
  methods:{
    pushId(id){
      if(this.clickedId){
        this.$axios.$post('http://localhost:8080/api/product/delete', {id: id})
      }
      else{
        this.$axios.$post('http://localhost:8080/api/product', {id: id})
      }
      this.clickedId = !this.clickedId
      $emit()
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
.line{
  color: gray;
  text-decoration: line-through;
}
</style>
