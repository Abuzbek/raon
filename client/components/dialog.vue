<template>
<div
  class="dialog"
>
  <div class="overlay" @click="$emit('dialogFalse', false)">
    <v-btn
      icon
      dark
      @click="$emit('dialogFalse', false)"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
  <v-card
  max-width="1200px"
  height="90%"
  class="dialog_fullscreen rounded-lg">
    <v-row>
        <v-col class="py-0" cols="12" md="6">
          <v-img
            alt="star Logo"
            :src="img"
            class="imgDialog"
          />
        </v-col>
        <v-col class="py-0" cols="12" md="6">
          <v-card-title>{{name}}</v-card-title>
          <v-card-text>
            <div class="category">
              <span class="mr-4">
                Category:
              </span>
              {{category}}
            </div>
            <ul>
              <li
                :class="sale ? 'line' : 'textBig'">
                <span class="mr-4">Price</span>
                {{price}} UZS
              </li>
              <li
                class="textBig"
                v-if="sale"
              >
                <span class="mr-4">Sale</span>
                {{sale}} UZS
              </li>
            </ul>
            <p class="description">
              {{description}}
            </p>
             <v-btn
              color="warning"
              @click="selectCart()"
            >
              В корзину
            </v-btn>
          </v-card-text>
        </v-col>
    </v-row>
  </v-card>
</div>
  
</template>
<script>
  export default {
    props:{
      dialog:{
        type:Boolean
      },
      _id:{
        type:String,
        // required:true
      },
      name:{
        type:String,
        // required:true
      },
      img:{
        type:String,
        // required:true,
        default:'https://aseshop.uz/uploads/default/no-image.jpg'
      },
      price:{
        type:String,
        // required:true
      },
      sale:{
        type:String,
      },
      description:{
        type:String
        // required:true
      },
      category:{
        type:String,
      },
    },
  }
</script>
<style lang="scss" scoped>
.dialog_fullscreen{
  position: fixed;
  z-index: 11;
  left: 50% ;
  top: 50%;
  transform: translate(-50%, -50%);
  // border-radius: ;
  overflow-x: hidden;
  padding-right: 5px;
}
.overlay{
  position:fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left:0;
  background: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  backdrop-filter: blur(6px);
}
.textBig{
  font-size:19px;
  font-weight:500;
}
.line{
  color: gray;
  text-decoration: line-through;
}
.dialog_fullscreen::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10em;
}
.dialog_fullscreen:hover{
  padding-right: 0px;
}
.dialog_fullscreen::-webkit-scrollbar {
  width: 0px;
}
.dialog_fullscreen:hover::-webkit-scrollbar {
  width: 5px;
}
.dialog_fullscreen::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
p.description::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10em;
}
p.description:hover{
  margin-right: 0px;
}
p.description::-webkit-scrollbar {
  width: 0px;
}
p.description:hover::-webkit-scrollbar {
  width: 10px;
}
p.description::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
p.description::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10em;
}
.imgDialog{
  width: 100%;
  height: 100%;
}
ul {
  padding-left: 0;
  padding-top:10px;
  padding-bottom:10px;
  li{
    list-style: none;
  }
}
</style>