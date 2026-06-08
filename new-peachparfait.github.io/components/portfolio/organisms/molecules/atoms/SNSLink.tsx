type SNSLinkProps = {
  classname: string;
  link: string;
};

export default function SNSLink({ classname, link }: SNSLinkProps) {
  return <div className={classname}>{link}</div>;
}