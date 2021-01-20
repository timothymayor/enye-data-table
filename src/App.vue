<template>
  <div id="app">
    <p class="heading">
      Enye Concept
    </p>
    <div class="search_box">
      <i class="fa fa-search fa-sm input-icon"></i> 
      <input type="text" v-model="search" placeholder="Find in record">
    </div>
    
    <data-table 
    :col="col" 
    :datas="paginationData" 
    :pageCount="pageCount" 
    :currentPage="currentPage" 
    :size="size"
    :prevPage="prevPage"
    :nextPage="nextPage"
    :beforeEnter="beforeEnter"
    :enter="enter"
    :leave="leave"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import API from '@/service'
import DataTable from '@/components/DataTable';
import Helpers from '@/mixins/core';
export default {
  name: 'App',
  components: {
    DataTable
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState([
      'col',
      'users'
    ]),
  },
  beforeMount() {
    API.fetchUser('')
    .then(res => {
      // console.log(res);
      let data = res.records.profiles;
      this.setusers(data);

    })
    .catch(e => {
      console.log(e);
    })
  },
  methods: {
    ...mapActions([
      'setusers'
    ])
  },
  mixins: [Helpers]
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');

:root{
  --primary-color: #262A41;
  --secondary-color: #30BBB5;
  --tertiary-color: #F935A9;
  --darkmode-input-color: #3C3F54;
  --lightmode-input-color: #3c3f541c;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
  opacity: 1;
}
#app {
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  background-color: var(--lightmode-input-color);
  min-height: 100vh;
}

.heading{
  padding: 10px;
  font-size: 2rem;
  font-weight: bold;
  color: var(--tertiary-color);
  background-color: var(--lightmode-input-color);
  margin: 10px auto;
  width: fit-content;
  border-radius: 6px;
}

.search_box{
  padding: 10px;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.26),  3px 3px 5px rgba(0,0,0,0.26);
  position: relative;
  width: 300px;
  margin: 10px 10px 0 0;
  transform: translateY(60px);
}
.search_box input {
  border: 0;
  padding-left: 40px;
  padding-right: 20px;
  height: 100%;
  outline: 0;
  background-color: transparent;
}
.search_box i{
  position: absolute;
  left: 15px;
  top: 15px;
}

</style>
