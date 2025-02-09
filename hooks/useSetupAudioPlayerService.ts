import { useState, useEffect, useCallback } from "react";
import TrackPlayer, { Capability, AppKilledPlaybackBehavior } from "react-native-track-player";
import { dummyTracks } from "../data/dummyTracks"; // Import dummy tracks or fetch dynamically


export const useSetupAudioPlayerService = () => {
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    const setupPlayer = useCallback(async () => {
        try {
            await TrackPlayer.setupPlayer({ autoHandleInterruptions: true });
            await TrackPlayer.updateOptions({
                android: {
                    appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
                },
                backwardJumpInterval: 15,
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SeekTo,
                    Capability.JumpForward,
                    Capability.JumpBackward,
                ],
                compactCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SeekTo,
                    Capability.JumpForward,
                    Capability.JumpBackward,
                ],
                forwardJumpInterval: 30,
                progressUpdateEventInterval: 1,
            })
            await TrackPlayer.add(dummyTracks); // Add tracks
            setIsPlayerReady(true);
        } catch (error) {
            console.error("Error setting up player:", error);
        }
    },[])


useEffect(() => {
    setupPlayer();
    return () => {
        TrackPlayer.reset()
    };
}, [setupPlayer]);

return { isPlayerReady}

}