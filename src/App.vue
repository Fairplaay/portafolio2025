<template>
	<h1>You did it!</h1>
	<p>
		Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
		{{ count }} / {{ doubleCount }}
		documentation
	</p>
</template>

<script>
export default {
	data() {
		return {
			count: 42,
		};
	},
	computed: {
		doubleCount() {
			this.count * 2;
		},
	},
};
</script>

<style scoped></style>
