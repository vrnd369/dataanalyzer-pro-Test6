import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Analysis } from './pages/Analysis';
import { Workspaces } from './pages/Workspaces';
import { Settings } from './pages/Settings';
import { VisualizationsPage } from './pages/analysis/visualizations';
import { Reports } from './pages/reports';
import { WorkspaceProvider } from './components/workspace/WorkspaceProvider';
import { AuthProvider } from './providers/auth/AuthProvider';
import MainLayout from './components/layout/MainLayout';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

// Global React Error Boundary
class GlobalErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Unhandled error caught by GlobalErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">Please refresh the page to continue.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// 🔹 Main App with Routing
const App: React.FC = () => {
  return (
    <GlobalErrorBoundary>
      <AuthProvider>
        <WorkspaceProvider>
          <Router
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true
            }}
          >
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={
                <MainLayout>
                  <Home />
                  <SpeedInsights />
                  <Analytics />
                </MainLayout>
              } />
              <Route path="/dashboard" element={
                <MainLayout>
                  <Dashboard />
                  <SpeedInsights />
                  <Analytics />
                </MainLayout>
              } />
              <Route path="/analysis" element={
                <MainLayout>
                  <Analysis />
                  <SpeedInsights />
                  <Analytics />
                </MainLayout>
              } />
              <Route path="/analysis/visualizations" element={
                <MainLayout>
                  <VisualizationsPage />
                  <SpeedInsights />
                  <Analytics />
                </MainLayout>
              } />
              <Route path="/analysis/reports" element={
                <MainLayout>
                  <Reports />
                  <SpeedInsights />
                  <Analytics />
                </MainLayout>
              } />
              <Route path="/workspaces/*" element={
                <MainLayout>
                  <Workspaces />
                  <SpeedInsights />
                  <Analytics />
                </MainLayout>
              } />
              <Route path="/settings" element={
                <MainLayout>
                  <Settings />
                  <SpeedInsights />
                  <Analytics />
                </MainLayout>
              } />
            </Routes>
          </Router>
        </WorkspaceProvider>
      </AuthProvider>
    </GlobalErrorBoundary>
  );
};

export default App;