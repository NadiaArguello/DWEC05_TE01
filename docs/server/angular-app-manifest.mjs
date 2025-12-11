
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/DWEC05_TE01/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/DWEC05_TE01"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 590, hash: '707781f122bf4865ed270cd5e55f0e081076e0a73b1fa94de1d14fb9b58de6db', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: 'c76a6d49f0687e00a1387ee6c7aee39aea496a584afd1d288efbab709e77cb22', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8989, hash: '5de6af9a5c4f0d732bf6bcd3273120788a6eab2e7bb8db3769c4bac2c72a2e10', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2ATS7KEB.css': {size: 25, hash: 's97pOsClilc', text: () => import('./assets-chunks/styles-2ATS7KEB_css.mjs').then(m => m.default)}
  },
};
