<script setup>
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-vue-next';

const projects = [
	{
		title: 'E-commerce Escalable',
		description:
			'Plataforma de comercio electrónico construida con microservicios, capaz de manejar alto tráfico y transacciones seguras.',
		tags: ['Vue.js', 'Node.js', 'MongoDB', 'Docker'],
		emoji: '🛒',
		github: '#',
		demo: '#',
	},
	{
		title: 'Gestor de Tareas',
		description:
			'Aplicación para la gestión eficiente de tareas y proyectos en equipo, con actualizaciones en tiempo real.',
		tags: ['React', 'Firebase', 'Tailwind CSS'],
		emoji: '✅',
		github: '#',
		demo: '#',
	},
	{
		title: 'Dashboard Analítico',
		description:
			'Panel de control para visualización de datos complejos, con gráficos interactivos y reportes exportables.',
		tags: ['Angular', 'D3.js', 'Express'],
		github: '#',
		demo: '#',
		emoji: '📊',
	},
];
</script>

<template>
	<section id="projects" class="container py-12 md:py-24 bg-muted/30 rounded-3xl my-8">
		<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
			Proyectos Destacados 🚀
		</h2>
		<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<Card
				v-for="project in projects"
				:key="project.title"
				class="flex flex-col overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
			>
				<div
					class="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
				>
					<div class="text-6xl">{{ project.emoji }}</div>
				</div>
				<CardHeader>
					<CardTitle class="text-xl">{{ project.title }}</CardTitle>
					<CardDescription class="text-base">{{ project.description }}</CardDescription>
				</CardHeader>
				<CardContent class="flex-1">
					<div class="flex flex-wrap gap-2 mt-2">
						<Badge
							v-for="tag in project.tags"
							:key="tag"
							variant="outline"
							class="rounded-full"
						>
							{{ tag }}
						</Badge>
					</div>
				</CardContent>
				<CardFooter class="flex gap-2 pt-4">
					<Button variant="outline" size="sm" class="w-full rounded-full" as-child>
						<a :href="project.github" target="_blank" rel="noopener noreferrer">
							<Github class="mr-2 h-4 w-4" /> Código
						</a>
					</Button>
					<Button size="sm" class="w-full rounded-full" as-child>
						<a :href="project.demo" target="_blank" rel="noopener noreferrer">
							<ExternalLink class="mr-2 h-4 w-4" /> Demo
						</a>
					</Button>
				</CardFooter>
			</Card>
		</div>
	</section>
</template>
