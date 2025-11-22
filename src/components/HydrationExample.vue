<script setup>
import { ref, defineAsyncComponent, defineComponent, h } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import Skeleton from '@/components/ui/skeleton/Skeleton.vue';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Componente de Demostración de Hidratación (Carga Asíncrona)
 *
 * Este componente demuestra cómo implementar el patrón de "Hidratación Perezosa" (Lazy Hydration)
 * o carga bajo demanda en Vue 3.
 *
 * Conceptos Clave:
 * 1. defineAsyncComponent: Permite definir un componente que solo se carga cuando es necesario.
 * 2. IntersectionObserver: Detecta cuando el elemento entra en el viewport (pantalla visible).
 * 3. Suspense/Loading State: Muestra un estado de carga (Skeleton) mientras el componente real se descarga.
 */

// Referencia al contenedor que detectaremos
const target = ref(null);
// Estado para controlar si el componente debe ser visible (hidratado)
const isVisible = ref(false);

// Usamos useIntersectionObserver de VueUse para detectar visibilidad
const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
	// Si el elemento entra en pantalla, activamos la carga
	if (isIntersecting) {
		isVisible.value = true;
		// Detenemos el observador una vez que se ha activado para no volver a ejecutarlo
		stop();
	}
});

// Definimos un componente de carga personalizado usando función de renderizado
// para evitar problemas con el linter y compilación de plantillas en tiempo de ejecución.
const LoadingState = defineComponent({
	setup() {
		return () =>
			h('div', { class: 'w-full space-y-4 p-4 border rounded-lg' }, [
				h('div', { class: 'flex items-center justify-between' }, [
					h(Skeleton, { class: 'h-8 w-1/3' }),
					h(Skeleton, { class: 'h-6 w-20 rounded-full' }),
				]),
				h('div', { class: 'grid gap-4 md:grid-cols-2' }, [
					h(Skeleton, { class: 'h-32 w-full' }),
					h(Skeleton, { class: 'h-32 w-full' }),
					h(Skeleton, { class: 'h-32 w-full' }),
					h(Skeleton, { class: 'h-32 w-full' }),
				]),
			]);
	},
});

/**
 * Definición del Componente Asíncrono
 *
 * defineAsyncComponent acepta una función loader o un objeto de opciones.
 * Aquí usamos el objeto de opciones para mayor control educativo.
 */
const AsyncHeavyComponent = defineAsyncComponent({
	// La función loader. Aquí importamos dinámicamente el componente.
	loader: () => import('./HeavyComponent.vue'),

	// Componente a mostrar mientras se carga el componente asíncrono.
	loadingComponent: LoadingState,

	// Retraso antes de mostrar el componente de carga.
	// 0ms significa que se muestra inmediatamente si la carga no es instantánea.
	delay: 0,

	// Componente a mostrar si falla la carga.
	// errorComponent: ErrorComponent,

	// Tiempo límite antes de considerar que la carga falló.
	timeout: 3000,
});
</script>

<template>
	<div class="my-8 space-y-4">
		<div class="text-center space-y-2">
			<h2 class="text-2xl font-bold tracking-tight">Demo de Hidratación / Carga Asíncrona</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				El siguiente componente simula una "Hidratación en Scroll". No se cargará su código
				JavaScript hasta que el recuadro gris entre en tu pantalla. Además, tiene un retraso
				artificial de 1.5s para mostrar el esqueleto de carga.
			</p>
		</div>

		<!--
      Contenedor Objetivo (Target).
      Este div actúa como el "trigger" o disparador.
      Tiene una altura mínima para asegurar que ocupe espacio antes de cargar.
    -->
		<div
			ref="target"
			class="min-h-[200px] p-6 border-2 border-dashed rounded-xl bg-muted/30 flex flex-col items-center justify-center transition-all duration-500"
		>
			<!-- Mostramos el componente solo si isVisible es true -->
			<div v-if="isVisible" class="w-full max-w-2xl">
				<AsyncHeavyComponent />
			</div>

			<!-- Estado inicial antes de ser visible (opcional, solo para demo) -->
			<div v-else class="text-center text-muted-foreground animate-pulse">
				<p>Desplázate hacia abajo para hidratar...</p>
				<p class="text-xs">(Esperando visibilidad)</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
			<Card>
				<CardContent class="pt-6">
					<h4 class="font-semibold mb-2">1. Detección</h4>
					<p class="text-sm text-muted-foreground">
						IntersectionObserver detecta cuando el contenedor es visible en el viewport.
					</p>
				</CardContent>
			</Card>
			<Card>
				<CardContent class="pt-6">
					<h4 class="font-semibold mb-2">2. Carga (Network)</h4>
					<p class="text-sm text-muted-foreground">
						Se dispara la petición de red para descargar el chunk JS del componente.
					</p>
				</CardContent>
			</Card>
			<Card>
				<CardContent class="pt-6">
					<h4 class="font-semibold mb-2">3. Hidratación</h4>
					<p class="text-sm text-muted-foreground">
						Vue monta el componente y lo hace interactivo. Mostramos un Skeleton
						mientras tanto.
					</p>
				</CardContent>
			</Card>
		</div>
	</div>
</template>
