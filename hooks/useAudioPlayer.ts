import { dummyTracks } from "@/data/dummyTracks";
import { useState, useEffect, useCallback } from "react";
import TrackPlayer, { State, usePlaybackState, useActiveTrack } from "react-native-track-player";

export function useAudioPlayer() {
    const { state } = usePlaybackState();
    const [currentTrack, setCurrentTrack] = useState(dummyTracks[0]);

    const togglePlayback = async () => {
        const currentState = await TrackPlayer.getState();
        if (currentState === State.Playing) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    }

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
        await setActiveTrack()
        await TrackPlayer.play();
    }

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
        await setActiveTrack()
        await TrackPlayer.play();
    }

    const setActiveTrack = async ()  => {
        const track = await TrackPlayer.getActiveTrack()
        
        const activeTrack = dummyTracks.find(t => t.title === track?.title);
        console.log('trackkkkk? ',track?.title, activeTrack?.title);

         if(activeTrack)  setCurrentTrack(activeTrack)
    }

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
}

const changeTrack = async (trackId: string) => {
    const track = dummyTracks.find(t => t.id === trackId);
    if (track) {
      setCurrentTrack(track);
      await TrackPlayer.skip(dummyTracks.indexOf(track))
      await TrackPlayer.play();
    }
  };

return {
    state,
    togglePlayback,
    skipToNext,
    skipToPrevious,
    seekTo,
    dummyTracks,
    currentTrack,
    changeTrack
};
}
