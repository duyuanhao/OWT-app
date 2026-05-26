import { AlertTriangle } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DataTable } from "../components/DataTable";
import { SectionCard } from "../components/SectionCard";
import { StatusBadge } from "../components/StatusBadge";
import { equipments, realtimeTrends } from "../data/mockData";
import type { Equipment } from "../types/platform";

export function ConditionMonitoring() {
  const target = equipments[0];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-[1fr_380px] gap-6">
        <SectionCard title="设备列表与运行状态" subtitle="按设备风险等级进行实时分层管理">
          <DataTable<Equipment>
            rows={equipments}
            columns={[
              { header: "设备编号", accessor: "id" },
              { header: "设备名称", accessor: "name" },
              { header: "设备类型", accessor: "type" },
              { header: "状态", accessor: (row) => <StatusBadge value={row.status} /> },
              { header: "健康指数", accessor: (row) => `${row.healthIndex}` },
              { header: "当前工况", accessor: "condition" }
            ]}
          />
        </SectionCard>
        <SectionCard title="设备状态卡片" subtitle={target.id}>
          <div className="space-y-4">
            {[
              ["设备类型", target.type],
              ["运行时长", `${target.runtimeHours} 小时`],
              ["当前工况", target.condition],
              ["健康指数", `${target.healthIndex} 分`],
              ["风险等级", target.riskLevel]
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-line pb-3">
                <span className="text-sm text-slate-400">{label}</span>
                <span className="text-sm font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="实时监测曲线" subtitle="振动加速度、温度、电流、转速与负载同步监测">
        <div className="h-80">
          <ResponsiveContainer>
            <LineChart data={realtimeTrends}>
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)" }} />
              <Line dataKey="vibration" name="振动加速度" stroke="#67e8f9" strokeWidth={2} dot={false} />
              <Line dataKey="temperature" name="温度" stroke="#f97316" strokeWidth={2} dot={false} />
              <Line dataKey="current" name="电流" stroke="#60a5fa" strokeWidth={2} dot={false} />
              <Line dataKey="speed" name="转速" stroke="#a78bfa" strokeWidth={2} dot={false} />
              <Line dataKey="load" name="负载" stroke="#22c55e" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      <div className="grid grid-cols-3 gap-4">
        {["振动加速度超过 4.5 g，触发轴承冲击特征复核", "温度达到 81 摄氏度，超过润滑状态阈值", "负载持续高于 90%，建议降低工况波动"].map((message) => (
          <div key={message} className="flex items-start gap-3 rounded-lg border border-amber-400/30 bg-amber-400/10 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-300" />
            <div>
              <div className="text-sm font-semibold text-amber-200">异常波动提示</div>
              <p className="mt-1 text-sm text-slate-300">{message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
