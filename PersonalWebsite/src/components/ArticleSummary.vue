<template>
<div class="article">
	<article>
		<h1>{{articleTitle}}</h1>
		<p>{{articleSummary}}</p>
	</article>
</div>
</template>

<script>
export default {
  name: "ArticleSummary",
  props: {
		articleTitle: String,
		articleSummary: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
