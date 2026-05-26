import type {
  AlarmRecord,
  Equipment,
  FeatureContribution,
  KnowledgeRule,
  MaintenanceStrategy,
  Metric,
  ModelService,
  RulPoint,
  SensorSource,
  TrendPoint
} from "../types/platform";

export const overviewMetrics: Metric[] = [
  { label: "接入装备数量", value: "126", unit: "台", trend: "较上周 +8", status: "info" },
  { label: "在线传感器数量", value: "1,284", unit: "个", trend: "在线率 98.6%", status: "good" },
  { label: "当前异常设备数量", value: "9", unit: "台", trend: "高风险 3 台", status: "warning" },
  { label: "平均健康指数", value: "86.7", unit: "分", trend: "较昨日 -1.8", status: "good" },
  { label: "今日故障预警数量", value: "14", unit: "条", trend: "待确认 5 条", status: "warning" },
  { label: "待执行维护任务数量", value: "6", unit: "项", trend: "计划窗口 2 个", status: "info" }
];

export const equipments: Equipment[] = [
  { id: "EQ-TB-071", name: "燃气轮机主轴承系统", type: "旋转装备", area: "试验台 A 区", status: "预警", runtimeHours: 8420, condition: "高负载稳态", healthIndex: 72, riskLevel: "预警", load: 86 },
  { id: "EQ-CNC-018", name: "五轴加工中心主轴", type: "数控装备", area: "精密制造线", status: "正常", runtimeHours: 3920, condition: "变转速加工", healthIndex: 91, riskLevel: "正常", load: 64 },
  { id: "EQ-GB-203", name: "重载齿轮箱", type: "传动装备", area: "动力传动实验室", status: "关注", runtimeHours: 11980, condition: "冲击载荷", healthIndex: 80, riskLevel: "关注", load: 78 },
  { id: "EQ-PMP-044", name: "高压液压泵组", type: "液压装备", area: "液压站 2 号", status: "危险", runtimeHours: 15420, condition: "频繁启停", healthIndex: 58, riskLevel: "危险", load: 91 },
  { id: "EQ-WT-116", name: "风电变桨轴承", type: "新能源装备", area: "风电仿真平台", status: "正常", runtimeHours: 7210, condition: "低速重载", healthIndex: 88, riskLevel: "正常", load: 57 }
];

export const healthDistribution = [
  { name: "健康", value: 62, color: "#22c55e" },
  { name: "轻微退化", value: 24, color: "#38bdf8" },
  { name: "中度退化", value: 10, color: "#f59e0b" },
  { name: "高风险", value: 4, color: "#ef4444" }
];

export const realtimeTrends: TrendPoint[] = [
  { time: "08:00", vibration: 2.1, temperature: 63, current: 118, speed: 2960, load: 62, health: 89 },
  { time: "09:00", vibration: 2.4, temperature: 65, current: 122, speed: 2980, load: 66, health: 88 },
  { time: "10:00", vibration: 2.7, temperature: 66, current: 127, speed: 3010, load: 71, health: 86 },
  { time: "11:00", vibration: 3.1, temperature: 69, current: 133, speed: 3045, load: 75, health: 84 },
  { time: "12:00", vibration: 3.4, temperature: 71, current: 138, speed: 3060, load: 80, health: 82 },
  { time: "13:00", vibration: 3.9, temperature: 75, current: 145, speed: 3072, load: 85, health: 78 },
  { time: "14:00", vibration: 4.3, temperature: 78, current: 151, speed: 3090, load: 88, health: 74 },
  { time: "15:00", vibration: 4.8, temperature: 81, current: 158, speed: 3112, load: 91, health: 71 }
];

