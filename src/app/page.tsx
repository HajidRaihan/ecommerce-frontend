import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <h1 className="font-bold text-3xl ">Adili Jokowi</h1>
      <Button>Test</Button>
      <Button variant="outline">Test</Button>
      <Button variant="link">Test</Button>
      <Button variant={"ghost"}></Button>
    </div>
  );
}
