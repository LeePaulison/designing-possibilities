import Breadcrumbs from "./Breadcrumbs";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
}
