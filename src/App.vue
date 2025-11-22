<script setup>
import { onMounted } from 'vue';
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import practica1 from '@/components/practica1.vue';
onMounted(() => {
	document.documentElement.classList.add('dark');
});
</script>

<template>
	<div class="min-h-screen bg-background text-foreground font-sans antialiased">
		<Navbar />
		<main class="px-4 sm:px-6 lg:px-8">
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
			<practica1 />
		</main>
		<Footer />
	</div>
</template>
