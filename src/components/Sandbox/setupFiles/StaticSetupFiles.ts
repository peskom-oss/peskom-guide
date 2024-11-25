const IndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/styles.css" />
  <title>Static app</title>
</head>
<body></body>
</html>
`;

const StylesCss = `/* Custom styles over here */
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
`;

const staticSetupFiles = {
  "/index.html": {
    code: IndexHtml,
    hidden: false,
    active: false,
  },
  "/styles.css": {
    code: StylesCss,
    hidden: false,
    active: true,
  },
};

export default staticSetupFiles;
