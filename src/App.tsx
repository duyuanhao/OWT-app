import { useState, type ReactNode } from "react";
import { Layout } from "./components/Layout";
import { ConditionMonitoring } from "./pages/ConditionMonitoring";
import { DataAccess } from "./pages/DataAccess";
import { FaultDiagnosis } from "./pages/FaultDiagnosis";
import { HealthAssessment } from "./pages/HealthAssessment";
import { KnowledgeBase } from "./pages/KnowledgeBase";
import { MaintenanceDecision } from "./pages/MaintenanceDecision";
import { ModelService } from "./pages/ModelService";
import { Overview } from "./pages/Overview";
import { PlatformValidation } from "./pages/PlatformValidation";
import { RulPrediction } from "./pages/RulPrediction";
import type { ModuleKey } from "./types/platform";

const pages: Record<ModuleKey, ReactNode> = {
  overview: <Overview />,
  dataAccess: <DataAccess />,
  conditionMonitoring: <ConditionMonitoring />,
  healthAssessment: <HealthAssessment />,
  faultDiagnosis: <FaultDiagnosis />,
  rulPrediction: <RulPrediction />,
  maintenanceDecision: <MaintenanceDecision />,
  modelService: <ModelService />,
  knowledgeBase: <KnowledgeBase />,
  platformValidation: <PlatformValidation />
};

export default function App() {
  const [active, setActive] = useState<ModuleKey>("overview");

  return (
    <Layout active={active} onChange={setActive}>
      {pages[active]}
    </Layout>
  );
}
