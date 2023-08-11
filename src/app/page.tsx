import Image from "next/image";
import AlertDemo from "@/components/AlertDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      landing page here
      <AlertDemo title="Heya!" description="Welcome to Isked." />
    </main>
  );
}
