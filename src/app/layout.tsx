import React from "react";
import "@/../style/global.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Carta-Cumple</title>
      </head>
      <body>
        {children}
        </body>
    </html>
  );
}
