import { createContext, useEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';

export const PlayerContext = createContext();

export function PlayerContextProvider({ children }) {
    const { data } = useFetch("https://api.sr.se/api/v2/channels/132", {
        params: {
            format: "json",
        },
    });

    const [playing, setPlaying] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [volume, setVolume] = useState(35);
    const [muted, setMuted] = useState(false);

    const player = useRef(new Audio());

    useEffect(() => {
        return () => {
            pause(); 
            player.current = null;
        }
    }, []);

    useEffect(() => {
        if (data?.channel) {
            const channel = data.channel;
            setTitle(channel.name);
            setDescription(channel.tagline);
            player.current.src = channel.liveaudio.url;
        }
    }, [data]);

    useEffect(() => {
        if (!volume || !player.current) return;
        player.current.volume = calculateVolume(volume);
        setMuted(volume <= 0);
    }, [volume]);

    // Separate this from volume state to preserve the volume before toggling mute
    useEffect(() => {
        if (!player.current) return;
        player.current.volume = muted ? 0 : calculateVolume(volume);
    }, [muted]);

    useEffect(() => {
        if (!player.current.src) {
            return;
        }
        if (playing) {
            (async () => {
                setLoading(true);
                await player.current.play();
                setLoading(false);
            })();
        } else {
            player.current.pause();
        }
    }, [playing, player.current.src]);

    function calculateVolume(number) {
        return number / 100;
    }

    function isChannelPlaying(src) {
        if (!player || !src) return false;
        return playing && player.current.src === src;
    }
    
    function changeTrack(url, title = "", description = "") {
        if (!url) return;
        setTitle(title);
        setDescription(description);
        player.current.src = url;
        play();
    }

    function toggleMute() {
        setMuted(muted => !muted);
    }
    
    function togglePlaying() {
        setPlaying(playing => !playing);
    }

    function play() {
        setPlaying(true);
    }

    function pause() {
        setPlaying(false);
    }

    const values = {
        player: player.current,
        changeTrack,
        play,
        pause,
        loading,
        playing,
        title,
        description,
        volume,
        setVolume,
        toggleMute,
        muted,
        isChannelPlaying,
        togglePlaying,
    };

    return (
        <PlayerContext.Provider value={values}>
            {children}
        </PlayerContext.Provider>
    );
}
