export default {
  button: {
    // https://github.com/orgs/primefaces/discussions/2078
    borderRadius: '0.25rem',
    // paddingX: '3.5rem',
    // paddingY: '1.5rem',
    colorScheme: {
      light: {
        root: {
          primary: {
            borderColor: '{primary.700}',
          },
          danger: {
            hoverBackgroundColor: 'var(--error-color-700)',
            background: 'var(--error-color-500)',
            borderColor: 'var(--error-color-700)',
          },
          success: {
            hoverBackgroundColor: 'var(--success-color-700)',
            background: 'var(--success-color-500)',
            borderColor: 'var(--success-color-700)',
          },
          warn: {
            hoverBackgroundColor: 'var(--warn-color-700)',
            background: 'var(--warn-color-500)',
            borderColor: 'var(--warn-color-700)',
          },
        },
      },
    },
  }
}
