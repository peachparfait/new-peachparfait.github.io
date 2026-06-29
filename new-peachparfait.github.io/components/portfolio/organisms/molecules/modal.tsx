type Props = {
  work: {
    title: string;
    description: string;
  };
  onClose: () => void;
};

export function Modal({ work, onClose }: Props) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          ×
        </button>

        <h2>{work.title}</h2>
        <p>{work.description}</p>
      </div>
    </div>
  );
}