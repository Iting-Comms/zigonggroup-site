# 惠州市子贡贸易有限公司 官方网站

专业贸易及综合代理服务平台

## 项目简介

本网站是惠州市子贡贸易有限公司的官方企业展示网站，主要用于：
- 企业信息展示
- 业务范围介绍
- 代理服务说明
- 在线咨询表单

**网站特点：**
- 符合企业营业执照经营范围
- 满足广告平台（腾讯广告）合规要求
- 响应式设计，支持多设备访问
- 纯静态网站，无后端依赖

## 文件结构

```
zigong-website/
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── style.css      # 样式表
│   ├── js/
│   │   └── main.js        # JavaScript脚本
│   └── images/            # 图片资源（可选）
└── README.md              # 说明文档
```

## GitHub Pages 部署指南

### 方法一：通过GitHub网页界面部署

1. **创建GitHub仓库**
   - 登录 GitHub
   - 点击右上角 "+" → "New repository"
   - 仓库名称：`zigong-website`（或其他名称）
   - 设置为 Public
   - 点击 "Create repository"

2. **上传文件**
   - 在仓库页面点击 "uploading an existing file"
   - 将所有文件（index.html, assets文件夹等）拖拽上传
   - 填写提交信息：`Initial commit`
   - 点击 "Commit changes"

3. **启用GitHub Pages**
   - 进入仓库的 Settings
   - 左侧菜单找到 "Pages"
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 和 "/ (root)"
   - 点击 "Save"

4. **访问网站**
   - 等待1-2分钟
   - 网址格式：`https://你的用户名.github.io/仓库名/`
   - 例如：`https://username.github.io/zigong-website/`

### 方法二：通过Git命令行部署

```bash
# 1. 克隆或创建本地仓库
git init
git add .
git commit -m "Initial commit"

# 2. 关联GitHub仓库
git remote add origin https://github.com/你的用户名/仓库名.git

# 3. 推送到GitHub
git branch -M main
git push -u origin main

# 4. 在GitHub仓库设置中启用Pages（参考方法一步骤3）
```

### 使用自定义域名（可选）

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容填写你的域名，例如：`www.zigonggroup.net`
3. 在域名DNS设置中添加CNAME记录指向：`你的用户名.github.io`

## 本地测试

### 使用Python简单HTTP服务器

```bash
# Python 3
cd zigong-website
python -m http.server 8000

# 访问 http://localhost:8000
```

### 使用Node.js的http-server

```bash
# 安装http-server
npm install -g http-server

# 运行
cd zigong-website
http-server

# 访问 http://localhost:8080
```

### 使用VS Code的Live Server插件

1. 安装 Live Server 插件
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 网站内容说明

### 主要章节

1. **首页** - 企业品牌展示
2. **公司简介** - 企业基本信息和资质
3. **经营范围** - 营业执照核准的经营项目
4. **代理服务** - 六大核心代理服务业务
5. **主营产品** - 产品类别展示
6. **联系我们** - 联系方式和在线咨询表单

### 合规性说明

- 所有内容符合企业营业执照经营范围
- 明确标注"不涉及线上交易"
- 包含完整的法律法规遵守声明
- 客户责任与义务条款清晰
- 风险提示完整

## 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 响应式布局、动画效果
- **JavaScript (Vanilla)** - 原生JS，无框架依赖
- **字体** - Microsoft YaHei, PingFang SC（系统字体）

## 浏览器支持

- Chrome（推荐）
- Firefox
- Safari
- Edge
- 移动端浏览器

## 维护和更新

### 修改内容

1. 编辑 `index.html` 文件修改网页内容
2. 编辑 `assets/css/style.css` 修改样式
3. 编辑 `assets/js/main.js` 修改交互功能

### 更新到GitHub Pages

```bash
git add .
git commit -m "更新说明"
git push origin main
```

等待1-2分钟后，更改会自动部署到网站。

## 常见问题

**Q: 网站更新后看不到变化？**
A: 清除浏览器缓存或使用隐私/无痕模式访问

**Q: 表单提交后数据去哪了？**
A: 当前仅为前端演示，需要配置后端服务接收表单数据

**Q: 如何添加图片？**
A: 将图片放在 `assets/images/` 文件夹，在HTML中引用路径

**Q: 可以用于商业用途吗？**
A: 本网站专为惠州市子贡贸易有限公司设计，请勿用于其他商业用途

## 联系信息

- **公司名称：** 惠州市子贡贸易有限公司
- **邮箱：** info@zigonggroup.net
- **地址：** 广东省惠州市惠城区云山西路2号帝景国际商务中心C2座10层04号房
- **统一社会信用代码：** 91441302MA561CP096

## 版权声明

© 2021-2025 惠州市子贡贸易有限公司 版权所有

---

**更新日期：** 2025年11月16日
