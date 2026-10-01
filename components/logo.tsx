import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="explore.yoga"
      width={807}
      height={124}
      priority
      className="h-7 w-auto sm:h-8"
    />
  );
}