export const dataSources: SensorSource[] = [
  { name: "振动传感器", status: "已接入", frequency: "25.6 kHz", quality: 96, updatedAt: "2026-05-26 15:00:12", equipmentId: "EQ-TB-071" },
  { name: "温度传感器", status: "已接入", frequency: "1 Hz", quality: 98, updatedAt: "2026-05-26 15:00:13", equipmentId: "EQ-TB-071" },
  { name: "电流传感器", status: "已接入", frequency: "5 kHz", quality: 94, updatedAt: "2026-05-26 15:00:11", equipmentId: "EQ-CNC-018" },
  { name: "压力传感器", status: "同步中", frequency: "100 Hz", quality: 89, updatedAt: "2026-05-26 14:59:58", equipmentId: "EQ-PMP-044" },
  { name: "转速传感器", status: "已接入", frequency: "200 Hz", quality: 97, updatedAt: "2026-05-26 15:00:10", equipmentId: "EQ-GB-203" },
  { name: "声发射传感器", status: "已接入", frequency: "128 kHz", quality: 91, updatedAt: "2026-05-26 15:00:08", equipmentId: "EQ-WT-116" },
  { name: "维修记录", status: "已接入", frequency: "事件触发", quality: 93, updatedAt: "2026-05-26 13:42:00", equipmentId: "全站设备" },
  { name: "故障日志", status: "已接入", frequency: "事件触发", quality: 95, updatedAt: "2026-05-26 14:20:00", equipmentId: "全站设备" },
  { name: "工况参数", status: "已接入", frequency: "10 Hz", quality: 92, updatedAt: "2026-05-26 15:00:09", equipmentId: "EQ-TB-071" }
];

export const dataQuality = [
  { name: "完整性", value: 96 },
  { name: "一致性", value: 93 },
  { name: "实时性", value: 98 },
  { name: "异常率控制", value: 91 }
];

export const featureContributions: FeatureContribution[] = [
  { feature: "振动 RMS", value: 32 },
  { feature: "峭度", value: 21 },
  { feature: "温升", value: 17 },
  { feature: "电流波动", value: 13 },
  { feature: "频域能量", value: 11 },
  { feature: "工况载荷", value: 6 }
];

export const alarms: AlarmRecord[] = [
  { equipmentId: "EQ-PMP-044", time: "2026-05-26 14:55", type: "轴承润滑不足", risk: "危险", confidence: 0.93, status: "处理中" },
  { equipmentId: "EQ-TB-071", time: "2026-05-26 14:36", type: "轴承外圈故障", risk: "预警", confidence: 0.88, status: "待确认" },
  { equipmentId: "EQ-GB-203", time: "2026-05-26 13:48", type: "齿轮磨损", risk: "关注", confidence: 0.81, status: "已闭环" },
  { equipmentId: "EQ-CNC-018", time: "2026-05-26 11:20", type: "不对中趋势", risk: "关注", confidence: 0.76, status: "待确认" }
];

export const faultProbabilities = [
  { name: "轴承外圈故障", value: 35 },
  { name: "轴承内圈故障", value: 18 },
  { name: "齿轮磨损", value: 16 },
  { name: "不平衡", value: 12 },
  { name: "不对中", value: 9 },
  { name: "润滑不足", value: 10 }
];

export const rulSeries: RulPoint[] = [
  { time: "05-26", health: 72, upper: 77, lower: 68, rul: 186 },
  { time: "05-27", health: 69, upper: 74, lower: 64, rul: 162 },
  { time: "05-28", health: 66, upper: 71, lower: 60, rul: 138 },
  { time: "05-29", health: 62, upper: 68, lower: 55, rul: 112 },
  { time: "05-30", health: 58, upper: 64, lower: 50, rul: 86 },
  { time: "05-31", health: 53, upper: 60, lower: 45, rul: 58 },
  { time: "06-01", health: 48, upper: 55, lower: 39, rul: 30 }
];

export const modelComparison = [
  { model: "LSTM", mae: 12.8, rmse: 17.4, confidence: 91 },
  { model: "Transformer", mae: 10.6, rmse: 15.2, confidence: 94 },
  { model: "XGBoost", mae: 16.3, rmse: 21.7, confidence: 86 },
  { model: "退化模型", mae: 18.9, rmse: 24.1, confidence: 82 }
];

export const maintenanceStrategies: MaintenanceStrategy[] = [
  { name: "立即维修", cost: 48, risk: 8, downtime: 9, spareAvailability: 86, productionImpact: 42, recommendation: 82 },
  { name: "计划性维护", cost: 31, risk: 18, downtime: 5, spareAvailability: 94, productionImpact: 24, recommendation: 96 },
  { name: "延迟维护", cost: 20, risk: 46, downtime: 3, spareAvailability: 78, productionImpact: 18, recommendation: 61 },
  { name: "继续运行并加强监测", cost: 12, risk: 68, downtime: 0, spareAvailability: 70, productionImpact: 8, recommendation: 44 }
];

