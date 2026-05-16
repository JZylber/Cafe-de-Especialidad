import { preguntar } from './lib/consola.ts';

const totalTexto: string = preguntar('Total de la cuenta: ');
const esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
const personasTexto: string = preguntar('Dividir la cuenta entre: ');

const totalPorPersona: number = 0; // COMPLETAR: dividir totalConDescuento entre personas
console.log(`Total por persona: $${totalPorPersona}`);
