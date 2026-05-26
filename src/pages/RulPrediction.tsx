import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DataTable } from "../components/DataTable";
import { SectionCard } from "../components/SectionCard";
import { modelComparison, rulSeries } from "../data/mockData";

export function RulPrediction() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-[1fr_360px] gap-6">
        <SectionCard title="RUL 预测曲线" subtitle="健康指数退化趋势与预测置信区间">
          <div className="h-80">
            <ResponsiveContainer>
              <AreaChart data={rulSeries}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="time" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)" }} />
                <Area dataKey="upper" name="置信上界" stroke="transparent" fill="#38bdf8" fillOpacity={0.12} />
                <Area dataKey="lower" name="置信下界" stroke="transparent" fill="#081a32" fillOpacity={1} />
                <Line dataKey="health" name="健康指数" stroke="#67e8f9" strokeWidth={3} dot />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
        <SectionCard title="剩余寿命结论" subtitle="EQ-TB-071 预测输出">
          <div className="rounded-lg border border-amber-400/30 bg-amber-400/10 p-5">
            <div className="text-sm text-amber-200">预计剩余寿命</div>
            <div className="mt-2 text-4xl font-semibold text-white">186 小时</div>
            <div className="mt-2 text-sm text-slate-300">预计失效时间：2026-06-03 05:30</div>
          </div>
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <p>退化趋势分析：设备处于加速退化期，健康指数下降速率较过去 7 日提升 42%。</p>
            <p>建议将预测结果同步至维护决策模块，结合备件与产线计划寻找低影响维护窗口。</p>
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-[430px_1fr] gap-6">
        <SectionCard title="不同预测模型对比" subtitle="LSTM、Transformer、XGBoost 与退化模型误差评估">
          <DataTable
            rows={modelComparison}
            columns={[
              { header: "模型", accessor: "model" },
              { header: "MAE", accessor: (row) => `${row.mae} h` },
              { header: "RMSE", accessor: (row) => `${row.rmse} h` },
              { header: "置信度", accessor: (row) => `${row.confidence}%` }
            ]}
          />
        </SectionCard>
        <SectionCard title="剩余寿命序列" subtitle="未来一周 RUL 预测结果">
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={rulSeries}>
                <XAxis dataKey="time" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)" }} />
                <Bar dataKey="rul" name="剩余寿命/小时" fill="#22c55e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
