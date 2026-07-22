import { TitleH2 } from "./style.styled";

export default function Section({title, children}) {
  return (
    <section>
      <TitleH2>{title}</TitleH2>
      {children}
    </section>
  );
}
