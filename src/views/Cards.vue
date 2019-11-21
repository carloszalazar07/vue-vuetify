<template>
    <div>
        <v-container>

            <!-- <v-layaout row wrap>
                <v-flex xs12 md4>
                    <v-card class="mx-auto">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">

                        </v-img>

                        <v-card-title>
                            <h2>Lorem, ipsum dolor.</h2>
                        </v-card-title>

                        <v-card-text>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi incidunt minima neque suscipit voluptates qui sint aspernatur aperiam! Dolore, vero! Iste ratione consequatur asperiores? Quidem, natus? Consequuntur, neque rem?</p>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn text color="deep-purple accent-4">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>

                <v-flex xs12 md6>
                    <v-card class="mx-auto">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">

                        </v-img>

                        <v-card-title>
                            <h2>Lorem, ipsum dolor.</h2>
                        </v-card-title>

                        <v-card-text>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi incidunt minima neque suscipit voluptates qui sint aspernatur aperiam! Dolore, vero! Iste ratione consequatur asperiores? Quidem, natus? Consequuntur, neque rem?</p>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn text color="deep-purple accent-4">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layaout> -->

            <v-row>
                <v-col cols="12" md="4">
                    <v-card class="mx-auto">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-container>
                                <v-row>
                                    <v-col>
                                        <span class="headline white--text">Hola</span>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-img>

                        <v-card-title>
                            <h2>Lorem, ipsum dolor.</h2>
                        </v-card-title>

                        <v-card-text>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi incidunt minima neque suscipit voluptates qui sint aspernatur aperiam! Dolore, vero! Iste ratione consequatur asperiores? Quidem, natus? Consequuntur, neque rem?</p>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn text color="deep-purple accent-4">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>

                <v-col cols="12" md="4">
                    <v-card class="mx-auto">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">

                        </v-img>

                        <v-card-title>
                            <h2>Lorem, ipsum dolor.</h2>
                        </v-card-title>

                        <v-card-text>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi incidunt minima neque suscipit voluptates qui sint aspernatur aperiam! Dolore, vero! Iste ratione consequatur asperiores? Quidem, natus? Consequuntur, neque rem?</p>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn text color="deep-purple accent-4">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>

import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);


export default {
    name: 'Cards'
}
</script>