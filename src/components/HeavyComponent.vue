<script setup>
import { ref, onMounted } from 'vue';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import axios from 'axios';

// Estado para los usuarios
const users = ref([]);
const loading = ref(true);

onMounted(async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		const data = await response.data;
		// Simulamos un delay para ver el estado de carga interno del componente
		await new Promise(resolve => setTimeout(resolve, 1000));

		users.value = data;
	} catch (error) {
		console.error('Error fetching users:', error);
	} finally {
		loading.value = false;
	}
});
</script>

<template>
	<div class="space-y-4 p-4 border rounded-lg bg-background/50 backdrop-blur-sm">
		<div class="flex items-center justify-between">
			<h3 class="text-xl font-bold text-primary">Usuarios (Cargados vía API)</h3>
			<span
				class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-100"
			>
				{{ loading ? 'Cargando datos...' : 'Datos Listos' }}
			</span>
		</div>

		<div v-if="loading" class="grid gap-4 md:grid-cols-2">
			<div v-for="i in 4" :key="i" class="h-32 bg-muted animate-pulse rounded-lg"></div>
		</div>

		<div v-else class="grid gap-4 md:grid-cols-2">
			<Card
				v-for="user in users"
				:key="user.id"
				class="overflow-hidden transition-all hover:shadow-md"
			>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{{ user.name }}</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground">{{ user.email }}</p>
					<p class="text-xs text-muted-foreground mt-1">{{ user.company.name }}</p>
				</CardContent>
			</Card>
		</div>

		<div class="flex justify-end">
			<Button variant="outline" size="sm">Recargar Datos</Button>
		</div>
	</div>
</template>
