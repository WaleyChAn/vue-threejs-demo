<template>
  <el-container class="wlc-layout">
    <el-aside :width="asideWidth">
      <el-menu :default-active="routes[0].name">
        <el-menu-item v-for="item in routes"
                      :key="item.name"
                      :index="item.name">
          {{ item.meta ? item.meta.title : item.name }}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { constantRoutes } from '@/router'

export default {
  name: 'layout',
  components: {

  },
  data () {
    return {
      asideWidth: '200px'
    }
  },
  computed: {
    routes () {
      return constantRoutes
    }
  }
}
</script>
