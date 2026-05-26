import { Clock3, Cpu, Server, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export function Topbar() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-line bg-[#07172b]/90 px-6 backdrop-blur">
      <div>
        <div className="text-sm font-semibold text-white">高端装备一体化状态监测与运维决策平台</div>
        <div className="mt-1 text-xs text-slate-400">状态感知—健康评估—趋势预测—策略优化—执行反馈</div>
      </div>
      <div className="flex items-center gap-3 text-xs">
        <div className="flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-emerald-300">
          <Wifi className="h-4 w-4" />
          系统运行正常
        </div>
        <div className="flex items-center gap-2 rounded-md border border-line bg-sky-400/10 px-3 py-2 text-slate-300">
          <Server className="h-4 w-4 text-cyanSoft" />
          在线设备 123 / 126
        </div>
        <div className="flex items-center gap-2 rounded-md border border-line bg-sky-400/10 px-3 py-2 text-slate-300">
          <Cpu className="h-4 w-4 text-cyanSoft" />
          模型服务 5 个
        </div>
        <div className="flex items-center gap-2 rounded-md border border-line bg-sky-400/10 px-3 py-2 text-slate-300">
          <Clock3 className="h-4 w-4 text-cyanSoft" />
          {now.toLocaleString("zh-CN", { hour12: false })}
        </div>
      </div>
    </header>
  );
}
