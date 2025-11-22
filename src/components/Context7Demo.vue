<template>
	<Card class="hover:shadow-xl transition-shadow border-indigo-200 dark:border-indigo-800">
		<CardHeader>
			<CardTitle class="flex items-center gap-2"> 🧪 Context7 Demo </CardTitle>
			<CardDescription>Reactivity Concepts from Docs</CardDescription>
		</CardHeader>
		<CardContent>
			<div class="space-y-4">
				<div
					class="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800"
				>
					<h4
						class="font-semibold mb-3 text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2"
					>
						<span
							class="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded"
						>
							Concept
						</span>
						Ref vs Reactive Destructuring
					</h4>

					<div class="grid grid-cols-2 gap-4 text-center">
						<!-- Working Example -->
						<div class="p-2 rounded bg-white dark:bg-slate-800 shadow-sm">
							<p class="text-xs text-green-600 dark:text-green-400 font-medium mb-1">
								✅ Ref (Works)
							</p>
							<p class="text-3xl font-bold text-slate-800 dark:text-slate-200 my-2">
								{{ count }}
							</p>
							<UiButton size="sm" class="w-full h-8 text-xs" @click="count++">
								Increment
							</UiButton>
						</div>

						<!-- Broken Example -->
						<div
							class="p-2 rounded bg-white dark:bg-slate-800 shadow-sm relative overflow-hidden"
						>
							<div
								class="absolute inset-0 bg-stripes opacity-[0.03] pointer-events-none"
							></div>
							<p class="text-xs text-red-500 font-medium mb-1">
								❌ Destructured (Lost)
							</p>
							<p class="text-3xl font-bold text-slate-400 my-2">{{ brokenCount }}</p>
							<UiButton
								size="sm"
								variant="outline"
								class="w-full h-8 text-xs"
								@click="brokenCount++"
							>
								Try Increment
							</UiButton>
						</div>
					</div>

					<div
						class="mt-3 text-xs text-slate-500 dark:text-slate-400 bg-amber-50 dark:bg-amber-900/20 p-2 rounded border border-amber-100 dark:border-amber-900/30"
					>
						<p class="font-medium text-amber-700 dark:text-amber-500 mb-1">
							💡 Context7 Insight:
						</p>
						"Destructuring a primitive property from a reactive object will sever its
						reactivity."
					</div>
				</div>
			</div>
		</CardContent>
		<CardFooter>
			<UiButton variant="ghost" class="w-full text-xs text-slate-500" @click="reset">
				Reset Demo
			</UiButton>
		</CardFooter>
	</Card>
</template>

<script setup>
import { ref, reactive } from 'vue';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Button as UiButton } from '@/components/ui/button';

// Demo 1: Ref works fine
const count = ref(0);

// Demo 2: Reactivity loss demonstration
const state = reactive({
	val: 0,
});

// This loses reactivity connection because it extracts the primitive value!
// In <script setup>, this variable is exposed to the template.
// When the button clicks, it updates this local variable, but since it's not a ref,
// it doesn't trigger a re-render.
let { val: brokenCount } = state;

const reset = () => {
	count.value = 0;
	brokenCount = 0;
};
</script>

<style scoped>
.bg-stripes {
	background-image: linear-gradient(
		45deg,
		#000 25%,
		transparent 25%,
		transparent 50%,
		#000 50%,
		#000 75%,
		transparent 75%,
		transparent
	);
	background-size: 10px 10px;
}
</style>
