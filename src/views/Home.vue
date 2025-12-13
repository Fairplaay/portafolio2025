<script setup>
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { useGame } from '@/composables/useGame';

const {
	madridWins,
	barcelonaWins,
	isModalOpen,
	modalMessage,
	addWinMadrid,
	addWinBarcelona,
	randomBurlaMadrid,
	randomBurlaBarcelona,
	verPrediccion,
} = useGame();
</script>

<template>
	<div
		class="min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center p-4"
	>
		<div class="max-w-6xl mx-auto text-center">
			<div class="mb-8">
				<div class="flex justify-center items-center space-x-8 mb-4">
					<div class="text-6xl animate-bounce">🏆</div>
					<h1 class="text-5xl font-bold text-gray-900 animate-pulse">VS</h1>
					<div class="text-6xl animate-bounce">⚽</div>
				</div>
				<h1 class="text-4xl font-bold text-gray-900 mb-2">
					¡La Mayor Rivalidad del Fútbol!
				</h1>
				<p class="text-xl text-gray-600 mb-4">
					Real Madrid vs Barcelona: Burlas, victorias y diversión
				</p>
				<Badge variant="secondary" class="text-lg px-4 py-2">El Clásico Eterno</Badge>
			</div>

			<div class="grid md:grid-cols-2 gap-6 mb-8">
				<Card class="bg-blue-50 border-blue-200">
					<CardHeader>
						<CardTitle class="text-blue-800">Real Madrid</CardTitle>
						<CardDescription>Victorias: {{ madridWins }}</CardDescription>
					</CardHeader>
					<CardContent class="space-y-4">
						<Button
							@click="addWinMadrid"
							variant="default"
							class="w-full bg-blue-600 hover:bg-blue-700 hover:animate-pulse"
							>¡Victoria Madrid!</Button
						>
						<Button
							@click="randomBurlaMadrid"
							variant="outline"
							class="w-full hover:animate-pulse"
							>Burlar al Barça</Button
						>
					</CardContent>
				</Card>

				<Card class="bg-red-50 border-red-200">
					<CardHeader>
						<CardTitle class="text-red-800">Barcelona</CardTitle>
						<CardDescription>Victorias: {{ barcelonaWins }}</CardDescription>
					</CardHeader>
					<CardContent class="space-y-4">
						<Button
							@click="addWinBarcelona"
							variant="default"
							class="w-full bg-red-600 hover:bg-red-700 hover:animate-pulse"
							>¡Victoria Barça!</Button
						>
						<Button
							@click="randomBurlaBarcelona"
							variant="outline"
							class="w-full hover:animate-pulse"
							>Burlar al Madrid</Button
						>
					</CardContent>
				</Card>
			</div>

			<div class="grid md:grid-cols-3 gap-6 mb-8">
				<Card>
					<CardHeader>
						<CardTitle>Estadísticas Graciosas</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm">
							Madrid gana Champions porque soborna árbitros, Barça gana Liga porque
							juega en casa.
						</p>
						<p class="text-sm">Como en Venezuela: unos compran, otros protestan.</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Burlas Clásicas</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm">
							"¡Madridistas, sois como la gasolina: caros y contaminantes!"
						</p>
						<p class="text-sm">
							"¡Culés, sois como la oposición: mucho grito, poca acción!"
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Próximo Clásico</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm">¿Quién ganará esta vez?</p>
						<Button @click="verPrediccion" variant="secondary" class="w-full mt-2"
							>Ver Predicción</Button
						>
					</CardContent>
				</Card>
			</div>

			<div class="mb-8">
				<h2 class="text-3xl font-bold text-center mb-6">Clásicos Memorables</h2>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					<Card>
						<CardContent class="p-4">
							<p class="font-semibold">2011: Barça 5-0 Madrid</p>
							<p class="text-sm">La manita de Guardiola. Messi brilló.</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent class="p-4">
							<p class="font-semibold">2017: Madrid 3-2 Barça</p>
							<p class="text-sm">Gol de CR7 en el último minuto.</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent class="p-4">
							<p class="font-semibold">2021: Madrid 2-1 Barça</p>
							<p class="text-sm">Benzema salva al Madrid.</p>
						</CardContent>
					</Card>
				</div>
			</div>

			<div class="mb-8">
				<h2 class="text-3xl font-bold text-center mb-6">Jugadores Icónicos</h2>
				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
					<Card class="text-center">
						<CardContent class="p-4">
							<div class="text-4xl mb-2">⚽</div>
							<p class="font-semibold">Lionel Messi</p>
							<p class="text-sm">Barça Legend</p>
						</CardContent>
					</Card>
					<Card class="text-center">
						<CardContent class="p-4">
							<div class="text-4xl mb-2">🏆</div>
							<p class="font-semibold">Cristiano Ronaldo</p>
							<p class="text-sm">Madrid Legend</p>
						</CardContent>
					</Card>
					<Card class="text-center">
						<CardContent class="p-4">
							<div class="text-4xl mb-2">⚽</div>
							<p class="font-semibold">Xavi Hernández</p>
							<p class="text-sm">Barça Maestro</p>
						</CardContent>
					</Card>
					<Card class="text-center">
						<CardContent class="p-4">
							<div class="text-4xl mb-2">🏆</div>
							<p class="font-semibold">Sergio Ramos</p>
							<p class="text-sm">Madrid Capitán</p>
						</CardContent>
					</Card>
				</div>
			</div>

			<div class="text-gray-500">
				<p>Web dinámica con Vue 3 y shadcn-vue. ¡Diviértete con la rivalidad!</p>
			</div>

			<Dialog v-model:open="isModalOpen">
				<DialogContent>
					<DialogHeader>
						<DialogTitle>¡Mensaje!</DialogTitle>
						<DialogDescription>{{ modalMessage }}</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	</div>
</template>
