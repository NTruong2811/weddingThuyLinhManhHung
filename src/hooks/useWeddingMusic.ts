"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function createRomanticPianoPlayer() {
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext;
  const ctx = new AudioCtx();
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }

  const masterFilter = ctx.createBiquadFilter();
  masterFilter.type = "lowpass";
  masterFilter.frequency.value = 1850;
  masterFilter.Q.value = 0.7;

  const masterGain = ctx.createGain();
  masterGain.gain.value = 0.42;
  masterFilter.connect(masterGain);
  masterGain.connect(ctx.destination);

  const playPianoVoice = (
    freq: number,
    volume: number,
    duration: number,
    delay = 0
  ) => {
    const start = ctx.currentTime + delay;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc1.type = "triangle";
    osc2.type = "sine";
    osc1.frequency.setValueAtTime(freq, start);
    osc2.frequency.setValueAtTime(freq * 2, start);

    const g1 = ctx.createGain();
    const g2 = ctx.createGain();
    g1.gain.setValueAtTime(0.0001, start);
    g1.gain.linearRampToValueAtTime(volume, start + 0.025);
    g1.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    g2.gain.setValueAtTime(0.0001, start);
    g2.gain.linearRampToValueAtTime(volume * 0.22, start + 0.015);
    g2.gain.exponentialRampToValueAtTime(0.0001, start + duration * 0.55);

    osc1.connect(g1);
    osc2.connect(g2);
    g1.connect(masterFilter);
    g2.connect(masterFilter);

    osc1.start(start);
    osc2.start(start);
    osc1.stop(start + duration + 0.05);
    osc2.stop(start + duration + 0.05);
  };

  const bars: Array<{ bass: number; arp: number[]; melody: number }> = [
    { bass: 146.83, arp: [293.66, 369.99, 440.0, 587.33], melody: 739.99 },
    { bass: 110.0, arp: [220.0, 277.18, 329.63, 440.0], melody: 659.25 },
    { bass: 123.47, arp: [246.94, 293.66, 369.99, 493.88], melody: 587.33 },
    { bass: 92.5, arp: [185.0, 220.0, 277.18, 369.99], melody: 554.37 },
    { bass: 98.0, arp: [196.0, 246.94, 293.66, 392.0], melody: 493.88 },
    { bass: 146.83, arp: [220.0, 293.66, 369.99, 440.0], melody: 440.0 },
    { bass: 98.0, arp: [196.0, 246.94, 293.66, 392.0], melody: 493.88 },
    { bass: 110.0, arp: [220.0, 277.18, 329.63, 440.0], melody: 554.37 },
  ];

  let barIdx = 0;
  let active = true;
  let timer: number | null = null;

  const scheduleBar = () => {
    if (!active) return;
    const bar = bars[barIdx % bars.length];
    barIdx += 1;
    playPianoVoice(bar.bass, 0.24, 2.35, 0);
    bar.arp.forEach((freq, i) => {
      playPianoVoice(freq, 0.14, 1.45, i * 0.45);
    });
    playPianoVoice(bar.melody, 0.18, 2.1, 0.05);
  };

  scheduleBar();
  timer = window.setInterval(scheduleBar, 2400);

  return {
    stop: () => {
      active = false;
      if (timer !== null) clearInterval(timer);
      try {
        masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
      } catch {
        // ignore
      }
      setTimeout(() => {
        ctx.close().catch(() => {});
      }, 180);
    },
  };
}

export function useWeddingMusic(audioSrc?: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthRef = useRef<{ stop: () => void } | null>(null);

  useEffect(() => {
    if (audioSrc && audioSrc.trim().length > 0) {
      const audio = new Audio(audioSrc);
      audio.loop = true;
      audio.volume = 0.65;
      audio.preload = "auto";
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      synthRef.current?.stop();
      synthRef.current = null;
    };
  }, [audioSrc]);

  const startMusic = useCallback(() => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      setIsPlaying(true);
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          try {
            if (!synthRef.current) {
              synthRef.current = createRomanticPianoPlayer();
            }
            setIsPlaying(true);
          } catch {
            setIsPlaying(false);
          }
        });
      }
      return;
    }

    try {
      if (!synthRef.current) {
        synthRef.current = createRomanticPianoPlayer();
      }
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const stopMusic = useCallback(() => {
    audioRef.current?.pause();
    synthRef.current?.stop();
    synthRef.current = null;
    setIsPlaying(false);
  }, []);

  const toggleMusic = useCallback(() => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  }, [isPlaying, startMusic, stopMusic]);

  return { isPlaying, startMusic, stopMusic, toggleMusic };
}
