import { DataField } from '@/types/data';
import { RegressionResult } from './types';
import { standardize, calculateRobustStandardError, getTValue, calculateRegressionMetrics } from './utils';

export function calculateTimeSeriesRegression(
  dependent: DataField,
  independent: DataField,
  lag: number = 1
): RegressionResult {
  // Standardize values for numerical stability
  const y = standardize(dependent.value as number[]);
  const x = standardize(independent.value as number[]);
  
  const n = Math.min(x.length, y.length);
  
  // Create lagged variables
  const laggedX = [];
  const laggedY = [];
  
  for (let i = lag; i < n; i++) {
    laggedX.push(x[i - lag]);
    laggedY.push(y[i]);
  }
  
  const laggedN = laggedX.length;
  
  // Calculate coefficients using normal equation
  const xMean = laggedX.reduce((sum, xi) => sum + xi, 0) / laggedN;
  const yMean = laggedY.reduce((sum, yi) => sum + yi, 0) / laggedN;
  
  let numerator = 0;
  let denominator = 0;
  
  for (let i = 0; i < laggedN; i++) {
    const xDiff = laggedX[i] - xMean;
    numerator += xDiff * (laggedY[i] - yMean);
    denominator += xDiff * xDiff;
  }
  
  const slope = numerator / denominator;
  const intercept = yMean - slope * xMean;
  
  // Calculate predictions
  const predictions = laggedX.map(xi => intercept + slope * xi);
  
  // Calculate metrics
  const totalSS = laggedY.reduce((ss, yi) => ss + Math.pow(yi - yMean, 2), 0);
  const residualSS = laggedY.reduce((ss, yi, i) => ss + Math.pow(yi - predictions[i], 2), 0);
  const rSquared = 1 - (residualSS / totalSS);
  
  // Calculate robust standard error
  const standardError = calculateRobustStandardError(laggedY, predictions, 1000);
  
  // Calculate confidence intervals
  const tValue = getTValue(laggedN - 2, 0.975); // 95% confidence level
  
  // Calculate prediction intervals
  const confidence = {
    upper: predictions.map(pred => pred + tValue * standardError),
    lower: predictions.map(pred => pred - tValue * standardError)
  };
  
  // Calculate additional metrics
  const metrics = calculateRegressionMetrics(laggedY, predictions);
  
  // Generate equation string
  const equation = `${dependent.name}(t) = ${intercept.toFixed(3)} + ${slope.toFixed(3)}×${independent.name}(t-${lag})`;
  
  return {
    field: dependent.name,
    type: 'time-series',
    coefficients: [slope], // Exclude intercept
    intercept,
    rSquared,
    standardError,
    predictions,
    actualValues: laggedY,
    equation,
    confidence,
    metrics
  };
} 