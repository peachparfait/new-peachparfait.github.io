import AssetImage from "../assetImage";
type SNSLinkProps = {
  classname: string;
  src: string;
};

export default function SNSLink({ classname, src }: SNSLinkProps) {
  return (
  <div className={classname}>
    <AssetImage src={src} alt="name" className="assetImage" />
  </div>
  );
}