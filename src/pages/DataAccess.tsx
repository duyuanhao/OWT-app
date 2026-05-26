import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DataTable } from "../components/DataTable";
import { FlowDiagram } from "../components/FlowDiagram";
import { SectionCard } from "../components/SectionCard";
import { StatusBadge } from "../components/StatusBadge";
import { dataQuality, dataSources } from "../data/mockData";
import type { SensorSource } from "../types/platform";

export function DataAccess() {
  return (
    <div className="space-y-6">
      <SectionCard title="多源异构数据接入状态" subtitle="传感器、维修记录、故障日志与工况参数统一接入">
        <DataTable<SensorSource>
          rows={dataSources}
          columns={[
            { header: "数据源", accessor: "name" },
            { header: "接入状态", accessor: (row) => <StatusBadge value={row.status} /> },
            { header: "采样频率", accessor: "frequency" },
            { header: "数据质量", accessor: (row) => `${row.quality}%` },
            { header: "最新更新时间", accessor: "updatedAt" },
            { header: "所属设备", accessor: "equipmentId" }
          ]}
        />
      </SectionCard>

      <div className="grid grid-cols-[1fr_420px] gap-6">
        <SectionCard title="数据流转示意图" subtitle="从感知采集到业务决策的工程化数据链路">
          <FlowDiagram steps={["感知采集层", "数据管理层", "模型分析层", "业务应用层"]} />
        </SectionCard>
        <SectionCard title="数据质量评分" subtitle="面向模型可靠性的输入数据评估">
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={dataQuality}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[0, 100]} />
                <Tooltip contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)" }} />
                <Bar dataKey="value" name="评分" fill="#38bdf8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
