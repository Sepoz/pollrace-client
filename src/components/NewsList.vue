<template>
  <div id="news-list">
    <ul class="list">
      <li class="list-line">
        <h3>Titolo 1</h3>
        <p>Descrizione articolo || random text for test random text for test random text for</p>
      </li>
      <li class="list-line">
        <h3>Titolo 2</h3>
        <p>Descrizione articolo || random text for test random text for test random text for</p>
      </li>
      <li class="list-line">
        <h3>Titolo 3</h3>
        <p>Descrizione articolo || random text for test random text for test random text for</p>
      </li>
      <li class="list-line">
        <h3>Titolo 4</h3>
        <p>Descrizione articolo || random text for test random text for test random text for</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
};
</script>

<style scoped>
.list {
  margin: 60px auto 40px;
  width: 90%;
  height: 50%;
  list-style-type: none;
}
.list-line {
  margin: 40px 0 40px 0;
  border-left: 8px solid #69F5A5;
  border-radius: 10px;
  box-shadow: 2px 2px 10px grey;
  display: flex;
  flex-direction: column;
}
</style>
