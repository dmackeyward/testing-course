import { it, expect, describe, vi } from 'vitest';
import { generateReportData } from './data'

//SPIES testing example -> this feature is useful to test 
//whether the function was called WITHOUT actually calling the function

describe('generateReportData()', () => {

    it('should execute logFn if a function is provided', () => {
        const logger = vi.fn();

        generateReportData(logger);

        expect(logger).toHaveBeenCalled();
    })
})