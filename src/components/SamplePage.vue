<script setup>
import { ref } from 'vue';
import { ChevronRight } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import Dialog from '@/components/ui/dialog/Dialog.vue';

const processing = ref(false);
const liked = ref(false);
const dialogOpen = ref(false);

function startProcessing() {
	processing.value = true;
	setTimeout(() => (processing.value = false), 1800);
}

function toggleLike() {
	liked.value = !liked.value;
}

function openDialog() {
	dialogOpen.value = true;
}

function handleConfirm() {
	// eslint-disable-next-line no-console
	console.log('Confirmado!');
	dialogOpen.value = false;
}
</script>

<template>
	<section
		class="mx-auto max-w-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-lg border p-6 shadow-sm"
	>
		<header class="mb-4">
			<h1 class="text-2xl font-semibold">Ejemplo con shadcn-vue</h1>
			<p class="text-sm text-slate-600 dark:text-slate-300/70">
				Componente de ejemplo con <code>Button</code> y <code>Spinner</code>.
			</p>
		</header>

		<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
			<div class="flex items-center gap-3">
				<Button variant="outline" @click="startProcessing">Iniciar proceso</Button>

				<Button :disabled="processing">
					<template v-if="processing">
						<Spinner class="text-blue-500 size-8" />
						Procesando...
					</template>
					<template v-else>
						<span>Enviar</span>
					</template>
				</Button>
			</div>

			<div class="flex items-center gap-2">
				<Button variant="ghost" size="icon" aria-label="Next">
					<ChevronRight />
				</Button>

				<Button :variant="liked ? 'secondary' : 'outline'" @click="toggleLike">
					{{ liked ? 'Liked' : 'Like' }}
				</Button>
			</div>
		</div>

		<hr class="my-6" />

		<section>
			<h2 class="text-lg font-medium mb-2">Descripción</h2>
			<p class="text-sm text-slate-600 dark:text-slate-300/70">
				Este es un ejemplo sencillo que utiliza los componentes generados por shadcn-vue en
				<code>src/components/ui</code>. Puedes copiar y adaptar estos componentes para
				construir páginas más completas.
			</p>
		</section>

		<hr class="my-6" />

		<section>
			<h2 class="text-lg font-medium mb-3">Componente Dialog</h2>
			<p class="text-sm text-slate-600 dark:text-slate-300/70 mb-4">
				Diálogo modal con animaciones suaves y diseño moderno.
			</p>

			<Button
				class="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600"
				@click="openDialog"
			>
				Abrir Dialog
			</Button>

			<Dialog v-model:open="dialogOpen">
				<template #title>
					<div class="flex items-center gap-3">
						<div
							class="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center"
						>
							<svg
								class="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<div>
							<h3
								class="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent"
							>
								¡Diálogo Increíble!
							</h3>
							<p class="text-xs text-slate-500 dark:text-slate-400 font-normal">
								Con animaciones suaves
							</p>
						</div>
					</div>
				</template>

				<div class="space-y-3">
					<p class="text-sm leading-relaxed">
						Este es un componente de diálogo moderno con:
					</p>
					<ul class="text-sm space-y-2 ml-4">
						<li class="flex items-start gap-2">
							<span class="text-violet-500 mt-0.5">✨</span>
							<span>Animaciones suaves con efecto de rebote</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-purple-500 mt-0.5">🎨</span>
							<span>Gradientes vibrantes y diseño premium</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-fuchsia-500 mt-0.5">⌨️</span>
							<span>Soporte para teclado (ESC para cerrar)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-pink-500 mt-0.5">♿</span>
							<span>Accesibilidad con focus trap y ARIA</span>
						</li>
					</ul>
					<div
						class="mt-4 p-4 bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 rounded-lg border border-violet-200 dark:border-violet-800"
					>
						<p class="text-xs text-slate-600 dark:text-slate-300">
							💡 <strong>Tip:</strong> Puedes personalizar el título, contenido y
							footer usando slots.
						</p>
					</div>
				</div>

				<template #footer>
					<button
						class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 active:scale-95"
						@click="dialogOpen = false"
					>
						Cancelar
					</button>
					<button
						class="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/30 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/40 active:scale-95"
						@click="handleConfirm"
					>
						¡Genial! 🚀
					</button>
				</template>
			</Dialog>
		</section>
	</section>
</template>
