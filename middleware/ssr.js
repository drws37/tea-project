const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponent(component, props = {}, { doctype } = { doctype: false }) {
  const reactElement = React.createElement(component, {
    // eslint-disable-next-line max-len
    ...props, // ещё в компонент передаем в качестве пропсов все, что лежит в res.locals (например, res.locals.user)
    ...this.locals, // также передаем все, что лежит в app.locals
    ...this.app.locals,
  });

  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  return doctype ? `<!DOCTYPE html>${html}` : html;
}

function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = ssr;
