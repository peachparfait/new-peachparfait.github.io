type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function AssetImage({ src, alt, className }: AssetImageProps) {
  return <img className={className} src={src} alt={alt} />;
}