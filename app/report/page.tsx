import Sidebar from "../../components/layout/Sidebar";

import ReportGenerator from "../../components/report/ReportGenerator";
import ReportHistory from "../../components/report/ReportHistory";
import AISummary from "../../components/report/AISummary";

export default function ReportPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 overflow-y-auto">

        <div className="max-w-7xl mx-auto p-8">

          {/* Page Header */}

          <div className="mb-8">

            <h1 className="text-5xl font-bold">
              Ocean Reports
            </h1>

            <p className="text-slate-400 mt-3 text-lg">
              Generate AI-powered marine intelligence reports and download comprehensive insights.
            </p>

          </div>

          {/* Generator */}

          <ReportGenerator />

          {/* Bottom Grid */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

            <ReportHistory />

            <AISummary />

          </div>

        </div>

      </div>

    </main>
  );
}