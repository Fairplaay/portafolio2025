<script setup>
// No imports needed
</script>

<template>
	<section id="about" class="container py-12 md:py-24 bg-muted/30 rounded-3xl my-8">
		<div class="grid gap-8 lg:grid-cols-2 items-center">
			<div class="space-y-6 text-center md:text-left order-2 md:order-1">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					Sobre mí 👨‍💻
				</h2>
				<div class="space-y-4 text-muted-foreground text-lg leading-relaxed">
					<p>
						Hey! ¿Buscabas un desarrollador frontend? Antes que nada, hola y gracias por
						estar aquí. 👋
					</p>
					<p>
						Desde niño me gustaron las computadoras, jugar y todo eso. Era muy bueno en
						esto y decidí tomarlo como una forma de vida trabajándolo.
					</p>
					<p>
						A finales del 2016 comenzó este sueño "SER UN PROGRAMADOR". Ya van varios
						años y déjame decirte que cada día estoy más enamorado de lo que hago. 💙
					</p>
				</div>
			</div>
			<div class="flex justify-center order-1 md:order-2">
				<div class="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px]">
					<div
						class="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform translate-y-4"
					></div>
					<img
						src="https://github.com/shadcn.png"
						alt="Jesús García"
						class="relative w-full h-full object-cover rounded-full border-4 border-background shadow-xl hover:scale-105 transition-transform duration-500"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
