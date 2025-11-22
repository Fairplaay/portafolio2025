<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-vue-next';

const navItems = [
	{ name: 'Sobre mí', href: '#about' },
	{ name: 'Habilidades', href: '#skills' },
	{ name: 'Proyectos', href: '#projects' },
	{ name: 'Contacto', href: '#contact' },
];

const isOpen = ref(false);
</script>

<template>
	<header
		class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container flex h-14 items-center justify-between">
			<div class="mr-4 hidden md:flex">
				<a class="mr-6 flex items-center space-x-2" href="#">
					<span class="hidden font-bold sm:inline-block">Jesús García</span>
				</a>
				<nav class="flex items-center space-x-6 text-sm font-medium">
					<a
						v-for="item in navItems"
						:key="item.href"
						:href="item.href"
						class="transition-colors hover:text-foreground/80 text-foreground/60"
					>
						{{ item.name }}
					</a>
				</nav>
			</div>
			<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
				<div class="w-full flex-1 md:w-auto md:flex-none">
					<!-- Placeholder for search or other items -->
				</div>

				<!-- Mobile Menu -->
				<Sheet v-model:open="isOpen">
					<SheetTrigger as-child>
						<Button
							variant="ghost"
							class="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
						>
							<Menu class="h-6 w-6" />
							<span class="sr-only">Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" class="pr-0">
						<a href="#" class="flex items-center" @click="isOpen = false">
							<span class="font-bold">Jesús García</span>
						</a>
						<div class="my-4 pb-10 pl-6">
							<div class="flex flex-col space-y-3">
								<a
									v-for="item in navItems"
									:key="item.href"
									:href="item.href"
									class="text-muted-foreground hover:text-foreground"
									@click="isOpen = false"
								>
									{{ item.name }}
								</a>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	</header>
</template>
