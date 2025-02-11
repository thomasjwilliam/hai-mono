import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const customThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: 'var(--primary-color-50)',
      100: 'var(--primary-color-100)',
      200: 'var(--primary-color-200)',
      300: 'var(--primary-color-300)',
      400: 'var(--primary-color-400)',
      500: 'var(--primary-color-500)',
      600: 'var(--primary-color-600)',
      700: 'var(--primary-color-700)',
      800: 'var(--primary-color-800)',
      900: 'var(--primary-color-900)',
      950: 'var(--primary-color-950)',
    },
    colorScheme: {
      light: {
        surface: {
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
      dark: {
        surface: {
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
    },
  },
  components: {
    button: {
      borderRadius: '0.25rem',
    }
  }
});

export default {
  preset: customThemePreset,
  options: {
    darkModeSelector: '.dark'
  },
};
