import CreateToken from "@/components/CreateToken";
import dynamic from "next/dynamic";

const VoiceCall = dynamic(() => import("../components/Room"), { ssr: false });

export default function Home() {
  return (
    <>
      <CreateToken />
      <VoiceCall />
    </>
  );
}
