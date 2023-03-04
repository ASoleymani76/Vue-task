<template>
    <RouterView />
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import ArrowLeftIcon from "./components/icons/ArrowLeftIcon.vue";
import HeartIcon from "./components/icons/HeartIcon.vue";
import AvatarIcon from "./components/icons/AvatarIcon.vue";
import axios from "axios";
import CheckIcon from "./components/icons/CheckIcon.vue";
import BookmarkIcon from "./components/icons/BookmarkIcon.vue";
import FacebookIcon from "./components/icons/FacebookIcon.vue";
import InstagramIcon from "./components/icons/InstagramIcon.vue";
import YoutubeIcon from "./components/icons/YoutubeIcon.vue";
import {BlogCreateCommentRequest} from "./libs/Api/Blog";

export default {
  title: 'Vue-Task - Blog',
  components: {
    YoutubeIcon,
    InstagramIcon,
    FacebookIcon,
    BookmarkIcon,
    CheckIcon,
    ArrowLeftIcon,
    HeartIcon,
    AvatarIcon
  },
  data() {
    return {
      posts: null,
      comments: [],
      text: '',
    }
  },
  async created() {
    await this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        let response = await axios.get('https://stoplight.io/mocks/diginext-interview/website-interviews/144194864/posts/1');
        this.posts = response.data;
        this.comments = response.data.comments;
        console.log(response.data);
      } catch (e) {
        console.log(e)
      }
    },
    async submitComment(){
      let _this = this;

      let data = {
        text : _this.text
      }

      let blogCreateCommentRequest = new BlogCreateCommentRequest(_this);
      blogCreateCommentRequest.setParams(1);
      blogCreateCommentRequest.setRequestParam(data);
      await blogCreateCommentRequest.fetch(function (content){
        // console.log(content)
        _this.text = "";
      },function (error){
        _this.text = "";
        console.log(error)
      })
    },
    prettyTime(date){
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString("en-US", options)
    },
  },
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
