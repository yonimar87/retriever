import axios from 'axios';

const baseUrl = 'https://servis-devau.retrieverdev.net/quotemanagement/api/unauthenticated/v1/quotes';

export const getQuotePreview = async (quoteId: string) => {
  const apiUrl = `${baseUrl}/preview/${quoteId}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch quote preview');
  }
};
