<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
	<footer class="border-t py-6 md:py-0">
		<div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
			<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
				© {{ currentYear }} Jesús García. Todos los derechos reservados.
			</p>
			<div class="flex items-center gap-4">
				<a href="#" class="text-muted-foreground hover:text-foreground"> GitHub </a>
				<a href="#" class="text-muted-foreground hover:text-foreground"> LinkedIn </a>
			</div>
		</div>
	</footer>
</template>
