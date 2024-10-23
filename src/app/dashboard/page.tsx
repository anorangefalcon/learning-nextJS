import DashboardHead from "./DashboardHeader";

export default function DashboardPage() {
  return (
    <>
      <DashboardHead />
      <p>
        The above heading was imported from another file which shows
        file-colocation in next to manage diff components accross your app.
      </p>
    </>
  );
}
