import { createChannel } from "@/service";
import { useState } from "react";

function CreateToken() {
  const [channelName, setChannelName] = useState("");
  const [token, setToken] = useState("");
  const handleCreateChannel = async () => {
    const channelToken = await createChannel(channelName);
    setToken(channelToken);
  };
  return (
    <>
      <h1>채널 생성</h1>
      <input
        type="text"
        placeholder="채널 이름"
        onChange={(e) => setChannelName(e.target.value)}
      />
      <button onClick={handleCreateChannel}>Create Channel</button>
      <br />
      <h3>Token : {token}</h3>
    </>
  );
}
export default CreateToken;
