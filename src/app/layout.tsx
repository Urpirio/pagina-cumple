import React from 'react';

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        {children}
    </body>
    </html>
  )
}
