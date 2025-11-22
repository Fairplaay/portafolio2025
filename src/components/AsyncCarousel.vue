<script setup>
import { defineProps, onMounted } from 'vue';
import { Card, CardContent } from '@/components/ui/card';

defineProps({
	items: {
		type: Array,
		required: true,
	},
	isOk: {
		type: String,
		required: true,
	},
});
onMounted(() => {
	console.log('AsyncCarousel mounted');
});
</script>

<template>
	<div class="mt-8">
		<h3 class="text-lg font-semibold mb-4 text-center">
			Estado: {{ isOk }} - Elementos en el Carrusel
		</h3>
		<div class="flex overflow-x-auto space-x-4 p-4 pb-6 scrollbar-hide">
			<div v-for="item in items" :key="item.id" class="flex-shrink-0 w-64">
				<Card class="h-full bg-primary/5 hover:bg-primary/10 transition-colors">
					<CardContent class="flex items-center justify-center h-32 p-6">
						<span class="text-xl font-medium text-primary">{{ item.text }}</span>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
	display: none;
}
.scrollbar-hide {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
</style>