export const modelServices: ModelService[] = [
  { name: "状态表征模型", status: "运行中", input: "多通道时序信号", output: "状态向量", version: "v2.3.1", calls: 184520, metric: "特征稳定性 97.2%", updatedAt: "2026-05-20" },
  { name: "异常检测模型", status: "运行中", input: "状态特征/工况参数", output: "异常分数", version: "v1.9.4", calls: 225140, metric: "AUC 0.961", updatedAt: "2026-05-22" },
  { name: "故障诊断模型", status: "运行中", input: "频域特征/知识规则", output: "故障类别", version: "v3.1.0", calls: 67320, metric: "准确率 94.8%", updatedAt: "2026-05-18" },
  { name: "RUL 预测模型", status: "运行中", input: "退化序列", output: "剩余寿命", version: "v2.6.2", calls: 38160, metric: "MAE 10.6h", updatedAt: "2026-05-21" },
  { name: "多目标维护优化模型", status: "待机", input: "风险/成本/产线计划", output: "维护策略", version: "v1.4.8", calls: 9260, metric: "策略采纳率 88%", updatedAt: "2026-05-16" }
];

export const faultKnowledge = [
  { type: "轴承外圈故障", feature: "BPFO 频带能量升高，包络谱冲击明显", reason: "局部剥落、冲击载荷", action: "降低负载并安排轴承更换" },
  { type: "轴承润滑不足", feature: "温升持续增加，RMS 与峭度同步升高", reason: "油膜失效、润滑脂老化", action: "补充润滑并检查密封状态" },
  { type: "齿轮磨损", feature: "啮合频率边带增强，振动周期性波动", reason: "齿面疲劳、装配偏差", action: "开展齿面检查与啮合间隙校准" },
  { type: "不对中", feature: "二倍频振动突出，轴向振动增强", reason: "联轴器偏差、基础松动", action: "执行对中校准与基础紧固" }
];

export const repairCases = [
  { equipmentId: "EQ-PMP-044", phenomenon: "泵端温升快且振动峰值突增", diagnosis: "轴承润滑不足", measure: "更换润滑脂并清洗油路", effect: "健康指数由 58 提升至 83" },
  { equipmentId: "EQ-GB-203", phenomenon: "齿轮箱啮合频带能量升高", diagnosis: "二级齿轮磨损", measure: "调整齿隙并更换磨损齿轮", effect: "异常分数下降 64%" },
  { equipmentId: "EQ-CNC-018", phenomenon: "主轴加工表面纹理异常", diagnosis: "轻微不对中", measure: "主轴动平衡与对中校准", effect: "加工振纹显著降低" }
];

export const knowledgeRules: KnowledgeRule[] = [
  {
    title: "润滑不足规则",
    condition: "当振动 RMS 连续升高且温度超过 78 摄氏度",
    conclusion: "轴承润滑不足风险增加",
    action: "触发润滑检查工单并提升监测频率"
  },
  {
    title: "外圈故障规则",
    condition: "当 BPFO 频带能量超过基线 2.5 倍且峭度大于 4.5",
    conclusion: "存在轴承外圈局部损伤可能",
    action: "调用相似案例并建议停机窗口检查"
  },
  {
    title: "加速退化规则",
    condition: "当健康指数 24 小时下降超过 8 分",
    conclusion: "设备进入加速退化期",
    action: "启动 RUL 预测与维护策略优化"
  }
];

export const validationMetrics = [
  { name: "平均响应延迟", value: "210 ms", detail: "状态监测链路 P95 延迟 380 ms" },
  { name: "数据刷新频率", value: "1 s", detail: "关键状态量秒级刷新" },
  { name: "诊断准确率", value: "94.8%", detail: "典型旋转故障样本验证" },
  { name: "召回率", value: "92.6%", detail: "高风险故障优先识别" },
  { name: "RUL MAE", value: "10.6 h", detail: "Transformer 模型验证结果" },
  { name: "维护成本降低率", value: "18.7%", detail: "相比周期性维护策略" }
];

export const beforeAfter = [
  { item: "故障响应时间", before: 100, after: 42 },
  { item: "非计划停机", before: 100, after: 61 },
  { item: "维护成本", before: 100, after: 81 },
  { item: "预测准确率", before: 78, after: 94 }
];
