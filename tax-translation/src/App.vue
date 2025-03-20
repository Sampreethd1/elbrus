<script setup lang="ts"></script>

<template>
  <div class="container1">
    <header class="header">
      <h1>Title</h1>
      <p>Project Info</p>
    </header>
    <div class="content-wrapper">
      <main class="main-content">
        <div class="text-line"></div>
        <div class="text-line"></div>
        <div class="text-line"></div>
      </main>
      <aside class="sidebar">
        <div class="text-line"></div>
        <div class="text-line"></div>
        <div class="text-line"></div>
      </aside>
    </div>
    <footer class="footer">
      <div class="progress-bar"></div>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container1 {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.header {
  flex: 0 0 auto;
  padding: 10px;
  padding-left: 30px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  text-align: left; /* Left align the text */
}

.content-wrapper {
  display: flex;
}

.main-content {
  flex: 3;
  padding: 10px;
  background-color: #fafafa;
  border-right: 1px solid #ccc;
}

.sidebar {
  flex: 1;
  padding: 10px;
  background-color: #fafafa;
  border-left: 1px solid #ccc;
}

.footer {
  flex: 0 0 auto;
  padding: 10px;
  background-color: #f0f0f0;
  border-top: 1px solid #ccc;
  text-align: center;
}

.text-line {
  height: 20px;
  background-color: #ccc;
  margin-bottom: 10px;
  width: 80%;
}

.progress-bar {
  height: 20px;
  background-color: #ccc;
  width: 100%;
}
</style>
