const HelloHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>intro to html</title>
</head>
<body>hello html</body>
</html>
`;

const HelloHTMLStatic = {
  "/index.html": {
    code: HelloHTML,
    active: true,
  },
  "/styles.css": {
    code: "",
    active: false,
    hidden: true,
  },
};

export default HelloHTMLStatic;
