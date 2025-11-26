import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'yesno'
})
/**
 * Pipe to transform boolean values to 'Oui' or 'Non'.
 */
export class YesnoPipe implements PipeTransform {

    /**
     * Pipe to transform boolean values to 'Oui' or 'Non'.
     * @param value 
     * @param pas d'autres arguments
     * @returns 'Oui' or 'Non'
     */
    transform(value: any, ...args: any[]): any {
        return value ? 'Oui' : 'Non';
    }
}