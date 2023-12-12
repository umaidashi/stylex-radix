import { Button } from "@radix-ui/themes";
import stylex from "@stylexjs/stylex";
const s = stylex.create({
  redbox: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
});

export default function Home() {
  return (
    <main>
      <Button className={stylex(s.redbox)}>Button Radix Ui</Button>
    </main>
  );
}
