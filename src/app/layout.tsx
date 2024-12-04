import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap_changes.css';
import StoreProvider from './StoreProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
