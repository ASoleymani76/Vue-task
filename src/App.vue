<template>
  <div id="main" class="w-full 2xl:w-7/12 mx-auto overflow-x-hidden min-h-screen bg-gray-100 shadow-sm">

    <section class="h-auto w-full grid grid-cols-1 gap-6">

      <div class="col-span-12 relative">
        <div class="w-full flex justify-between absolute top-10 left-0 z-10 px-10">
          <span><ArrowLeftIcon class="w-8 h-8 text-gray-700 fill-white"/></span>
          <span><HeartIcon class="w-8 h-8 text-gray-700 fill-white"/></span>
        </div>
        <img src="@/assets/img/post-bg.jpg" alt="Blog Pic" class="w-full transition-all mx-auto md:max-h-[25rem] object-cover">
      </div>

      <div class="col-span-12 relative">
        <span>

        </span>
      </div>
    </section>

  </div>
<!--  <RouterView />-->
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import ArrowLeftIcon from "./components/icons/ArrowLeftIcon.vue";
import HeartIcon from "./components/icons/HeartIcon.vue";
import axios from "axios";

export default {
  title: 'Vue-Task - Blog',
  components:{
    ArrowLeftIcon,
    HeartIcon
  },
  data(){
    return{
      posts:[],
    }
  },
  async created(){
    await this.getPosts();
  },
  methods:{
    async getPosts(){
      try {
        let response = await axios.get('https://stoplight.io/mocks/diginext-interview/website-interviews/144194864/posts/1');
        this.posts = response.data;
        console.log(response.data);
      }catch (e){
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
