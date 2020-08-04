<template>
    <v-card class="my-12">
        <v-tabs v-model="tab" background-color="primary" centered dark icons-and-text show-arrows>
            <v-tabs-slider></v-tabs-slider>

            <v-tab>
                Reviews
                <v-icon>find_in_page</v-icon>
            </v-tab>

            <v-tab>
                Make a Review
                <v-icon>rate_review</v-icon>
            </v-tab>

            <v-tab>
                Shipping
                <v-icon>fas fa-trophy</v-icon>
            </v-tab>

            <v-tab>
                Details
                <v-icon>fas fa-info-circle</v-icon>
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <v-card flat>
                    <v-list shaped>
                        <v-list-item-group v-model="item" color="primary">
                            <v-list-item v-for="(review, i) in this.$store.getters.reviews" :key="i">
                                <v-list-item-content>
                                    <v-list-item-icon class="ml-4">
                                        <v-icon class="mr-5" large>person</v-icon>
                                        <v-list-item-title v-text="review.name" ></v-list-item-title>
                                    </v-list-item-icon>
                                    <v-list-item-icon class="ml-4">
                                        <v-icon class="mr-5" large>far fa-comment-dots</v-icon>
                                        <v-list-item-title v-text="review.review"></v-list-item-title>
                                    </v-list-item-icon>
                                    <v-list-item-icon>
                                        <v-icon class="mr-5" large>far fa-handshake</v-icon>
                                        <span class="primary--text text--lighten-2  " v-text="review.rating">
                                        </span>
                                        <v-rating v-model="review.rating" color="yellow darken-3" background-color="grey darken-1" empty-icon="$ratingFull" half-increments hover></v-rating>
                                    </v-list-item-icon>

                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card flat>
                    <Form />
                </v-card>
            </v-tab-item>


            <v-tab-item>
                <v-card flat>
                    <v-card-text v-text="shipping"></v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card flat v-for="(detail, i) in details" :key="i">
                    <v-card-text class="text-decoration-underline text-h5">
                        <ul>
                            <li v-text="detail"></li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-tab-item>

        </v-tabs-items>
    </v-card>
</template>

<script>
    import Form from '@/components/Form.vue'
    export default {
        data: () => ( {
            item: 1,
            items: [ {
                    text: 'Real-Time',
                    icon: 'mdi-clock'
                },
                {
                    text: 'Audience',
                    icon: 'mdi-account'
                },
                {
                    text: 'Conversions',
                    icon: 'mdi-flag'
                },
            ],
            tab: null,
            details: [
                '80% cotton',
                '20% polyester',
                'Gender-neutral'
            ]
        } ),
        computed: {
            premium() {
                return this.$store.state.premium
            },
            shipping() {
                if ( this.premium ) {
                    return 'Free'
                } else {
                    return 2.99
                }
            },
        },
        components: {
            Form,
        }
    }
</script>