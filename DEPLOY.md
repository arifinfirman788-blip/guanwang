# 贵旅数网门户网站部署指南

本压缩包包含了贵旅数网门户网站的生产环境构建产物，可直接部署在任何标准 Web 服务器上。

## 目录结构

```
menhu-deploy/
├── dist/                # 网站静态文件（HTML, CSS, JS, Images）
├── server.js            # 简单的 Node.js 预览服务器脚本
└── DEPLOY.md            # 本部署文档
```

## 部署方式

### 方式一：使用 Nginx 部署（推荐）

1. 将 `dist` 目录下的所有文件上传至 Nginx 服务器的网站根目录（例如 `/usr/share/nginx/html`）。
2. 配置 Nginx（`nginx.conf` 示例）：

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /usr/share/nginx/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```
3. 重启 Nginx。

### 方式二：使用 Node.js 本地预览/部署

如果您已安装 Node.js 环境，可以直接运行内置的服务器脚本：

1. 确保已安装 Node.js。
2. 在当前目录下运行：
   ```bash
   node server.js
   ```
3. 访问 `http://localhost:3000` 即可查看网站。

### 方式三：静态托管服务

您可以直接将 `dist` 目录部署到任何静态托管服务，如：
- Vercel
- Netlify
- GitHub Pages
- 阿里云 OSS / 腾讯云 COS 静态网站托管

## 注意事项

- 这是一个单页应用 (SPA)，请确保您的 Web 服务器配置了 URL 重写规则，将所有 404 请求重定向到 `index.html`（如 Nginx 配置中的 `try_files $uri $uri/ /index.html;`）。
- 图片资源位于 `assets` 或根目录下，请确保文件路径权限正确。

## 技术支持

如有部署问题，请联系贵旅数网技术团队。
