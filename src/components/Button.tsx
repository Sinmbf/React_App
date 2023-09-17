interface Props {
  handleClick: () => void;
}

export default function Button({ handleClick }: Props) {
  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}
