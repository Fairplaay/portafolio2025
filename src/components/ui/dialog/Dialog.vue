<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

const props = defineProps({ open: { type: Boolean, default: false } })
const emit = defineEmits(['update:open'])

const modalRef = ref(null)
const closeBtnRef = ref(null)

function close() {
  emit('update:open', false)
}

const isOpen = computed(() => props.open)

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

watch(isOpen, (val) => {
  if (val) {
    nextTick(() => {
      if (closeBtnRef.value) closeBtnRef.value.focus()
      else if (modalRef.value) modalRef.value.focus()
    })
    window.addEventListener('keydown', onKeydown)
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

onMounted(() => {
  if (isOpen.value) {
    nextTick(() => {
      if (closeBtnRef.value) closeBtnRef.value.focus()
      else if (modalRef.value) modalRef.value.focus()
    })
    window.addEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div>
    <transition name="overlay-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        @click="close"
      ></div>
    </transition>

    <transition name="dialog-scale">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
      >
        <div ref="modalRef" tabindex="-1" class="w-full max-w-lg mx-auto">
          <div class="bg-white dark:bg-slate-800 rounded-lg border shadow-lg overflow-hidden">
            <div class="p-4">
              <header class="mb-2">
                <slot name="title">
                  <h3 class="text-lg font-semibold">Dialog</h3>
                </slot>
              </header>

              <div class="text-sm text-slate-700 dark:text-slate-200">
                <slot />
              </div>
            </div>

            <footer class="px-4 py-3 bg-slate-50 dark:bg-slate-900/40 flex justify-end gap-2">
              <slot name="footer">
                <button
                  ref="closeBtnRef"
                  class="px-3 py-2 rounded bg-slate-200 dark:bg-slate-700"
                  @click="close"
                >
                  Cerrar
                </button>
              </slot>
            </footer>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 180ms ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

.dialog-scale-enter-active,
.dialog-scale-leave-active {
  transition: transform 180ms cubic-bezier(.2,.8,.2,1), opacity 180ms ease;
}
.dialog-scale-enter-from {
  transform: translateY(8px) scale(0.98);
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
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}
</style>
<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <transition name="overlay-fade">
      <div v-if="isOpen" class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close"></div>
    </transition>

    <transition name="dialog-scale">
      <div
        v-if="isOpen"
        class="relative z-10 w-full max-w-lg mx-4"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        ref="modalRef"
      >
        <div class="bg-white dark:bg-slate-800 rounded-lg border shadow-lg overflow-hidden">
          <div class="p-4">
            <header class="mb-2">
              <slot name="title">
                <h3 class="text-lg font-semibold">Dialog</h3>
              </slot>
            </header>

            <div class="text-sm text-slate-700 dark:text-slate-200">
              <slot />
            </div>
          </div>

          <footer class="px-4 py-3 bg-slate-50 dark:bg-slate-900/40 flex justify-end gap-2">
            <slot name="footer">
              <button
                class="px-3 py-2 rounded bg-slate-200 dark:bg-slate-700"
                @click="close"
                ref="closeBtnRef"
              >
                Cerrar
              </button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* overlay fade */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 180ms ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

/* dialog scale + translate */
.dialog-scale-enter-active,
.dialog-scale-leave-active {
  transition: transform 180ms cubic-bezier(.2,.8,.2,1), opacity 180ms ease;
}
.dialog-scale-enter-from {
  transform: translateY(8px) scale(0.98);
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
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}
</style>
<script setup>
import { computed, ref, onMounted, watch, nextTick } from 'vue';

const props = defineProps({ open: { type: Boolean, default: false } });
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

watch(isOpen, (val) => {
  if (val) {
    nextTick(() => {
      if (modalRef.value) modalRef.value.focus();
      if (closeBtnRef.value) closeBtnRef.value.focus();
    });
    window.addEventListener('keydown', onKeydown);
  } else {
    window.removeEventListener('keydown', onKeydown);
  }
});

onMounted(() => {
  if (isOpen.value) {
    nextTick(() => {
      if (modalRef.value) modalRef.value.focus();
    });
    window.addEventListener('keydown', onKeydown);
  }
});
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- overlay with fade -->
    <transition name="overlay-fade">
      <div v-if="isOpen" class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close"></div>
    </transition>

    <!-- dialog panel with scale/translate effect -->
    <transition name="dialog-scale">
      <div
        v-if="isOpen"
        class="relative z-10 w-full max-w-lg mx-4"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        ref="modalRef"
      >
        <div class="bg-white dark:bg-slate-800 rounded-lg border shadow-lg overflow-hidden">
          <div class="p-4">
            <header class="mb-2">
              <slot name="title">
                <h3 class="text-lg font-semibold">Dialog</h3>
              </slot>
            </header>

            <div class="text-sm text-slate-700 dark:text-slate-200">
              <slot />
            </div>
          </div>

          <footer class="px-4 py-3 bg-slate-50 dark:bg-slate-900/40 flex justify-end gap-2">
            <slot name="footer">
              <button
                class="px-3 py-2 rounded bg-slate-200 dark:bg-slate-700"
                @click="close"
                ref="closeBtnRef"
              >
                Cerrar
              </button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* overlay fade */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 180ms ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

/* dialog scale + translate */
.dialog-scale-enter-active,
.dialog-scale-leave-active {
  transition: transform 180ms cubic-bezier(.2,.8,.2,1), opacity 180ms ease;
}
.dialog-scale-enter-from {
  transform: translateY(8px) scale(0.98);
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
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}
</style>
<script setup>
import { computed, ref, onMounted, watch, nextTick } from 'vue';

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
		// wait DOM then focus the modal container for accessibility
		nextTick(() => {
			if (modalRef.value) modalRef.value.focus();
			// prefer focusing the close button if present
			if (closeBtnRef.value) closeBtnRef.value.focus();
		});
		window.addEventListener('keydown', onKeydown);
	} else {
		window.removeEventListener('keydown', onKeydown);
	}
});

onMounted(() => {
	if (isOpen.value) {
		nextTick(() => {
			if (modalRef.value) modalRef.value.focus();
		});
		window.addEventListener('keydown', onKeydown);
	}
});

<script setup>
import { computed, ref, onMounted, watch, nextTick } from 'vue';

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

watch(isOpen, (val) => {
  if (val) {
    // wait DOM then focus the modal container for accessibility
    nextTick(() => {
      if (modalRef.value) modalRef.value.focus();
      // prefer focusing the close button if present
      if (closeBtnRef.value) closeBtnRef.value.focus();
    });
    window.addEventListener('keydown', onKeydown);
  } else {
    window.removeEventListener('keydown', onKeydown);
  }
});

onMounted(() => {
  if (isOpen.value) {
    nextTick(() => {
      if (modalRef.value) modalRef.value.focus();
    });
    window.addEventListener('keydown', onKeydown);
  }
});
</script>
</script>

<template>
	<div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
		<!-- overlay with fade -->
		<transition name="overlay-fade">
			<div v-if="isOpen" class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close"></div>
		</transition>

		<!-- dialog panel with scale/translate effect -->
		<transition name="dialog-scale">
			<div
				v-if="isOpen"
				class="relative z-10 w-full max-w-lg mx-4"
				role="dialog"
				aria-modal="true"
				tabindex="-1"
				ref="modalRef"
			>
				<div class="bg-white dark:bg-slate-800 rounded-lg border shadow-lg overflow-hidden">
					<div class="p-4">
						<header class="mb-2">
							<slot name="title">
								<h3 class="text-lg font-semibold">Dialog</h3>
							</slot>
						</header>

						<div class="text-sm text-slate-700 dark:text-slate-200">
							<slot />
						</div>
					</div>

					<footer class="px-4 py-3 bg-slate-50 dark:bg-slate-900/40 flex justify-end gap-2">
						<slot name="footer">
							<button
								class="px-3 py-2 rounded bg-slate-200 dark:bg-slate-700"
								@click="close"
								ref="closeBtnRef"
							>
								Cerrar
							</button>
						</slot>
					</footer>
				</div>
			</div>
		</transition>
	</div>
</template>
</template>

<style scoped>
/* overlay fade */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
	transition: opacity 180ms ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
	opacity: 0;
}

/* dialog scale + translate */
.dialog-scale-enter-active,
.dialog-scale-leave-active {
	transition:
		transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1),
		opacity 180ms ease;
}
.dialog-scale-enter-from {
	transform: translateY(8px) scale(0.98);
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
	transform: translateY(8px) scale(0.98);
	opacity: 0;
}
</style>
