"use client";
import { useRef, useState } from "react";

type VideoHoverCardProps = {
  thumbnailSrc: string;
  videoSrc: string;
  title?: string;
};

export default function VideoHoverCard({
  thumbnailSrc,
  videoSrc,
  title,
}: VideoHoverCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = async () => {
    setIsHovering(true);

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;

    try {
      await video.play();
    } catch {
      // autoplayが止められた場合
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      className="video-hover-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={thumbnailSrc}
        alt={title ?? "thumbnail"}
        className={`video-hover-card__thumbnail ${
          isHovering ? "is-hidden" : ""
        }`}
      />

      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="metadata"
        loop
        className={`video-hover-card__video ${isHovering ? "is-visible" : ""}`}
      />

      {title && <div className="video-hover-card__title">{title}</div>}
    </div>
  );
}