<template>
    <div >
                <v-content 
                v-for="(variant, index) in $store.getters.variants"
                 :key="index"                 
                 >
                    <v-badge :value="hover" color="teal accent-4" 
                    :content="'残り' + variant.variantQuantity" 
                    right transition="slide-x-transition">
                        <v-hover v-model="hover">
                            <div class="color-box mb-5"
                              :style="{backgroundColor: variant.variantColor}"
                              @mouseover="updateProduct(index)"
                              ></div>
                        </v-hover>
                    </v-badge>

                </v-content>

                    <v-btn class="ml-2 mt-2" rounded  dark  color="teal accent-3"
                    :disabled="!inStock"
                    @click="addToCart(); handleClick(); updateQuantity()"
                    >Add to Cart</v-btn>

                    <v-btn class="ml-2 mt-2" rounded  dark  color="amber accent-3"
                    @click="removeFromCart(); handleClick2(); reverseQuantity()"
                    >Remove from Cart</v-btn>
    </div>
</template>

<script>
import {Sampler} from 'tone';
import A1 from '../assets/発見効果音inDQ.mp3'
import A2 from '../assets/DQnoroi.mp3'

    export default {
        data: () => ( {
            hover: false,
            isLoaded:false,
        } ),
        methods:{
            updateProduct(index){
                this.$store.commit('updateProduct',index)
            },
            addToCart(){
                this.$store.commit('addToCart')
            },
            removeFromCart(){
                this.$store.commit('removeFromCart')
            },
            handleClick(){
                this.sampler.triggerAttack('A1');
            },
            handleClick2(){
                this.sampler.triggerAttack('A2');
            },
            updateQuantity(){
                this.$store.commit('updateQuantity')
            },
            reverseQuantity(){
                this.$store.commit('reverseQuantity')
            }
        },
        computed: {
            inStock() {
                return this.$store.getters.variants[ this.$store.getters.selectedVariant ].variantQuantity 
                }
            },       
            created(){
                this.sampler = new Sampler({
                    A1,A2
                },{
                    onload: () => {
                        this.isLoaded = true
                    }
                }).toMaster();
            }
    }
</script>

<style scoped>
    .color-box {
        height: 50px;
        width: 50px;
    }
</style>