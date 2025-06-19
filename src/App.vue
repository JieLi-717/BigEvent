<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
// import {useUserStore} from '@/store/modules/user'
import {useUserStore} from '@/store/index'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const goList = () => {
  router.push('/list')
  console.log(route, router)
}
</script>

<template>
  <router-view></router-view>
  <hr/>
  <header>
    <h1>你好啊</h1>
    <el-button @click="$router.push('/home')">首页</el-button>
    <el-button @click="goList">详情页</el-button>
    <h1>{{ userStore.token }}</h1>
    <el-button @click="userStore.AddToken('grhughjghthgtrgt')">登录</el-button>
    <el-button @click="userStore.RemoveToken()">退出</el-button>


    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

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
