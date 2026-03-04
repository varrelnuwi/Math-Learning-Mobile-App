/**
 * Determinant calculation utilities
 */

/**
 * Calculate determinant of a 2x2 matrix
 * | a  b |
 * | c  d |
 * det = ad - bc
 */
export function det2x2(a: number, b: number, c: number, d: number): number {
    return a * d - b * c;
}

/**
 * Calculate determinant of a 3x3 matrix using Sarrus' rule
 * | a  b  c |
 * | d  e  f |
 * | g  h  i |
 * det = aei + bfg + cdh - ceg - bdi - afh
 */
export function det3x3(matrix: number[][]): number {
    const [a, b, c] = matrix[0];
    const [d, e, f] = matrix[1];
    const [g, h, i] = matrix[2];

    return (
        a * e * i +
        b * f * g +
        c * d * h -
        c * e * g -
        b * d * i -
        a * f * h
    );
}

/**
 * Generate a random matrix of given size with values between min and max (inclusive)
 */
export function generateRandomMatrix(
    size: number,
    min: number = -10,
    max: number = 10
): number[][] {
    const matrix: number[][] = [];
    for (let i = 0; i < size; i++) {
        const row: number[] = [];
        for (let j = 0; j < size; j++) {
            row.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        matrix.push(row);
    }
    return matrix;
}

/**
 * Format a step-by-step calculation string for 2x2 determinant
 */
export function getSteps2x2(a: number, b: number, c: number, d: number): string[] {
    return [
        `det(A) = (${a})(${d}) − (${b})(${c})`,
        `det(A) = ${a * d} − ${b * c}`,
        `det(A) = ${a * d - b * c}`,
    ];
}

/**
 * Format a step-by-step calculation string for 3x3 determinant
 */
export function getSteps3x3(matrix: number[][]): string[] {
    const [a, b, c] = matrix[0];
    const [d, e, f] = matrix[1];
    const [g, h, i] = matrix[2];

    const pos1 = a * e * i;
    const pos2 = b * f * g;
    const pos3 = c * d * h;
    const neg1 = c * e * g;
    const neg2 = b * d * i;
    const neg3 = a * f * h;

    return [
        `Diagonal positif (+):`,
        `  (${a})(${e})(${i}) = ${pos1}`,
        `  (${b})(${f})(${g}) = ${pos2}`,
        `  (${c})(${d})(${h}) = ${pos3}`,
        `Diagonal negatif (−):`,
        `  (${c})(${e})(${g}) = ${neg1}`,
        `  (${b})(${d})(${i}) = ${neg2}`,
        `  (${a})(${f})(${h}) = ${neg3}`,
        `det(A) = (${pos1} + ${pos2} + ${pos3}) − (${neg1} + ${neg2} + ${neg3})`,
        `det(A) = ${pos1 + pos2 + pos3} − ${neg1 + neg2 + neg3}`,
        `det(A) = ${pos1 + pos2 + pos3 - (neg1 + neg2 + neg3)}`,
    ];
}
