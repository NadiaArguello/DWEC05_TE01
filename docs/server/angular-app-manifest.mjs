
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
    'index.csr.html': {size: 590, hash: 'd00995b279531d0f2f1e143559f616ebe680c2d523b228edac4ad17d09983cd9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: '34046d11640cb7fe601d6147eea6b162e046ad062143a8a6ca56d612bfb5e73f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11084, hash: 'd4a41b4f0cf1f3295cd65280ca0a8cf6468ea188060d08f4fc363285449517ce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-X4HIMVSW.css': {size: 3288, hash: 'sczt1JP1Fm8', text: () => import('./assets-chunks/styles-X4HIMVSW_css.mjs').then(m => m.default)}
  },
};
