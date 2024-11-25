const IndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/styles.css" />
  <title>Static App</title>
</head>
<body>hello world</body>
</html>
`;

const HelloWorldStatic = {
  "/index.html": {
    code: IndexHtml,
    active: true,
  },
};

export default HelloWorldStatic;
