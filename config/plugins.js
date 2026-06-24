module.exports = () => ({
  'import-invoices': {
    enabled: true,
    resolve: './src/plugins/import-invoices',
  },
  'import-transfers': {
    enabled: true,
    resolve: './src/plugins/import-transfers',
  },
});
