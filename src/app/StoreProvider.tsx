'use client';

import Menu from '@/components/Menu';
import store from '@/lib/store';
import { Provider } from 'react-redux';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Menu />
      {children}
    </Provider>
  );
}
