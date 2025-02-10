import { AudioPlayerProvider } from "@/context/AudioPlayerContext";
import { useSetupAudioPlayerService } from "@/hooks/useSetupAudioPlayerService";
import { Slot } from "expo-router";

export default () => {
  useSetupAudioPlayerService();
  return (
    <AudioPlayerProvider>
      <Slot />
    </AudioPlayerProvider>
  );
};
