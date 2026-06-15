import AssetImage from "./assetImage";

export default function Profile() {
  return (
    <div className="profile">
      <AssetImage
        src="/assets/About%20me.svg"
        alt="About me"
        className="assetImage"
      />
    </div>
  );
}