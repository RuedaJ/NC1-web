export const metadata = {
  title: "Herramienta de Evaluación de Capital Natural",
  description: "Evaluación y visualización del potencial regenerativo del capital natural.",
  openGraph: { title: "Capital Natural", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
