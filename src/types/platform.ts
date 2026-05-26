import type { LucideIcon } from "lucide-react";

export type ModuleKey =
  | "overview"
  | "dataAccess"
  | "conditionMonitoring"
  | "healthAssessment"
  | "faultDiagnosis"
  | "rulPrediction"
  | "maintenanceDecision"
  | "modelService"
  | "knowledgeBase"
  | "platformValidation";

export type RiskStatus = "正常" | "关注" | "预警" | "危险";
export type ServiceStatus = "运行中" | "待机" | "维护中" | "异常";

export interface NavItem {
  key: ModuleKey;
  label: string;
  icon: LucideIcon;
}

export interface Metric {
  label: string;
  value: string;
  unit?: string;
  trend: string;
  status: "good" | "warning" | "danger" | "info";
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  area: string;
  status: RiskStatus;
  runtimeHours: number;
  condition: string;
  healthIndex: number;
  riskLevel: RiskStatus;
  load: number;
}

export interface SensorSource {
  name: string;
  status: "已接入" | "同步中" | "离线";
  frequency: string;
  quality: number;
  updatedAt: string;
  equipmentId: string;
}

export interface TrendPoint {
  time: string;
  vibration: number;
  temperature: number;
  current: number;
  speed?: number;
  load?: number;
  health: number;
}

export interface AlarmRecord {
  equipmentId: string;
  time: string;
  type: string;
  risk: RiskStatus;
  confidence: number;
  status: "待确认" | "处理中" | "已闭环";
}

export interface FeatureContribution {
  feature: string;
  value: number;
}

export interface RulPoint {
  time: string;
  health: number;
  upper: number;
  lower: number;
  rul: number;
}

export interface MaintenanceStrategy {
  name: string;
  cost: number;
  risk: number;
  downtime: number;
  spareAvailability: number;
  productionImpact: number;
  recommendation: number;
}

export interface ModelService {
  name: string;
  status: ServiceStatus;
  input: string;
  output: string;
  version: string;
  calls: number;
  metric: string;
  updatedAt: string;
}

export interface KnowledgeRule {
  title: string;
  condition: string;
  conclusion: string;
  action: string;
}
