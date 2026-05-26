import {
  ActivitySquare,
  BarChart3,
  BookOpenText,
  BrainCircuit,
  DatabaseZap,
  GaugeCircle,
  GitBranch,
  LayoutDashboard,
  ShieldAlert,
  Wrench
} from "lucide-react";
import type { ModuleKey, NavItem } from "../types/platform";

const navItems: NavItem[] = [
  { key: "overview", label: "平台总览", icon: LayoutDashboard },
  { key: "dataAccess", label: "数据接入", icon: DatabaseZap },
  { key: "conditionMonitoring", label: "状态监测", icon: ActivitySquare },
  { key: "healthAssessment", label: "健康评估", icon: GaugeCircle },
  { key: "faultDiagnosis", label: "故障诊断", icon: ShieldAlert },
  { key: "rulPrediction", label: "寿命预测", icon: BarChart3 },
  { key: "maintenanceDecision", label: "维护决策", icon: Wrench },
  { key: "modelService", label: "模型服务", icon: BrainCircuit },
  { key: "knowledgeBase", label: "知识库", icon: BookOpenText },
  { key: "platformValidation", label: "平台验证", icon: GitBranch }
];

export function Sidebar({ active, onChange }: { active: ModuleKey; onChange: (key: ModuleKey) => void }) {
  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col border-r border-line bg-[#061326]/95">
      <div className="border-b border-line p-5">
        <div className="text-xs font-semibold text-cyanSoft">INDUSTRIAL PHM PLATFORM</div>
        <div className="mt-2 text-xl font-semibold leading-tight text-white">智能运维决策原型系统</div>
        <div className="mt-3 rounded-md border border-line bg-sky-400/10 px-3 py-2 text-xs text-slate-300">
          面向高端装备预测性维护场景
        </div>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onChange(item.key)}
              className={`flex w-full items-center gap-3 rounded-md px-4 py-3 text-left text-sm transition ${
                isActive
                  ? "border border-cyan-300/30 bg-cyan-300/10 text-white shadow-glow"
                  : "border border-transparent text-slate-400 hover:border-line hover:bg-sky-400/10 hover:text-slate-100"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-cyanSoft" : "text-slate-500"}`} />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="border-t border-line p-4 text-xs text-slate-500">闭环运维体系 v1.0 / Mock Data</div>
    </aside>
  );
}
