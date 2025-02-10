import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
} from "react";
import TrackPlayer, {
  State,
  usePlaybackState,
} from "react-native-track-player";
import { dummyTracks } from "@/data/dummyTracks";
import { Track } from "@/types/audioPlayer/track";

interface AudioPlayerContextProps {
  currentTrack: Track;
  togglePlayback: () => Promise<void>;
  skipToNext: () => Promise<void>;
  skipToPrevious: () => Promise<void>;
  seekTo: (direction: "forward" | "backward") => Promise<void>;
  changeTrack: (trackId: string) => Promise<void>;
  playbackState: State | undefined;
  dummyTracks: Track[];
  handleFavorits: (track: Track) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextProps>(
  {} as AudioPlayerContextProps
);

export const AudioPlayerProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { state: playbackState } = usePlaybackState();
  const [currentTrack, setCurrentTrack] = useState<Track>(dummyTracks[0]);
  const [tracks, setTracks] = useState(dummyTracks);

  const handleFavorits = (track: Track) => {
    setTracks((prevTracks) =>
      prevTracks.map((t) =>
        track.id === t.id ? { ...t, favorit: !t.favorit } : t
      ))
  };

  const updateActiveTrack = async () => {
    const track = await TrackPlayer.getActiveTrack();
    const activeTrack = dummyTracks.find((t) => t.title === track?.title);
    if (activeTrack) setCurrentTrack(activeTrack);
  };

  const togglePlayback = async () => {
    const currentState = await TrackPlayer.getState();
    if (currentState === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
    await updateActiveTrack();
    await TrackPlayer.play();
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
    await updateActiveTrack();
    await TrackPlayer.play();
  };

  const seekTo = async (direction: "forward" | "backward") => {
    try {
      const { position, duration } = await TrackPlayer.getProgress();
      const increment = 15;
      const newPosition =
        direction === "forward"
          ? Math.min(position + increment, duration)
          : Math.max(position - increment, 0);

      await TrackPlayer.seekTo(newPosition);
    } catch (error) {
      console.error("Error seeking track:", error);
    }
  };

  const changeTrack = async (trackId: string) => {
    const track = dummyTracks.find((t) => t.id === trackId);
    if (track) {
      setCurrentTrack(track);
      await TrackPlayer.skip(dummyTracks.indexOf(track));
      await TrackPlayer.play();
    }
  };

  useEffect(() => {
    updateActiveTrack();
  }, []);

  return (
    <AudioPlayerContext.Provider
      value={{
        currentTrack,
        togglePlayback,
        skipToNext,
        skipToPrevious,
        seekTo,
        changeTrack,
        playbackState,
        dummyTracks: tracks,
        handleFavorits,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = () => useContext(AudioPlayerContext);
