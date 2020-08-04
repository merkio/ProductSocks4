<template>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required prepend-icon="person"></v-text-field>

        <v-textarea v-model="review" :rules="reviewRules" label="Review" required prepend-icon="rate_review"></v-textarea>

        <v-card-text>
            <h4 class="grey--text">
                <v-icon small>fa fa-star</v-icon>
                Rating
            </h4>
            <span class="primary--text text--lighten-2  mr-2">
                ({{ rating }})
            </span>
            <v-rating v-model="rating" color="yellow darken-3" background-color="grey darken-1" empty-icon="$ratingFull" half-increments hover></v-rating>
        </v-card-text>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
            Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
            Reset Form
        </v-btn>

        <v-btn color="warning" class="mt-5" @click="resetValidation">
            Reset Validation
        </v-btn>

        <div class="mt-10 text-center">
            <v-btn class="teal accent-3" type="submit" dark shaped>Submit</v-btn>
        </div>
    </v-form>
</template>

<script>
    export default {
        data: () => ( {
            valid: true,
            nameRules: [
                v => !!v || 'Name is required',
                v => ( v && v.length <= 10 ) || 'Name must be less than 10 characters',
            ],
            reviewRules: [
                v => !!v || 'Review is required',
                v => ( v && v.length >= 1 ) || 'Review must be valid',
            ],
        } ),
        computed: {
            name: {
                get(){
                    return this.$store.state.name
                },
                set( value ) {
                    this.$store.commit( 'updateName', value )
                }
            },
            review: {
                get(){
                    return this.$store.state.review
                },
                set( value ) {
                    this.$store.commit( 'updateReview', value )
                }
            },
            rating: {
                get(){
                    return this.$store.state.rating
                },
                set( value ) {
                    this.$store.commit( 'updateRating', value )
                }
            }
        },

        methods: {
            validate() {
                this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()

            },
            onSubmit() {
                this.$store.commit( 'onSubmit' )
            }
        },
    }
</script>