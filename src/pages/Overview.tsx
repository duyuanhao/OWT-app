import { Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FlowDiagram } from "../components/FlowDiagram";
import { MetricCard } from "../components/MetricCard";
import { SectionCard } from "../components/SectionCard";
import { healthDistribution, overviewMetrics, realtimeTrends } from "../data/mockData";

export function Overview() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-cyan-300/20 bg-panel p-6 shadow-glow">
        <div className="text-xs font-semibold text-cyanSoft">平台总览 Dashboard</div>
        <h1 className="mt-2 text-3xl font-semibold text-white">高端装备一体化状态监测与运维决策平台</h1>
        <p className="mt-2 text-sm text-slate-300">状态感知—健康评估—趋势预测—策略优化—执行反馈的闭环运维支撑系统</p>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {overviewMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-6">
        <SectionCard title="闭环运维流程图" subtitle="多源异构数据驱动的状态感知、预测与决策闭环">
          <FlowDiagram />
        </SectionCard>
        <SectionCard title="设备健康状态分布" subtitle="按健康等级汇总当前接入装备">
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={healthDistribution} dataKey="value" nameKey="name" innerRadius={58} outerRadius={88} paddingAngle={4}>
                  {healthDistribution.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)", color: "#fff" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {healthDistribution.map((item) => (
              <div key={item.name} className="rounded-md border border-line bg-sky-400/5 p-3">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </div>
                <div className="mt-1 text-xl font-semibold text-white">{item.value}%</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="实时运行趋势" subtitle="振动、温度、电流与健康指数融合监测">
        <div className="h-80">
          <ResponsiveContainer>
            <LineChart data={realtimeTrends}>
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)" }} />
              <Line type="monotone" dataKey="vibration" name="振动" stroke="#67e8f9" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="temperature" name="温度" stroke="#f59e0b" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="current" name="电流" stroke="#60a5fa" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="health" name="健康指数" stroke="#22c55e" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>
    </div>
  );
}
