import { ref } from 'vue';
import confetti from 'canvas-confetti';
import { burlasMadrid, burlasBarcelona, predicciones } from '@/lib/gameConstants';

/**
 * Composable para manejar la lógica del juego Real Madrid vs Barcelona.
 * Incluye contadores de victorias, burlas y predicciones.
 *
 * @returns {Object} Objeto con refs y funciones del juego.
 */
export function useGame() {
	/**
	 * Contador de victorias del Real Madrid.
	 * @type {import('vue').Ref<number>}
	 */
	const madridWins = ref(0);

	/**
	 * Contador de victorias del Barcelona.
	 * @type {import('vue').Ref<number>}
	 */
	const barcelonaWins = ref(0);

	/**
	 * Estado del modal (abierto/cerrado).
	 * @type {import('vue').Ref<boolean>}
	 */
	const isModalOpen = ref(false);

	/**
	 * Mensaje a mostrar en el modal.
	 * @type {import('vue').Ref<string>}
	 */
	const modalMessage = ref('');

	/**
	 * Incrementa las victorias del Madrid y lanza confeti.
	 */
	const addWinMadrid = () => {
		madridWins.value++;
		confetti();
	};

	/**
	 * Incrementa las victorias del Barcelona y lanza confeti.
	 */
	const addWinBarcelona = () => {
		barcelonaWins.value++;
		confetti();
	};

	/**
	 * Muestra una burla aleatoria del Madrid en el modal.
	 */
	const randomBurlaMadrid = () => {
		modalMessage.value = getRandomElement(burlasMadrid);
		isModalOpen.value = true;
	};

	/**
	 * Muestra una burla aleatoria del Barcelona en el modal.
	 */
	const randomBurlaBarcelona = () => {
		modalMessage.value = getRandomElement(burlasBarcelona);
		isModalOpen.value = true;
	};

	/**
	 * Muestra una predicción aleatoria en el modal.
	 */
	const verPrediccion = () => {
		const prediction = getRandomElement(predicciones);
		if (prediction !== null) {
			modalMessage.value = prediction;
			isModalOpen.value = true;
		}
	};

	/**
	 * Obtiene un elemento aleatorio de un array.
	 * @param {Array} array - El array del que obtener el elemento.
	 * @returns {any|null} Elemento aleatorio o null si el array está vacío.
	 */
	const getRandomElement = array => {
		if (!Array.isArray(array) || array.length === 0) {
			return null;
		}
		if (array.length === 1) {
			return array[0];
		}
		return array[Math.floor(Math.random() * array.length)];
	};

	return {
		madridWins,
		barcelonaWins,
		isModalOpen,
		modalMessage,
		addWinMadrid,
		addWinBarcelona,
		randomBurlaMadrid,
		randomBurlaBarcelona,
		verPrediccion,
	};
}
