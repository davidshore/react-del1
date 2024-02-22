import useOnlineStatus from "@/hooks/useOnlineStatus";

export default function Home() {
  const isOnline = useOnlineStatus();

  return (
    <main>
      <h1>Sida 2</h1>
      <h2>
        {isOnline ? (
          <p className="text-green-500">Du är online</p>
        ) : (
          <p className="text-red-500">Du är offline</p>
        )}
      </h2>
    </main>
  );
}
