const IndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/styles.css" />
  <title>Hello World Html and CSS</title>
</head>
<body>
    Hello World
</body>
</html>
`;

const StylesCss = `/* Custom styles over here */
body {
  color: blueviolet;
  background-color: yellow;
}
`;

const HelloWorldHtmlCss = {
  "/index.html": {
    code: IndexHtml,
    active: true,
  },
  "/styles.css": {
    code: StylesCss,
    active: true,
  },
};

export default HelloWorldHtmlCss;
