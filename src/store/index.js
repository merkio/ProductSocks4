import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
  state: {
    name:'',
    review: '',
    reviews:[],
    rating:4.5,
    premium: true,
    selectedVariant: 0,
    cart:[],
    variants: [ {
        variantColor: 'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        variantQuantity: 10,
        variantId: 2234
      },
      {
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
        variantQuantity: 0,
        variantId: 2235
      }
    ]
  },
  getters: {
    variants( state ) {
      return state.variants
    },
    selectedVariant( state ) {
      return state.selectedVariant
    },
    cart ( state )
    {
      return state.cart
    },
    reviews ( state )
    {
      return state.reviews
    }
  },
  mutations: {
    updateProduct ( state ,index)
    {
      state.selectedVariant = index
    },
    addToCart (state)
    {
      state.cart.push(state.variants[state.selectedVariant].variantId)
    },
    removeFromCart (state)
    {

      state.cart = []
    },
    updateQuantity ( state )
    {
      state.variants[state.selectedVariant].variantQuantity--;
    },
    reverseQuantity ( state )
    {
      state.variants[ 0 ].variantQuantity = 10,
      state.variants[ 1 ].variantQuantity = 0        
    },
    updateName ( state, name )
    {
      state.name = name
    },
    updateReview ( state, review )
    {
      state.review = review
    },
    updateRating ( state, rating )
    {
      state.rating = rating
    },
    onSubmit (state)
    {
      if ( state.name && state.review && state.rating )
      {
        let productReviews = {
          name: state.name,
          review: state.review,
          rating: state.rating,
        }
        state.reviews.push( productReviews )
        state.name = null,
        state.review = null,
        state.rating = null

      }
    }
  },
  actions: {},
  modules: {}
} )