"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactLenis } from "lenis/react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <ReactLenis root>
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ReactLenis>
  );
}
