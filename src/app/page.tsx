import { Button } from "@radix-ui/themes";
import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

const s = stylex.create({
  title: {
    fontSize: 32,
  },
  redbox: {
    backgroundColor: { default: "black", [DARK]: "white" },
    color: { default: "white", [DARK]: "black" },
    width: 240,
    height: 100,
    margin: 4,
  },
});

export default function Home() {
  return (
    <main>
      <h1>StyleX and Radix UI</h1>
      <Button {...stylex.props(s.redbox)}>Button Radix Ui</Button>
      <button {...stylex.props(s.redbox)}>button</button>
    </main>
  );
}
