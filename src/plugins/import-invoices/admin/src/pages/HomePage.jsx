import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Flex,
  Alert,
} from '@strapi/design-system';
import { Upload } from '@strapi/icons';
import { Page, useNotification, useFetchClient } from '@strapi/strapi/admin';
import { PLUGIN_ID } from '../pluginId';

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { post } = useFetchClient();
  const { toggleNotification } = useNotification();

  const handleFileChange = (event) => {
    setFile(event.target.files?.[0] ?? null);
    setResult(null);
  };

  const handleImport = async () => {
    if (!file) {
      toggleNotification({
        type: 'warning',
        message: 'Выберите .xlsx файл',
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);

    try {
      const { data } = await post(`/${PLUGIN_ID}/import`, formData);
      setResult(data);

      toggleNotification({
        type: data.errors?.length ? 'warning' : 'success',
        message: `Импорт завершён: создано ${data.created}, обновлено ${data.updated}`,
      });
    } catch (error) {
      const message = error?.response?.data?.error?.message || error.message || 'Ошибка импорта';

      toggleNotification({
        type: 'danger',
        message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page.Main>
      <Page.Title>Import Invoices</Page.Title>

      <Box padding={8} background="neutral0" shadow="filterShadow" hasRadius>
        <Flex direction="column" alignItems="flex-start" gap={4}>
          <Typography variant="beta">Импорт страниц Invoices_pages</Typography>

          <Typography variant="pi" textColor="neutral600">
            A: URL (slug). B: hero subtitle. C/D/E: invoice_elements. F: FAQ title. G–N: 4 вопроса и ответа.
          </Typography>

          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
          />

          <Button
            startIcon={<Upload />}
            onClick={handleImport}
            loading={loading}
            disabled={!file || loading}
          >
            import_invoices
          </Button>

          {result && (
            <Box width="100%">
              <Alert
                closeLabel="Close"
                title="Результат импорта"
                variant={result.errors?.length ? 'warning' : 'success'}
              >
                <Typography>
                  Всего строк: {result.total}. Создано: {result.created}. Обновлено: {result.updated}.
                </Typography>
              </Alert>

              {result.errors?.length > 0 && (
                <Box paddingTop={4}>
                  <Typography fontWeight="bold">Ошибки:</Typography>
                  <pre style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>
                    {JSON.stringify(result.errors, null, 2)}
                  </pre>
                </Box>
              )}

              <Box paddingTop={4}>
                <pre style={{ whiteSpace: 'pre-wrap', maxHeight: 400, overflow: 'auto' }}>
                  {JSON.stringify(result.items, null, 2)}
                </pre>
              </Box>
            </Box>
          )}
        </Flex>
      </Box>
    </Page.Main>
  );
};

export default HomePage;
