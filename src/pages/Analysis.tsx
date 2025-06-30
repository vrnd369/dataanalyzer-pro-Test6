import { AnalysisSection } from '@/components/analysis/AnalysisSection';
import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAnalysisData } from '@/utils/storage/db';
import { useAnalysis } from '@/hooks/analysis';
import type { FileData } from '@/types/file';
import type { AnalyzedData } from '@/types/analysis';
import { Brain, ArrowLeft, AlertCircle } from 'lucide-react';
import { performAnalysis } from '@/utils/analysis/core';
import { validateDataStructure, getValidFields } from '@/utils/validation/dataValidation';

function Analysis() {
  const [data, setData] = useState<FileData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { analyze, isAnalyzing, progress, error: analysisError } = useAnalysis();
  useEffect(() => {
    async function loadData() {
      try {
        setIsProcessing(true);
        setError(null);

        const analysisData = await getAnalysisData();
        if (!analysisData) {
          navigate('/', { 
            replace: true,
            state: { error: 'No analysis data found. Please upload a file to analyze.' }
          });
          return;
        }

        // Comprehensive data validation
        if (!analysisData.content?.fields?.length) {
          throw new Error('Invalid analysis data structure - no fields found');
        }

        // Validate each field has proper structure
        const validatedFields = analysisData.content.fields.filter(field => {
          if (!field || typeof field !== 'object') {
            console.warn('Invalid field structure:', field);
            return false;
          }
          
          if (!field.name || typeof field.name !== 'string') {
            console.warn('Field missing name:', field);
            return false;
          }
          
          if (!field.type || !['number', 'string', 'date', 'boolean'].includes(field.type)) {
            console.warn('Field has invalid type:', field);
            return false;
          }
          
          if (!Array.isArray(field.value)) {
            console.warn('Field value is not an array:', field);
            return false;
          }
          
          return true;
        });

        if (validatedFields.length === 0) {
          throw new Error('No valid fields found after validation');
        }

        // Update the data with validated fields
        const validatedData = {
          ...analysisData,
          content: {
            ...analysisData.content,
            fields: validatedFields
          }
        };
        
        setData(validatedData);
        analyze(validatedFields);
      } catch (err) {
        console.error('Analysis data loading error:', err);
        setError(err instanceof Error ? err : new Error('Failed to load analysis data'));
      } finally {
        setIsProcessing(false);
      }
    }
    loadData();
  }, [navigate, analyze]);

  
  const computedResults = useMemo<AnalyzedData | null>(() => {
    if (!data || !category) return null;
    try {
      // Validate data structure using utility function
      const validation = validateDataStructure(data.content);
      if (!validation.isValid) {
        throw new Error(validation.error || 'Invalid data structure');
      }

      // Get valid fields using utility function
      const validFields = getValidFields(data.content.fields);
      if (validFields.length === 0) {
        throw new Error('No valid fields found in the data');
      }

      const analysisResults = performAnalysis(validFields, category);
      if (!analysisResults) {
        throw new Error('No analysis results available');
      }

      // Transform the analysis results to match AnalyzedData type
      const baseResult: AnalyzedData = {
        fields: validFields.map(field => ({
          ...field,
          values: field.value
        })),
        statistics: {},
        trends: [],
        correlations: [],
        insights: [],
        recommendations: [],
        pros: [],
        cons: [],
        hasNumericData: validFields.some(f => f.type === 'number'),
        hasTextData: validFields.some(f => f.type === 'string'),
        dataQuality: {
          completeness: 1,
          validity: 1
        },
        analysis: {
          trends: []
        }
      };

      // Merge the analysis results based on the category
      if ('statistics' in analysisResults) {
        baseResult.statistics = analysisResults.statistics as Record<string, any>;
      }
      if ('trends' in analysisResults) {
        baseResult.trends = (analysisResults.trends as Array<{ field: string; trend: 'up' | 'down' | 'stable' }>) || [];
      }
      if ('correlations' in analysisResults) {
        const correlations = analysisResults.correlations as Record<string, number>;
        baseResult.correlations = Object.entries(correlations).map(([field, correlation]) => ({
          fields: [field],
          correlation
        }));
      }
      if ('insights' in analysisResults) {
        baseResult.insights = (analysisResults.insights as string[]) || [];
      }
      if ('analysis' in analysisResults && 'trends' in analysisResults.analysis) {
        baseResult.analysis.trends = (analysisResults.analysis.trends as Array<{
          field: string;
          direction: 'up' | 'down' | 'stable';
          confidence: number;
        }>) || [];
      }
      if ('mlAnalysis' in analysisResults) {
        baseResult.mlAnalysis = analysisResults.mlAnalysis as {
          predictions: number[];
          evaluation: { accuracy: number; loss: number };
          training: { duration: number; history: { loss: number[]; val_loss?: number[] } };
        };
      }

      return baseResult;
    } catch (error) {
      console.error('Analysis error:', error);
      return {
        fields: getValidFields(data.content?.fields || []).map(field => ({
          ...field,
          values: field.value
        })),
        statistics: {},
        trends: [],
        correlations: [],
        insights: [],
        recommendations: [],
        pros: [],
        cons: [],
        hasNumericData: (data.content?.fields || []).some(f => f?.type === 'number'),
        hasTextData: (data.content?.fields || []).some(f => f?.type === 'string'),
        dataQuality: {
          completeness: 1,
          validity: 1
        },
        analysis: {
          trends: []
        },
        error: error instanceof Error ? error.message : 'Failed to perform analysis'
      };
    }
  }, [data, category]);

  if (error || analysisError) {
    // Log the error for debugging
    console.error('Analysis error details:', {
      error: error?.message,
      analysisError: analysisError?.message,
      stack: error?.stack || analysisError?.stack
    });
    // Explicitly log the full error object and stack trace
    console.error('Full error object:', error || analysisError);
    console.trace('Stack trace for analysis error');
    
    // Show user-friendly error message
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 text-red-600 p-6 rounded-lg flex flex-col items-center gap-3 shadow-sm max-w-lg mx-auto">
          <AlertCircle className="w-8 h-8" />
          <div>
            <p className="font-medium text-black">{(error || analysisError)?.message}</p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
            >
              Return to Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  if (isProcessing || isAnalyzing) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4" />
            <p className="text-gray-600 font-medium">
              {isProcessing ? 'Processing data...' : `Analyzing... ${Math.round(progress)}%`}
            </p>
            {progress > 0 && (
              <div className="w-full max-w-md mt-4">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-teal-500 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-black hover:text-gray-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Upload
        </button>
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-black" />
          <h1 className="text-2xl font-bold text-black">Analysis Results</h1>
          <h1 className="text-2xl font-bold text-black">
            {category 
              ? `${category.charAt(0).toUpperCase() + category.slice(1)} Analysis`
              : 'Analysis Results'
            }
          </h1>
        </div>
      </div>

      {data ? (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <AnalysisSection
              data={data.content} 
              category={category}
              results={computedResults as any}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
        </div>
      )}
    </div>
  );
}

export { Analysis };