// 极简静态服务器：每次请求读磁盘（无缓存），服务 personal-page-hub/dist
import http from 'node:http'
import { readFile } from 'node:fs/promises'
import { join, extname, normalize } from 'node:path'

const root = normalize('D:/DeepSeek-Harness/workplace/personal-page-hub/dist')
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' }

http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
    let p = normalize(join(root, urlPath === '/' ? 'index.html' : urlPath))
    if (!p.startsWith(root)) throw new Error('forbidden')
    const data = await readFile(p)
    const isHtml = extname(p) === '.html'
    res.writeHead(200, {
      'content-type': mime[extname(p)] || 'application/octet-stream',
      // HTML 不缓存（保证刷新即最新）；静态资源走缓存
      'cache-control': isHtml ? 'no-cache, must-revalidate' : 'public, max-age=3600',
    })
    res.end(data)
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.end('not found')
  }
}).listen(4173, '0.0.0.0', () => console.log('serving dist on http://0.0.0.0:4173'))
