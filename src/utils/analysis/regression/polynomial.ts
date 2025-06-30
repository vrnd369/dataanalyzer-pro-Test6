import { DataField } from '@/types/data';
import { RegressionResult } from './types';
import { standardize, calculateRobustStandardError, getTValue, calculateRegressionMetrics } from './utils';

export function calculatePolynomialRegression(
  dependent: DataField,
  independent: DataField,
  degree: number = 2
): RegressionResult {
  // Standardize values for numerical stability
  const y = standardize(dependent.value as number[]);
  const x = standardize(independent.value as number[]);
  
  const n = Math.min(x.length, y.length);
  
  // Create design matrix with polynomial terms
  const X = x.map(xi => {
    const row = [1]; // Intercept term
    for (let d = 1; d <= degree; d++) {
      row.push(Math.pow(xi, d));
    }
    return row;
  });
  
  // Calculate coefficients using normal equation
  const XtX = multiplyMatrix(transposeMatrix(X), X);
  const Xty = multiplyMatrix(transposeMatrix(X), y.map(yi => [yi]));
  const coefficients = solveLinearSystem(XtX, Xty).map(row => row[0]);
  
  // Calculate predictions
  const predictions = X.map(row => {
    return row.reduce((sum, feature, i) => sum + feature * coefficients[i], 0);
  });
  
  // Calculate metrics
  const meanY = y.reduce((a, b) => a + b, 0) / n;
  const totalSS = y.reduce((ss, yi) => ss + Math.pow(yi - meanY, 2), 0);
  const residualSS = y.reduce((ss, yi, i) => ss + Math.pow(yi - predictions[i], 2), 0);
  const rSquared = 1 - (residualSS / totalSS);
  
  // Calculate robust standard error
  const standardError = calculateRobustStandardError(y, predictions, 1000);
  
  // Calculate confidence intervals
  const tValue = getTValue(n - degree - 1, 0.975); // 95% confidence level
  
  // Calculate prediction intervals
  const confidence = {
    upper: predictions.map(pred => pred + tValue * standardError),
    lower: predictions.map(pred => pred - tValue * standardError)
  };
  
  // Calculate additional metrics
  const metrics = calculateRegressionMetrics(y, predictions);
  
  // Generate equation string
  let equation = `${dependent.name} = ${coefficients[0].toFixed(3)}`;
  for (let i = 1; i <= degree; i++) {
    equation += ` + ${coefficients[i].toFixed(3)}×${independent.name}^${i}`;
  }
  
  return {
    field: dependent.name,
    type: 'polynomial',
    coefficients: coefficients.slice(1), // Exclude intercept
    intercept: coefficients[0],
    rSquared,
    standardError,
    predictions,
    actualValues: y,
    equation,
    confidence,
    metrics
  };
}

// Helper functions for matrix operations
function transposeMatrix(matrix: number[][]): number[][] {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

function multiplyMatrix(a: number[][], b: number[][]): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = [];
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < b.length; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function solveLinearSystem(a: number[][], b: number[][]): number[][] {
  const n = a.length;
  const augmented = a.map((row, i) => [...row, b[i][0]]);
  
  // Gaussian elimination
  for (let i = 0; i < n; i++) {
    // Find pivot
    let maxRow = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(augmented[j][i]) > Math.abs(augmented[maxRow][i])) {
        maxRow = j;
      }
    }
    
    // Swap rows
    [augmented[i], augmented[maxRow]] = [augmented[maxRow], augmented[i]];
    
    // Eliminate column
    for (let j = i + 1; j < n; j++) {
      const factor = augmented[j][i] / augmented[i][i];
      for (let k = i; k <= n; k++) {
        augmented[j][k] -= factor * augmented[i][k];
      }
    }
  }
  
  // Back substitution
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let sum = augmented[i][n];
    for (let j = i + 1; j < n; j++) {
      sum -= augmented[i][j] * x[j];
    }
    x[i] = sum / augmented[i][i];
  }
  
  return x.map(val => [val]);
} 