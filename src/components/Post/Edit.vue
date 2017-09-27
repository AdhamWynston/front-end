<template>
    <form>
        <v-text-field
                v-model="title"
                label="Título"
                :counter="10"
                :error-messages="errors.collect('title')"
                v-validate="'required|max:20'"
                data-vv-name="title"
                required
        ></v-text-field>
        <v-text-field
                v-model="body"
                label="Conteúdo"
                :counter="20"
                :error-messages="errors.collect('body')"
                v-validate="'required|max:20'"
                data-vv-name="body"
                required
        ></v-text-field>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
    </form>
</template>

<script>
  export default {
    $validates: true,
    data () {
      return {
        title: '',
        body: '',
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll({
          title: this.title,
          body: this.body
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