import { useRecoilState, useRecoilValue } from "recoil";
import { textState, textLenState, uppercaseState } from "../store";

const Input = () => {
  const [text, setText] = useRecoilState(textState);
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

const CharCount = () => {
  const len = useRecoilValue(textLenState);
  return <div>Length: {len}</div>;
};

const Uppercase = () => {
  const uppercase = useRecoilValue(uppercaseState);
  return <div>Uppercase: {uppercase}</div>;
};

export default function Home() {
  return (
    <div>
      <Input />
      <CharCount />
      <Uppercase />
    </div>
  );
}
