import ServersPanel from "@/components/ServersPanel";

export default function Home() {
  return (
    <main className=" bg-blue-300">
      <ServersPanel src={'https://picsum.photos/20/20'} alt={''} fallback="" trigger="hhh" content="" activityStatusSrc={"https://picsum.photos/20"} pingsCount={2} />
    </main>
  );
}
