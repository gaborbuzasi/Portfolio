<template>
  <div class="home">
    <div class="articles">
      <ArticleSummary articleTitle="BGSF MediaTrimmer" articleSummary="This is an audio cutter application"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleSummary from "@/components/ArticleSummary.vue";

export default {
  name: "work",
  components: {
    ArticleSummary
  }
};
</script>
<style scoped>
.home {
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.600);
  border-radius: 10px;
}
.articles {
  
}
h1 {
  margin-bottom: 5px;
}
</style>

