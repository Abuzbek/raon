<template>
  <v-card
    class="mx-auto"
    :ripple="false"
  >
    <div v-if="sale" class="product_sale">
      SALE
    </div>
    <v-img
      style="cursor:pointer;"
      @click="selectCart()"
      v-ripple="{class: 'warning--text'}"
      class="white--text align-end"
      height="200px"
      :src="img"
    >
    </v-img>
    <v-card-subtitle class="pb-0">
        {{category}}
      </v-card-subtitle>
    <v-card-text style="cursor:pointer;" @click="selectCart()" class="text--primary pb-2">
      <div>{{name}}</div>
      
      <v-row>
        <v-col class="pt-1 pb-1 textBig" v-if="sale" cols="12" md="auto">
          {{sale}} сўм
        </v-col>
        <v-col class="pt-1 pb-1" cols="12" md="auto">
          <div :class="sale ? 'line' : 'textBig'">
            {{price}} сўм
          </div>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="warning"
        @click="selectCart()"
      >
        В корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name:"Card",
  data:()=>({
    
  }),
  props:{
    _id:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    img:{
      type:String,
      required:true,
      default:'https://aseshop.uz/uploads/default/no-image.jpg'
    },
    price:{
      type:String,
      required:true
    },
    sale:{
      type:String,
    },
    description:{
      type:String,
      required:true
    },
    category:{
      type:String,
    },
  },
  methods:{
    selectCart(){
      this.$emit('cartId', 
      {
        _id: this._id,
        name: this.name,
        img:this.img,
        price:this.price,
        sale:this.sale,
        description:this.description,
        category:this.category,
      }
      )
      // console.log(id);
    }
  }
}
</script>
<style lang="scss" scoped>
.textBig{
  font-size:19px;
  font-weight:500;
}
.product_sale{
  position: absolute;
  top:0;
  right:0;
  z-index: 5;
  padding: 10px 15px;
  background: #fb8c00;
  color:white;
  font-weight: 500;
}
.line{
  color: gray;
  text-decoration: line-through;
}
</style>