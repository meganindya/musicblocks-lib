import { IInterpreter } from './@types/interpreter';

export class Interpreter implements IInterpreter {
    constructor() {}

    executeStack() {}

    executeStart() {}

    executeStepByStep() {}

    executeSlow() {}

    executeAll() {}

    get context(): unknown {
        return;
    }

    get contextChanges(): unknown {
        return;
    }
}
