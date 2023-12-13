import { Button } from "@radix-ui/themes";
import * as stylex from "@stylexjs/stylex";

const s = stylex.create({
  title: {
    color: "red",
  },
  redbox: {
    width: 100,
    height: 100,
  },
});

export default function Home() {
  return (
    <main>
      <h1 {...stylex.props(s.title)}>StyleX and Radix UI</h1>
      <Button {...stylex.props(s.redbox)}>Button Radix Ui</Button>
      <button {...stylex.props(s.redbox)}>button</button>
    </main>
  );
}
