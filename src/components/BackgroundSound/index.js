import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import Sound from 'react-native-sound';

const MusicPlayer = ({ music }) => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    console.log(music, isPlaying, ',isplayingggggggg')

    useEffect(() => {
        const loadSound = async () => {
            const soundObj = new Sound(music, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    return;
                }
                setSound(soundObj);
            });
        };
        loadSound();

        return () => {
            if (sound) {
                sound.release();
            }
        };
    }, [music]);

    const playSound = () => {
        if (sound) {
            sound.play(() => setIsPlaying(false));
            setIsPlaying(true);
        }
    };

    const pauseSound = () => {
        if (sound && isPlaying) {
            sound.pause();
            setIsPlaying(false);
        }
    };

    const stopSound = () => {
        if (sound && isPlaying) {
            sound.stop();
            setIsPlaying(false);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Play" onPress={playSound} disabled={!sound || isPlaying} />
            <Button title="Pause" onPress={pauseSound} disabled={!sound || !isPlaying} />
            <Button title="Stop" onPress={stopSound} disabled={!sound || !isPlaying} />
        </View>
    );
};
nb
export default MusicPlayer;