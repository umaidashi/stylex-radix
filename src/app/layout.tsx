import * as stylex from "@stylexjs/stylex";
import "./globals.css"; // dont delete!!!
import type { Metadata } from "next";
import { dracula } from "../tokens/theme";
import { colors } from "../tokens/color.stylex";
import { spacing } from "../tokens/spacing.stylex";

export const metadata: Metadata = {
  title: "stylex radix",
  description: "Generated by create next app",
};

const styles = stylex.create({
  container: {
    color: colors.primaryText,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body {...stylex.props(dracula, styles.container)}>{children}</body>
    </html>
  );
}
