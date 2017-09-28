<template>
    <v-card>

        <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                    v-model="search"
            ></v-text-field>
        </v-card-title>
        <v-data-table
                v-bind:headers="headers"
                v-bind:items="items"
                v-bind:search="search"
                v-bind:pagination.sync="pagination"
                :total-items="totalItems"
                :loading="loading"
                class="elevation-1"
        >
            <template slot="headerCell" scope="props">
        <span v-tooltip:bottom="{ 'html': props.header.text }">
          {{ props.header.text }}
        </span>
            </template>
            <template slot="items" scope="props">
                <tr @click="goTo(props.item.fat)">
                <td>{{ props.item.id }}</td>
                <td  class="text-xs-right">{{ props.item.data.title }}</td>
                <td  class="text-xs-right">{{ props.item.body }}</td>
                </tr>
            </template>
        </v-data-table>
    </v-card>


</template>
<script>
  export default {
    data () {
      return {
        search: '',
        totalItems: 0,
        items: [],
        loading: true,
        pagination: {},
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          { text: 'Titulo', value: 'title' },
          { text: 'Texto', value: 'body' },
        ]
      }
    },
    watch: {
      pagination: {
        handler () {
          this.getDataFromApi()
            .then(data => {
              this.items = data.items
              this.totalItems = data.total
            })
        },
        deep: true
      }
    },
    mounted () {
      this.getDataFromApi()
        .then(data => {
          this.items = data.items
          this.totalItems = data.total
        })
    },
    computed: {
      posts: function () {
        return this.$store.state.post.postList
      }
    },
    created () {
      this.$store.dispatch('getPosts')
    },
    methods: {
      goTo: function (id) {
        this.$router.push('/posts/' + id)
      },
      getDataFromApi () {
        this.loading = true
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page, rowsPerPage } = this.pagination

          let items = this.getDesserts()
          const total = items.length

          if (this.pagination.sortBy) {
            items = items.sort((a, b) => {
              const sortA = a[sortBy]
              const sortB = b[sortBy]

              if (descending) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }

          if (rowsPerPage > 0) {
            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
          }

          setTimeout(() => {
            this.loading = false
            resolve({
              items,
              total
            })
          }, 1000)
        })
      },
      getDesserts () {
        return []
      }
    }
  }
</script>
<style>
    tr {
        cursor: pointer;
    }
</style>