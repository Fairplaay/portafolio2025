<script setup>
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const skillCategories = [
	{
		title: 'Frontend',
		skills: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue.js',
			'React.js',
			'Angular',
			'Bootstrap',
			'Tailwind CSS',
			'CSS Grid',
			'Webpack',
		],
	},
	{
		title: 'Backend',
		skills: ['Node.js', 'Express', 'PHP'],
	},
	{
		title: 'Database',
		skills: ['MySQL', 'MongoDB'],
	},
	{
		title: 'Tools & Others',
		skills: ['Git', 'Linux', 'NPM', 'POO', 'Inglés Básico'],
	},
];
</script>

<template>
	<section id="skills" class="container py-12 md:py-24">
		<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
			Habilidades 🛠️
		</h2>
		<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
			<Card
				v-for="category in skillCategories"
				:key="category.title"
				class="h-full border-none shadow-md bg-muted/40 hover:bg-muted/60 transition-colors"
			>
				<CardHeader>
					<CardTitle class="text-xl text-center">{{ category.title }}</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="flex flex-wrap justify-center gap-2">
						<Badge
							v-for="skill in category.skills"
							:key="skill"
							variant="secondary"
							class="px-3 py-1 text-sm rounded-full"
						>
							{{ skill }}
						</Badge>
					</div>
				</CardContent>
			</Card>
		</div>
	</section>
</template>
