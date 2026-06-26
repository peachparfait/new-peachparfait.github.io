import VideoHoverCard from "../molecules/atoms/videoHoverCard";
export default function WorksObjects() {
  return (
  <div className="worksObjects">
    <h1>映像</h1>
    <div className="cardlist">
      <VideoHoverCard
        thumbnailSrc="/assets/img/goodbye.jpg"
        videoSrc="/assets/img/goodbye.mp4"
        title="作品1"
      />
      <VideoHoverCard
        thumbnailSrc="/assets/img/goodbye.jpg"
        videoSrc="/assets/img/goodbye.mp4"
        title="作品2"
      />
      <VideoHoverCard
        thumbnailSrc="/assets/img/goodbye.jpg"
        videoSrc="/assets/img/goodbye.mp4"
        title="作品3"
      />
    </div>
    <h1>プロジェクト等</h1>
  </div>
  );
}