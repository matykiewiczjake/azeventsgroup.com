import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <Image
        src="/images/logo.webp"
        alt="Arizona Events Group — Enjoy Life"
        width={131}
        height={131}
        className="h-12 w-auto sm:h-14"
        priority={priority}
      />
    </Link>
  );
}
