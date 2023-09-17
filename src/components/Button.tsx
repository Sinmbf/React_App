interface Props {
  text: string;
  handleClick: () => void;
}

export default function Button({ text, handleClick }: Props) {
  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        {text}
      </button>
    </>
  );
}
