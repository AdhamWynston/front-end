<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Criando novo post</h3>
                    </div>
                </v-card-title>
                <v-card-text>
                    <form>
                        <v-text-field
                                v-model="title"
                                label="Título"
                                :counter="10"
                                :error-messages="errors.collect('titulo')"
                                v-validate="'required|max:20'"
                                data-vv-name="titulo"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="texto"
                                label="Texto"
                                :counter="20"
                                :error-messages="errors.collect('texto')"
                                v-validate="'required|max:20'"
                                data-vv-name="texto"
                                required
                        ></v-text-field>
                    </form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn @click="submit">submit</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    $validates: true,
    data () {
      return {
        titulo: '',
        texto: '',
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll({
          title: this.titulo,
          body: this.texto
        }).then((result) => {
          if(result){
            console.log('All is well')
            return
          }
          console.log('OPPS!')
        })
      },
      clear () {
        this.title = ''
        this.body = ''
        this.$validator.clean()
      }
    }

  }
</script>