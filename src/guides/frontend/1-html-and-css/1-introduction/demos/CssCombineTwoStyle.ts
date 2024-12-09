const IndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>intro to html and css</title>
  <style>
    body {
      color: red;
    }
  </style>
</head>
<body>
  hello <span style="color: blue">css</span>
</body>
</html>
`;

const CssCombineTwoStyle = {
  "/index.html": {
    code: IndexHtml,
    active: true,
  },
  "/styles.css": {
    code: "",
    active: false,
    hidden: true,
  },
};

export default CssCombineTwoStyle;
