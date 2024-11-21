export const metadata = {
  title: {
    default: "Products",
    template: "%s | Products",
    // absolute: "" // to be used inside pages to overide template (check page when product id exceeds 50)
  },
  description: "Products page",
};

export default function Products({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
