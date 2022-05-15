import 'react-i18next';
import en from './langs/en'

declare module 'react-i18next' {
  interface CustomTypeOptions  {
    defaultNS: 'common';
    resources: typeof en;
  }
}