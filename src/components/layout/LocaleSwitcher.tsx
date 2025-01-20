"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation"


const languages = [
  {
    name: "es",
  },
  {
    name: "en",
  }
];

const LocaleSwitcher = ({ className }: { className?: string }) => {
  type Language = {
    name: string;
    language?: string;
  };

  const router = useRouter();
  const pathname = usePathname();
  const found = pathname ? languages.find((lang) => pathname.includes(lang.name)) : null;
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    found ?? languages[0]
  );

  const handleSelected = (lang: string) => {
    setSelectedLanguage({
      ...selectedLanguage,
      name: lang,
      language: lang === "es" ? "es" : "en",
    });

    if (pathname) {
      router.replace(`/${lang}`);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button type="button" className="px-0 rounded-xl bg-transparent hover:bg-transparent select-none p-2">
          <span className="text-xs lg:text-sm text-white font-normal">
            {selectedLanguage ? selectedLanguage.name : "En"}
          </span>
          <ChevronDown className="ml-1 h-4 w-4 shrink-0 transition transform duration-200 text-arrow" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 rounded-lg min-w-fit mr-3">
        {languages.map((item, index) => (
          <DropdownMenuItem
            key={`flag-${index}`}
            className={cn(
              "py-0 px-0 cursor-pointer dark:hover:bg-background mb-[2px] last:mb-0",
              {
                "bg-primary-100 ":
                  selectedLanguage && selectedLanguage.name === item.name,
              }
            )}
            onClick={() => handleSelected(item.name)}
          >
            <span className="text-sm text-white">
              {item.name}
            </span>
            {selectedLanguage && selectedLanguage.name === item.name && (
              // <Check className="flex-none ml-0 text-default-700" size={50}/>
              <Check className="text-default-700" style={{ width: '12px', height: '12px' }} />

            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
