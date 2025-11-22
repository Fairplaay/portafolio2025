<script setup>
import { ref, reactive, computed, defineAsyncComponent } from 'vue';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AsyncCarousel = defineAsyncComponent(() => import('@/components/AsyncCarousel.vue'));
import HydrationExample from '@/components/HydrationExample.vue';

// Esta variable contiene el nuevo item
const newItem = ref('');
// Esta variable contiene la lista de animales
const jaula = reactive({
	animales: [],
});
// Esta variable indica si se ha agregado al menos un animal
const ok = ref(false);

const inputRef = ref(null);

/**
 * Esta función se ejecuta cuando el usuario presiona el botón Agregar
 */
const addTodo = () => {
	if (newItem.value.trim()) {
		jaula.animales.push({ id: Math.random(), text: newItem.value.trim() });
		newItem.value = '';
		if (!ok.value) {
			ok.value = true;
			// alert('Se ha agregado al menos un animal'); // Comentado para no molestar
		}
	}
};
/**
 * Esta función se ejecuta cuando el usuario presiona el botón Agregar al menos 1 vez
 */
const isOK = computed(() => (ok.value ? 'si' : 'no'));
/**
 * Esta variable contiene la lista de animales
 */
const items = jaula.animales;
</script>

<template>
	<Card class="max-w-md mx-auto mt-12 p-6 bg-card rounded-lg shadow-lg">
		<CardHeader>
			<CardTitle>Lista de Tareas</CardTitle>
			<CardDescription class="text-muted-foreground">
				Añade tareas a la lista y gestiona tus pendientes.
			</CardDescription>
		</CardHeader>
		<CardContent>
			<div class="flex space-x-2 mb-4">
				<Input ref="inputRef" v-model="newItem" placeholder="Nuevo Item" class="flex-1" />
				<Button class="rounded-full" @click="addTodo">Agregar</Button>
			</div>
			<ul class="space-y-2">
				<li v-for="item in items" :key="item.id" class="p-2 bg-muted rounded">
					{{ item.text }}
				</li>
			</ul>
			<div class="mt-4">
				<p class="text-sm text-muted-foreground">¿Hay elementos? {{ isOK }}</p>
			</div>

			<AsyncCarousel v-if="ok" :items="items" :is-ok="isOK" />
		</CardContent>
	</Card>

	<div class="max-w-4xl mx-auto mt-12 px-4">
		<HydrationExample />
	</div>
</template>
