import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
  onError(error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        'Missing translation in ' + locale + '.json: ' + error.message
      );
    }
  }
}));
