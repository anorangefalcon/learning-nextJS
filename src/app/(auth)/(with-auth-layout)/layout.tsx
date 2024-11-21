export default function authLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <>
      <h4>Inner auth layout</h4>
      {children}
    </>
  );
}
