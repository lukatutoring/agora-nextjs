import axios from "axios";
export const createChannel = async (channelName: string) => {
  const params = {
    channelName,
  };
  const { channelToken } = await (
    await axios.post(`http://localhost:4000/api/v1/channel`, params)
  ).data;
  return channelToken;
};
