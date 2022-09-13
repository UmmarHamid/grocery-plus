import Navigation from "./Navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="relative flex flex-col items-center justify-between max-w-[375px] mx-auto">
        <main>{children}</main>
        <Navigation />
      </div>
    </>
  );
}
