const proxy = process.env.PROXY || 'http://alliance-primo-sb.hosted.exlibrisgroup.com'
const vid = process.env.VID || 'ALLIANCE'
const wpconf  = require('./webpack.config.js')
const fname = Object.keys(wpconf.entry)[0]

// 'http://alliance-primo-sb.hosted.exlibrisgroup.com'

module.exports = {
  name: 'primo-proxy',
  proxy: proxy,
  serveStatic: [{
    route: `/primo-explore/custom/${vid}`,
    dir: 'tmp'
  }],
  files: `dist/${fname}.js`,
  startPath: `/primo-explore/search?vid=${vid}`
}
