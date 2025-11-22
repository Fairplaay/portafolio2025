<script setup>
import { ref } from 'vue';
import { Heart } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';

const holidays = [
	{ name: 'Año Nuevo', date: '1 enero', note: 'Fijo' },
	{
		name: 'Semana Santa (Viernes Santo)',
		date: 'fecha variable',
		note: 'Móvil según calendario religioso',
	},
	{ name: 'Día del Trabajo', date: '1 mayo', note: 'Fijo' },
	{ name: 'Glorias Navales', date: '21 mayo', note: 'Fijo' },
	{ name: 'Fiestas Patrias', date: '18-19 septiembre', note: 'Celebración nacional' },
	{ name: 'Navidad', date: '25 diciembre', note: 'Fijo' },
];

const likes = ref({});
const dialogOpen = ref(false);
const selected = ref(null);

function toggleLike(i) {
	likes.value[i] = !likes.value[i];
	if (likes.value[i]) {
		selected.value = holidays[i];
		dialogOpen.value = true;
	}
}
</script>

<template>
	<section class="mx-auto max-w-3xl p-6">
		<header class="mb-4">
			<h1 class="text-2xl font-semibold">Inicio</h1>
			<p class="text-sm text-slate-600 dark:text-slate-300/70">
				Página inicial — con cariño ❤️. Aquí tienes una tabla con los días festivos de
				Chile.
			</p>
		</header>

		<div class="overflow-x-auto rounded-md border bg-white/60 dark:bg-slate-800/60">
			<table class="w-full text-left">
				<thead class="text-sm text-slate-500">
					<tr>
						<th class="px-4 py-3">Festivo</th>
						<th class="px-4 py-3">Fecha</th>
						<th class="px-4 py-3">Notas</th>
						<th class="px-4 py-3">Amor</th>
					</tr>
				</thead>
				<tbody class="text-sm">
					<tr
						v-for="(h, i) in holidays"
						:key="i"
						class="border-t hover:bg-slate-50 dark:hover:bg-slate-700"
					>
						<td class="px-4 py-3 font-medium">{{ h.name }}</td>
						<td class="px-4 py-3">{{ h.date }}</td>
						<td class="px-4 py-3 text-slate-600 dark:text-slate-300/70">
							{{ h.note }}
						</td>
						<td class="px-4 py-3">
							<Button
								:variant="likes[i] ? 'secondary' : 'ghost'"
								size="sm"
								class="inline-flex items-center gap-2"
								@click="toggleLike(i)"
							>
								<Heart :class="likes[i] ? 'text-red-500 size-4' : 'size-4'" />
								<span class="text-xs">{{
									likes[i] ? 'Te quiero' : 'Me gusta'
								}}</span>
							</Button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<footer class="mt-4 text-sm text-slate-500 dark:text-slate-400">
			Hecho con ♥ para Chile — si quieres más festivos puedo agregarlos.
		</footer>
	</section>

	<Dialog v-model:open="dialogOpen">
		<template #title>
			<h3 class="text-lg font-semibold">Gracias por el cariño</h3>
		</template>

		<div class="py-2">
			<p class="text-sm text-slate-700 dark:text-slate-200">
				Gracias por querer a <strong>{{ selected ? selected.name : '' }}</strong> — fecha:
				<strong>{{ selected ? selected.date : '' }}</strong
				>.
			</p>
		</div>

		<template #footer>
			<div class="flex gap-2">
				<Button variant="outline" @click="dialogOpen = false">Cerrar</Button>
				<Button @click="dialogOpen = false">Perfecto</Button>
			</div>
		</template>
	</Dialog>
</template>
