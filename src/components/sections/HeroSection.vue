<script setup>
import { Button } from '@/components/ui/button';
</script>

<template>
	<section
		id="hero"
		class="container py-12 md:py-32 space-y-8 text-center md:text-left animate-in fade-in slide-in-from-bottom-4 duration-1000"
	>
		<div class="flex flex-col items-center md:items-start gap-6">
			<div
				class="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
			>
				👋 Desarrollador Front End
			</div>
			<h1
				class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
			>
				Hola, soy <span class="text-primary">Jesús García</span>
			</h1>
			<p class="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
				Creo experiencias web modernas y amigables.
				<br class="hidden md:block" />
				<span class="italic text-base mt-2 block"
					>«Cualquiera puede hablar. Enséñame el código»</span
				>
			</p>
			<div class="flex flex-col w-full sm:w-auto sm:flex-row gap-3 pt-4">
				<Button
					size="lg"
					class="w-full sm:w-auto rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all"
					as-child
				>
					<a href="#contact">Contáctame 📩</a>
				</Button>
				<Button
					variant="outline"
					size="lg"
					class="w-full sm:w-auto rounded-full text-base"
					as-child
				>
					<a href="#projects">Ver Proyectos 🚀</a>
				</Button>
			</div>
		</div>
	</section>
</template>
