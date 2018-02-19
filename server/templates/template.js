export default ({ body, title }) => {
  return `
      <!doctype html>
      <html lang="en">
          <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <title>${title}</title>
              <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
              <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
              <link rel="stylesheet" href="./styles.css">
          </head>
          <body>
              <div id="root">${body}</div>
              <script src="bundle.js"></script>
          </body>
      </html>
  `;
};
