import Aura from '@primevue/themes/aura';

export const theme = {
  preset: Aura,
  options: {
    darkModeSelector: '.app-dark'
  }
}

import { definePreset } from '@primevue/themes';

const theme1Preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
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
      borderRadius: '0',
      paddingX: '3.5rem',
      paddingY: '1.5rem',
      colorScheme: {
        light: {
          root: {
            primary: {
              color: '#ffffff',
              hoverColor: '{primary.100}',
              background: '#1e54c7',
              borderColor: '{primary.950}',
            },
          },
        },
      },
    },
  }
});

export const theme1 = {
  preset: theme1Preset,
  options: {
    darkModeSelector: '.dark',
    cssLayer: {
      name: 'primevue',
      order: 'tailwind-theme, tailwind-base, primevue, tailwind-utilities',
    },
  },
};


const theme2Preset = definePreset(Aura, {
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
      // https://github.com/orgs/primefaces/discussions/2078
      // borderRadius: '0',
      // paddingX: '3.5rem',
      // paddingY: '1.5rem',
      // colorScheme: {
      //   light: {
      //     root: {
      //       primary: {
      //         color: '#ffffff',
      //         hoverColor: '{primary.100}',
      //         background: '#1e54c7',
      //         borderColor: '{primary.950}',
      //       },
      //     },
      //   },
      // },
    },
  }
});

export const theme2 = {
  preset: theme2Preset,
  options: {
    darkModeSelector: '.dark',
    cssLayer: {
      name: 'primevue',
      order: 'tailwind-theme, tailwind-base, primevue, tailwind-utilities',
    },
  },
};
