export interface IInterpreter {
    /** Executes a syntax element stack starting from an element. */
    executeStack: Function;
    /** Executes a single 'start' element. */
    executeStart: Function;
    /** Executes all 'start' elements one element at a time. */
    executeStepByStep: Function;
    /** Executes all 'start' elements slowly iterating over each element parsing. */
    executeSlow: Function;
    /** Executes all 'start' elements at full speed. */
    executeAll: Function;
    /** Returns current context of all 'start' elements. */
    context: unknown;
    /** Returns changes in context of all 'start' elements after executing one element. */
    contextChanges: unknown;
}
