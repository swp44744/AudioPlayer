import { useSetupAudioPlayerService } from "@/hooks/useSetupAudioPlayerService"
import { Slot } from "expo-router"

export default () => {
    useSetupAudioPlayerService()
    return (
        <Slot />
    )
}