<script setup></script>

<template>
	<div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
		<header class="border-b bg-white/60 dark:bg-slate-800/60 backdrop-blur px-4 py-3">
			<nav class="mx-auto max-w-5xl flex items-center justify-between">
				<div class="flex items-center gap-4">
					<router-link to="/" class="text-lg font-semibold">Mi Portafolio</router-link>
					<router-link
						to="/"
						class="text-sm text-slate-600 dark:text-slate-300/70 hover:underline"
					>
						Inicio
					</router-link>
					<router-link
						to="/sample"
						class="text-sm text-slate-600 dark:text-slate-300/70 hover:underline"
					>
						Ejemplo
					</router-link>
				</div>
			</nav>
		</header>

		<main class="p-8">
			<router-view />
		</main>
	</div>
</template>
