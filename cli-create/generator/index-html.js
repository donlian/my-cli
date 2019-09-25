module.exports = function(name) {
  const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>${name}</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
  `;
  return { template, dir: "", name: "index.html" };
};
