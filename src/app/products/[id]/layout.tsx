export default function productsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div>other products showcase carousel</div>
    </>
  );
}
