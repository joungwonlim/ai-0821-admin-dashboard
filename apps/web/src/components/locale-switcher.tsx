"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={isPending}>
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onSelectChange("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelectChange("ko")}>
          한국어
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
