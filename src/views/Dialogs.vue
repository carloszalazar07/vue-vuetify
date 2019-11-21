<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col sm="12" md="4">
                    <v-card>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">

                        </v-img>

                        <v-card-text>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet itaque ex mollitia nam nostrum! Ipsa itaque temporibus similique adipisci deserunt optio aperiam sapiente, necessitatibus ratione voluptas cum harum atque reprehenderit?</p>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn class="ml-4" color="primary" text icon
                            @click="dialogo = true"
                            >Accion</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-dialog v-model="dialogo" width="500" persistent>
                    <v-card>
                        <v-card-title>
                            Hola Mundo
                        </v-card-title>

                        <v-card-text>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
                        </v-card-text>

                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn color="primary" @click="dialogo= false">Cerrar <v-icon>mdi-close-circle</v-icon></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogo: false,
        }
    },
}
</script>