<script setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-vue-next';
</script>

<template>
	<section id="contact" class="container py-12 md:py-24">
		<div class="grid gap-8 lg:grid-cols-2">
			<div class="space-y-8 text-center md:text-left order-2 lg:order-1">
				<div class="space-y-2">
					<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Contacto 📬
					</h2>
					<p class="text-muted-foreground text-lg">
						¿Tienes un proyecto en mente o simplemente quieres saludar? ¡Envíame un
						mensaje!
					</p>
				</div>
				<div class="space-y-4 inline-block text-left">
					<div class="flex items-center space-x-3 text-muted-foreground">
						<div class="p-2 rounded-full bg-primary/10">
							<Mail class="h-5 w-5 text-primary" />
						</div>
						<span class="text-base">fairplaay16@gmail.com</span>
					</div>
					<div class="flex items-center space-x-3 text-muted-foreground">
						<div class="p-2 rounded-full bg-primary/10">
							<Phone class="h-5 w-5 text-primary" />
						</div>
						<span class="text-base">+58 4245792214</span>
					</div>
					<div class="flex items-center space-x-3 text-muted-foreground">
						<div class="p-2 rounded-full bg-primary/10">
							<MapPin class="h-5 w-5 text-primary" />
						</div>
						<span class="text-base">Barquisimeto, VE</span>
					</div>
				</div>
			</div>
			<Card class="order-1 lg:order-2 border-none shadow-lg">
				<CardHeader>
					<CardTitle class="text-2xl">Envíame un mensaje</CardTitle>
					<CardDescription class="text-base">
						Completa el formulario y te responderé lo antes posible.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form class="space-y-4" onsubmit="event.preventDefault();">
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div class="space-y-2">
								<Input
									id="first-name"
									placeholder="Nombre"
									class="text-base"
									required
								/>
							</div>
							<div class="space-y-2">
								<Input
									id="last-name"
									placeholder="Apellido"
									class="text-base"
									required
								/>
							</div>
						</div>
						<div class="space-y-2">
							<Input
								id="email"
								placeholder="Email"
								type="email"
								class="text-base"
								required
							/>
						</div>
						<div class="space-y-2">
							<Textarea
								placeholder="Tu mensaje"
								class="min-h-[120px] text-base"
								required
							/>
						</div>
						<Button type="submit" class="w-full rounded-full text-base font-semibold">
							Enviar Mensaje 📨
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	</section>
</template>
