import { ISyntaxValidator } from './@types/syntaxValidator';

export class SyntaxValidator implements ISyntaxValidator {
    constructor() {}

    get snapshot(): unknown {
        return;
    }

    validateChange() {}

    updateSnapshot() {}

    refresh() {}
}
