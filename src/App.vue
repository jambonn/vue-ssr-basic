<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="public/logo.png" alt="logo">
        </router-link>
        <router-link to="/top">
          Top
        </router-link>
        <router-link to="/new">
          New
        </router-link>
        <router-link to="/show">
          Show
        </router-link>
        <router-link to="/ask">
          Ask
        </router-link>
        <router-link to="/job">
          Jobs
        </router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition>
  </div>
</template>
<script>
import 'src/assets/styles/style.scss'

export default {
  name: 'App'
}
</script>
