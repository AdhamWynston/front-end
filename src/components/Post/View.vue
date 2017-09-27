<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Aqui vai ficar o nome do post</h3>
                    </div>
                </v-card-title>
                <v-card-text>
                    <div>Aqui o conteúdo do post</div>
                </v-card-text>
                <v-divider></v-divider>
                <div>
                    <v-btn class="amber darken-2" @click.prevent="edit(1)">Editar</v-btn>
                    <v-btn class="red darken-4" @click.prevent="remove(1)">Excluir</v-btn>
                </div>
                <v-card-actions>
                    <v-btn flat class="white--text" @click.prevent="back">Voltar</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        card_text: ''
      }
    },
    methods: {
      remove: function (id) {
        this.$router.push('/posts')
      },
      edit: function (id) {
        this.$router.push('/posts/' + id +'/edit')
      },
      back: function () {
        this.$router.push('/posts')
      }
    }
  }
</script>