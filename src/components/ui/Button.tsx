import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  targetBlank?: boolean;
};

export default function Button({ href, children, variant = "primary", targetBlank }: Props) {
  const cls =
    variant === "primary"
      ? "rounded-xl bg-black text-white px-5 py-3 font-semibold shadow-sm hover:opacity-90"
      : "rounded-xl border px-5 py-3 font-semibold hover:bg-black/5";

  if (href.startsWith("http")) {
    return (
      <a href={href} target={targetBlank ? "_blank" : undefined} rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
