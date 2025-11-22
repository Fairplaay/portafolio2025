<script setup>
import { ref } from 'vue';
import { ChevronRight } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

const processing = ref(false);
const liked = ref(false);

function startProcessing() {
	processing.value = true;
	setTimeout(() => (processing.value = false), 1800);
}

function toggleLike() {
	liked.value = !liked.value;
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
	</section>
</template>
