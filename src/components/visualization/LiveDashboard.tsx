import React from 'react';
import { RefreshCw, Wifi, WifiOff, Settings2, Maximize2 } from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';
import { DataField } from '@/types/data';
import { formatNumber } from '@/utils/analysis/formatting';

interface LiveDashboardProps {
  data: {
    fields: DataField[];
  };
  refreshInterval?: number;
  onRefresh?: () => void;
}

export function LiveDashboard({ data, refreshInterval = 5000, onRefresh }: LiveDashboardProps) {
  const [isConnected, setIsConnected] = React.useState(true);
  const [lastUpdate, setLastUpdate] = React.useState(new Date());
  const [fullscreenChart, setFullscreenChart] = React.useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = React.useState(true);
  const refreshIntervalRef = React.useRef<number>();

  React.useEffect(() => {
    if (autoRefresh && onRefresh) {
      const refresh = () => {
        onRefresh();
        setLastUpdate(new Date());
      };

      // Set up the interval
      refreshIntervalRef.current = window.setInterval(refresh, refreshInterval);

      return () => {
        if (refreshIntervalRef.current) {
          window.clearInterval(refreshIntervalRef.current);
        }
      };
    }
  }, [autoRefresh, refreshInterval, onRefresh]);

  const handleManualRefresh = () => {
    if (onRefresh) {
      onRefresh();
      setLastUpdate(new Date());
    }
  };

  const numericFields = data.fields.filter(f => f.type === 'number');

  // Helper function to safely convert values to numbers
  const toNumber = (value: any): number => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') return parseFloat(value) || 0;
    if (value instanceof Date) return value.getTime();
    return 0;
  };

  // Helper function to calculate average
  const calculateAverage = (values: any[]): number => {
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, val) => acc + toNumber(val), 0);
    return sum / values.length;
  };

  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsConnected(!isConnected)}
              >
                {isConnected ? (
                  <Wifi className="w-5 h-5 text-green-500" />
                ) : (
                  <WifiOff className="w-5 h-5 text-red-500" />
                )}
                <span className={`text-sm font-medium ${
                  isConnected ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`p-2 rounded-lg border ${
                autoRefresh
                  ? 'border-teal-200 bg-teal-50 text-teal-600'
                  : 'border-gray-200 text-gray-400'
              }`}
              title={autoRefresh ? 'Auto-refresh on' : 'Auto-refresh off'}
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              onClick={handleManualRefresh}
              disabled={!isConnected}
              className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
              title="Refresh now"
            >
              <Settings2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Live Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {numericFields.map((field, index) => (
          <div
            key={field.name}
            className={`bg-white p-4 rounded-lg shadow-sm ${
              fullscreenChart === field.name ? 'fixed inset-4 z-50' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">{field.name}</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFullscreenChart(
                    fullscreenChart === field.name ? null : field.name
                  )}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={fullscreenChart === field.name ? 'h-[80vh]' : 'h-[300px]'}>
              {index % 2 === 0 ? (
                <Line
                  data={{
                    labels: Array.from({ length: field.value.length }, (_, i) => 
                      new Date(Date.now() - (field.value.length - i - 1) * refreshInterval)
                        .toLocaleTimeString()
                    ),
                    datasets: [{
                      label: field.name,
                      data: field.value,
                      borderColor: 'rgb(13, 148, 136)',
                      backgroundColor: 'rgba(13, 148, 136, 0.1)',
                      fill: true,
                      tension: 0.4
                    }]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                      duration: 0
                    },
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      x: {
                        grid: {
                          display: false
                        }
                      },
                      y: {
                        beginAtZero: false
                      }
                    }
                  }}
                />
              ) : (
                <Bar
                  data={{
                    labels: Array.from({ length: field.value.length }, (_, i) => 
                      new Date(Date.now() - (field.value.length - i - 1) * refreshInterval)
                        .toLocaleTimeString()
                    ),
                    datasets: [{
                      label: field.name,
                      data: field.value,
                      backgroundColor: 'rgba(13, 148, 136, 0.8)'
                    }]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                      duration: 0
                    },
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      x: {
                        grid: {
                          display: false
                        }
                      },
                      y: {
                        beginAtZero: false
                      }
                    }
                  }}
                />
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="text-gray-500">
                Current: {formatNumber(toNumber(field.value[field.value.length - 1]))}
              </div>
              <div className="text-gray-500">
                Avg: {formatNumber(calculateAverage(field.value))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}