import Navigation from "./Navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="relative bg-gray-100 flex flex-col items-center justify-between max-w-[480px] mx-auto h-[812px]">
        <main className="w-full max-h-[744px] overflow-y-auto px-6">
          {children}
        </main>
        <Navigation />
      </div>
    </>
  );
}
