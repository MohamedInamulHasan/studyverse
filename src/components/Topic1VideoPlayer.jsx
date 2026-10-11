// src/components/Topic1VideoPlayer.jsx
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

export const TOPIC1_VIDEO_LINK = "https://drive.google.com/file/d/1bB9UZbfT9BMB-kal9AFui8-BV_5JbfDg/preview";
export const TOPIC2_VIDEO_LINK = "https://drive.google.com/file/d/1B0z_vvSZtsWf3NI8G01pX7eUzNTIyQFb/preview";

export const TopicVideoPlayer = ({ 
  src = TOPIC1_VIDEO_LINK,
  title = "பாடல் வீடியோ" 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const isDirectVideo = typeof src === 'string' && (src.endsWith('.mp4') || src.endsWith('.webm'));

  return (
    <div className="w-full flex justify-center select-none pt-1">
      {/* 1:1 Square Aspect Ratio */}
      <div className="relative w-full max-w-md aspect-square rounded-3xl bg-slate-950 overflow-hidden shadow-md flex items-center justify-center">
        {/* Animated Loading Indicator while Google Drive or Video connects */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-10 px-4 text-center select-none transition-opacity duration-300">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-inner mb-3">
              <Loader2 className="w-7 h-7 text-indigo-400 animate-spin" />
            </div>
            <span className="text-sm font-bold text-slate-200">
              வீடியோ தயாராகிறது...
            </span>
            <span className="text-[11px] font-medium text-slate-400 mt-1">
              Google Drive-லிருந்து இணைக்கப்படுகிறது
            </span>
          </div>
        )}

        {isDirectVideo ? (
          <video
            src={src}
            className="w-full h-full object-contain"
            controls
            playsInline
            onLoadedData={() => setIsLoading(false)}
          />
        ) : (
          <iframe
            src={src}
            className={`w-full h-full border-0 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title={title}
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>
    </div>
  );
};

export const Topic1VideoPlayer = () => (
  <TopicVideoPlayer src={TOPIC1_VIDEO_LINK} title="காட்டுக்குள்ளே கொண்டாட்டம் பாடல் வீடியோ" />
);

export const Topic2VideoPlayer = () => (
  <TopicVideoPlayer src={TOPIC2_VIDEO_LINK} title="ஆலமரத்துல விளையாட்டு பாடல் வீடியோ" />
);

export default Topic1VideoPlayer;
