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
      <div class="resizer" @mousedown="startResizing"></div>
      <aside class="sidebar">
        <DocumentLayout></DocumentLayout>
      </aside>
    </div>
    <footer class="footer">
      <div class="progress-bar"></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DocumentLayout from './components/DocumentLayout.vue';

const isResizing = ref(false);

const startResizing = (event: MouseEvent) => {
  isResizing.value = true;
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResizing);
};

const resize = (event: MouseEvent) => {
  if (isResizing.value) {
    const contentWrapper = document.querySelector('.main-content') as HTMLElement;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const container = document.querySelector('.content-wrapper') as HTMLElement;

    const containerRect = container.getBoundingClientRect();
    const newWidth = event.clientX - containerRect.left;

    contentWrapper.style.flex = `0 0 ${newWidth}px`;
    sidebar.style.flex = `1 1 ${containerRect.width - newWidth}px`;
  }
};

const stopResizing = () => {
  isResizing.value = false;
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResizing);
};

onMounted(() => {
  document.addEventListener('mouseup', stopResizing);
});

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', stopResizing);
});
</script>

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
  flex: 1;
  position: relative;
}

.main-content {
  flex: 2;
  padding: 10px;
  background-color: #fafafa;
  border-right: 1px solid #ccc;
}

.resizer {
  width: 5px;
  cursor: ew-resize;
  background-color: #ccc;
  /* position: absolute; */
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}

.resizer:hover {
  background-color: rgb(221, 167, 7);
}

.sidebar {
  flex: 1;
  padding: 10px;
  max-height: 80vh;
  background-color: #fafafa;
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
