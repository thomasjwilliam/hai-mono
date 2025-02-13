import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import semantic from './primevue/semantic'
import components from './primevue/components'

const customThemePreset = definePreset(Aura, {
  semantic: semantic,
  components: components
});

export default {
  preset: customThemePreset,
  options: {
    darkModeSelector: '.dark'
  },
};
