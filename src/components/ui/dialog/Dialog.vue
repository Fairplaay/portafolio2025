<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';

const props = defineProps({
	open: { type: Boolean, default: false },
});
const emit = defineEmits(['update:open']);

const modalRef = ref(null);
const closeBtnRef = ref(null);

function close() {
	emit('update:open', false);
}

const isOpen = computed(() => props.open);

function onKeydown(e) {
	if (e.key === 'Escape') close();
}

watch(isOpen, val => {
	if (val) {
		nextTick(() => {
			if (closeBtnRef.value) closeBtnRef.value.focus();
			else if (modalRef.value) modalRef.value.focus();
		});
		window.addEventListener('keydown', onKeydown);
	} else {
		window.removeEventListener('keydown', onKeydown);
	}
});

onMounted(() => {
	if (isOpen.value) {
		nextTick(() => {
			if (closeBtnRef.value) closeBtnRef.value.focus();
			else if (modalRef.value) modalRef.value.focus();
		});
		window.addEventListener('keydown', onKeydown);
	}
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
	<Teleport to="body">
		<transition name="overlay-fade">
			<div
				v-if="isOpen"
				class="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md z-40"
				@click="close"
			></div>
		</transition>

		<transition name="dialog-scale">
			<div
				v-if="isOpen"
				class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
				role="dialog"
				aria-modal="true"
			>
				<div
					ref="modalRef"
					tabindex="-1"
					class="w-full max-w-lg mx-auto pointer-events-auto"
					@click.stop
				>
					<div
						class="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden backdrop-blur-xl"
					>
						<!-- Header con gradiente -->
						<div
							class="relative px-6 pt-6 pb-4 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 dark:from-violet-500/20 dark:via-purple-500/20 dark:to-fuchsia-500/20"
						>
							<div
								class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"
							></div>

							<header class="flex items-start justify-between">
								<slot name="title">
									<h3
										class="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent"
									>
										Dialog
									</h3>
								</slot>

								<button
									ref="closeBtnRef"
									class="ml-4 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-200 hover:scale-110 active:scale-95 group"
									aria-label="Cerrar"
									@click="close"
								>
									<svg
										class="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</header>
						</div>

						<!-- Content -->
						<div class="px-6 py-5 text-slate-700 dark:text-slate-200">
							<slot>
								<p class="text-sm leading-relaxed">
									Este es un diálogo de ejemplo con animaciones suaves y un diseño
									moderno.
								</p>
							</slot>
						</div>

						<!-- Footer -->
						<footer
							class="px-6 py-4 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50 flex justify-end gap-3"
						>
							<slot name="footer">
								<button
									class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 active:scale-95"
									@click="close"
								>
									Cancelar
								</button>
								<button
									class="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/30 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/40 active:scale-95"
									@click="close"
								>
									Aceptar
								</button>
							</slot>
						</footer>
					</div>
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<style scoped>
/* Animación del overlay */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
	transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
	opacity: 0;
}

/* Animación del diálogo con efecto de escala y rebote */
.dialog-scale-enter-active {
	transition:
		transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1),
		opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.dialog-scale-leave-active {
	transition:
		transform 250ms cubic-bezier(0.4, 0, 1, 1),
		opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.dialog-scale-enter-from {
	transform: translateY(-20px) scale(0.9);
	opacity: 0;
}

.dialog-scale-enter-to {
	transform: translateY(0) scale(1);
	opacity: 1;
}

.dialog-scale-leave-from {
	transform: translateY(0) scale(1);
	opacity: 1;
}

.dialog-scale-leave-to {
	transform: translateY(10px) scale(0.95);
	opacity: 0;
}
</style>
