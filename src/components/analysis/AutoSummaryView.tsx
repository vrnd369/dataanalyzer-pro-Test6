import { Brain, TrendingUp, AlertCircle, Target } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function AutoSummaryView() {
  const location = useLocation();
  const insights = location.state?.insights;

  if (!insights) {
    return (
      <div className="bg-red-50 p-4 rounded-lg flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-red-600" />
        <p className="text-red-600">No insights available. Please run analysis first.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="w-5 h-5 text-teal-600" />
          <h3 className="text-lg font-semibold text-black-500">Auto-Generated Insights</h3>
        </div>

        <div className="space-y-8">
          {/* Overview */}
          <div>
            <h4 className="text-sm font-medium text-black-900 mb-3">Overview</h4>
            <ul className="space-y-2">
              {insights.overview.map((item: string, index: number) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>

          {/* Key Trends */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <h4 className="text-sm font-medium text-gray-900">Key Trends</h4>
            </div>
            <div className="grid gap-4">
              {insights.keyTrends.map((trend: any, index: number) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    trend.significance === 'high'
                      ? 'border-blue-200 bg-blue-50'
                      : trend.significance === 'medium'
                      ? 'border-yellow-200 bg-yellow-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-gray-900">{trend.field}</h5>
                    <span className={`text-sm font-medium ${
                      trend.trend === 'increasing' ? 'text-green-600' :
                      trend.trend === 'decreasing' ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      {trend.trend === 'increasing' ? '↑' : trend.trend === 'decreasing' ? '↓' : '→'}{' '}
                      {Math.abs(trend.changePercent).toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Anomalies */}
          {insights.anomalies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <h4 className="text-sm font-medium text-gray-900">Detected Anomalies</h4>
              </div>
              <div className="space-y-3">
                {insights.anomalies.map((anomaly: any, index: number) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      anomaly.severity === 'high'
                        ? 'bg-red-50 text-red-700'
                        : anomaly.severity === 'medium'
                        ? 'bg-yellow-50 text-yellow-700'
                        : 'bg-gray-50 text-gray-700'
                    }`}
                  >
                    <p className="font-medium mb-1">{anomaly.field}</p>
                    <p className="text-sm">{anomaly.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-green-600" />
              <h4 className="text-sm font-medium text-gray-900">Recommended Actions</h4>
            </div>
            <div className="space-y-4">
              {insights.recommendations.map((rec: any, index: number) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    rec.priority === 'high'
                      ? 'border-red-200 bg-red-50'
                      : rec.priority === 'medium'
                      ? 'border-yellow-200 bg-yellow-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{rec.action}</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      rec.priority === 'high'
                        ? 'bg-red-100 text-red-700'
                        : rec.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {rec.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-600"><strong>Why:</strong> {rec.reason}</p>
                    <p className="text-gray-600"><strong>Impact:</strong> {rec.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}