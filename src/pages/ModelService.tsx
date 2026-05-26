import { Boxes, GitCommitHorizontal } from "lucide-react";
import { FlowDiagram } from "../components/FlowDiagram";
import { SectionCard } from "../components/SectionCard";
import { StatusBadge } from "../components/StatusBadge";
import { modelServices } from "../data/mockData";

export function ModelService() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-5 gap-4">
        {modelServices.map((model) => (
          <div key={model.name} className="rounded-lg border border-line bg-panel p-4 shadow-glow">
            <div className="flex items-start justify-between gap-3">
              <Boxes className="h-5 w-5 text-cyanSoft" />
              <StatusBadge value={model.status} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{model.name}</h3>
            <div className="mt-4 space-y-2 text-xs text-slate-300">
              <div>输入数据：{model.input}</div>
              <div>输出结果：{model.output}</div>
              <div>模型版本：{model.version}</div>
              <div>调用次数：{model.calls.toLocaleString("zh-CN")}</div>
              <div>指标：{model.metric}</div>
              <div>最近更新：{model.updatedAt}</div>
            </div>
          </div>
        ))}
      </div>

      <SectionCard title="模型调用链路图" subtitle="接口化模型服务支撑在线推理与业务决策">
        <FlowDiagram steps={["数据输入", "特征提取", "模型推理", "结果解释", "业务决策"]} />
      </SectionCard>

      <SectionCard title="模型服务化部署说明" subtitle="面向工程扩展的算法模型集成方式">
        <div className="grid grid-cols-3 gap-4">
          {[
            ["接口化", "各模型以统一输入输出协议暴露服务接口，便于调度、监控与版本治理。"],
            ["模块化", "状态表征、异常检测、诊断、预测和决策模型解耦部署，可独立升级。"],
            ["可扩展", "新增设备类型或算法时，仅需扩展特征映射和模型注册信息。"]
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-line bg-sky-400/5 p-4">
              <GitCommitHorizontal className="h-5 w-5 text-cyanSoft" />
              <div className="mt-3 text-sm font-semibold text-white">{title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
