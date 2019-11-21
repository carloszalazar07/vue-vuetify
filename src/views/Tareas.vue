<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
                        <v-card-text>
                            <v-chip
                            class="ma-2 ml-0"
                            color="blue"
                            label
                            text-color="white"
                            >
                                <v-icon left>mdi-label</v-icon>
                                {{item.titulo}}
                            </v-chip>
                            <p>{{item.descripcion}}</p>
                            <v-divider class="mb-4"></v-divider>
                            <v-btn color="warning" @click="editar(index)">Editar</v-btn>
                            <v-btn class="ml-4" color="error" @click="borrar(item.id)">Borrar</v-btn>
                        </v-card-text>
                    </v-card>
                    
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="mb-3 pa-5" v-if="formAgregar">
                        <v-form @submit.prevent="guardar">
                            <v-text-field label="Titulo de la Tarea" color="deep-purple accent-4" outlined dense v-model="titulo"></v-text-field>
                            <v-textarea label="Tarea que quieres realizar" color="deep-purple accent-4" outlined v-model="descripcion"></v-textarea>
                            <v-btn  block :disabled="!titulo || !descripcion" color="deep-purple accent-4" class="white--text" type="submit">Guardar</v-btn>
                        </v-form>
                    </v-card>

                    <v-card class="mb-3 pa-5" v-if="!formAgregar">
                        <v-form @submit.prevent="actualizar">
                            <v-text-field label="Titulo de la Tarea" color="warning" outlined dense v-model="titulo"></v-text-field>
                            <v-textarea label="Tarea que quieres realizar" color="warning" outlined v-model="descripcion"></v-textarea>
                            <v-btn block :disabled="!titulo || !descripcion" color="warning" type="submit">Editar Tarea</v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>

            <v-snackbar color="success" v-model="snackbar" :timeout="time" :top="y === 'top'"  :right="x === 'right'" vertical="vertical">
                {{mensaje}}
            </v-snackbar>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titulo: '',
            descripcion: '',
            snackbar: false,
            mensaje: '',
            time: 2000,
            x: 'right',
            y: 'top',
            listaTareas: [
                {id: 1, titulo: 'Titulo tarea', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugit asperiores delectus error dicta laborum vitae quam dignissimos exercitationem iusto distinctio consequatur quibusdam itaque consequuntur, inventore rem aspernatur eveniet quod.'},
                {id: 2, titulo: 'Hola Mundo', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugit asperiores delectus error dicta laborum vitae quam dignissimos exercitationem iusto distinctio consequatur quibusdam itaque consequuntur, inventore rem aspernatur eveniet quod.'},
            ],
            formAgregar: true,
            indexTarea: ''
        }
    },
    methods: {
        guardar(){
            // if(this.titulo == '' || this.descripcion == ''){
            //     console.log('esto esta vacio')
            // }
            this.listaTareas.push({id: Date.now(), titulo: this.titulo, descripcion: this.descripcion});
            this.mensaje = 'Elemento Guardado con Exito'
            this.snackbar = true;
            this.titulo = '';
            this.descripcion= '';            
        },
        editar(index){
            this.formAgregar = false
            this.titulo = this.listaTareas[index].titulo;
            this.descripcion = this.listaTareas[index].descripcion;
            this.indexTarea = index
        },
        actualizar(){
            this.listaTareas[this.indexTarea].titulo = this.titulo;
            this.listaTareas[this.indexTarea].descripcion = this.descripcion;
            this.formAgregar = true;
            this.titulo = ''
            this.descripcion = ''
            this.mensaje = 'Editaste la Tarea'
            this.snackbar = true;
            
            
        },
        borrar(id){
            // el filter va a filtrar con alguna condicion
            // dentro del filter se pone un elemento (e) y funcion arrow =>
            // con la letra e estamos accediendo a todos los elementos de la lista tarea
            // me va a retornar todos los elementos que sean diferente id, y los va a estar guardando en el array 
            this.listaTareas = this.listaTareas.filter(e => e.id != id)
        }
    },
}
</script>