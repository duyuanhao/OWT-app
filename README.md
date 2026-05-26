# 高端装备一体化状态监测与运维决策平台

面向论文展示和工程原型验证的工业智能运维平台前端，使用 React、TypeScript、Tailwind CSS、Recharts 和 lucide-react 构建。

## 运行方式

```bash
npm install
npm run dev
```

浏览器访问终端输出的本地地址，通常为：

```bash
http://localhost:5173
```

## 构建

```bash
npm run build
```

## GitHub Pages 在线部署

1. 在 GitHub 新建仓库，并将本项目所有文件上传到 `main` 分支。
2. 打开仓库 `Settings` -> `Pages`。
3. 在 `Build and deployment` 中选择 `Source: GitHub Actions`。
4. 推送或上传完成后，进入 `Actions` 查看 `Deploy to GitHub Pages` 工作流。
5. 工作流成功后，页面会发布到 GitHub Pages 提供的在线地址。

## 目录说明

- `src/data/mockData.ts`：平台模拟数据，包括设备、传感器、告警、模型、RUL、维护策略和验证指标。
- `src/types/platform.ts`：工程数据类型定义。
- `src/components`：布局、导航、指标卡、表格、状态标签、流程图、仪表盘等通用组件。
- `src/pages`：平台总览、数据接入、状态监测、健康评估、故障诊断、寿命预测、维护决策、模型服务、知识库、平台验证。
deploy test
