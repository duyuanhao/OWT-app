import { BookMarked, RefreshCcw } from "lucide-react";
import { DataTable } from "../components/DataTable";
import { SectionCard } from "../components/SectionCard";
import { faultKnowledge, knowledgeRules, repairCases } from "../data/mockData";

export function KnowledgeBase() {
  return (
    <div className="space-y-6">
      <SectionCard title="故障知识库" subtitle="典型故障类型、特征模式、可能原因与处理措施">
        <DataTable
          rows={faultKnowledge}
          columns={[
            { header: "故障类型", accessor: "type" },
            { header: "典型特征", accessor: "feature" },
            { header: "可能原因", accessor: "reason" },
            { header: "推荐处理措施", accessor: "action" }
          ]}
        />
      </SectionCard>

      <SectionCard title="维修案例库" subtitle="历史诊断与维修反馈支撑相似案例推理">
        <DataTable
          rows={repairCases}
          columns={[
            { header: "设备编号", accessor: "equipmentId" },
            { header: "故障现象", accessor: "phenomenon" },
            { header: "诊断结果", accessor: "diagnosis" },
            { header: "维修措施", accessor: "measure" },
            { header: "维修效果", accessor: "effect" }
          ]}
        />
      </SectionCard>

      <div className="grid grid-cols-[1fr_420px] gap-6">
        <SectionCard title="专家规则" subtitle="用于诊断解释、阈值触发与维护建议生成">
          <div className="space-y-3">
            {knowledgeRules.map((rule) => (
              <div key={rule.title} className="rounded-lg border border-line bg-sky-400/5 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <BookMarked className="h-4 w-4 text-cyanSoft" />
                  {rule.title}
                </div>
                <p className="mt-2 text-sm text-slate-300">规则条件：{rule.condition}</p>
                <p className="mt-1 text-sm text-slate-300">判断结论：{rule.conclusion}</p>
                <p className="mt-1 text-sm text-slate-300">处理动作：{rule.action}</p>
              </div>
            ))}
          </div>
        </SectionCard>
        <SectionCard title="知识库与模型联动说明" subtitle="诊断解释与执行反馈共同更新知识体系">
          <div className="rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-5">
            <RefreshCcw className="h-6 w-6 text-cyanSoft" />
            <p className="mt-4 text-sm leading-7 text-slate-300">
              诊断模型输出故障类别和置信度后，平台自动检索故障知识库和维修案例库，生成可解释结论与处理建议。
              维护执行完成后，工单结果、维修效果和复测特征会反向写入知识库，用于修正规则阈值和相似案例权重。
            </p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
