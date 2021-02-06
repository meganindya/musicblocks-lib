export interface ISyntaxValidator {
    /**
     * Returns the statistics of the currently identified syntax problems. This is updated after
     * each change to the syntax elements. This is meant to optimize the validation effort and
     * provide a dynamic feedback.
     */
    snapshot: unknown;
    /** Returns whether queried change in syntax is allowed. */
    validateChange: Function;
    /** Validates the syntax elements affected by a change and updates the snapshot. */
    updateSnapshot: Function;
    /** Runs the validator on the entire project and regenerates snapshot. */
    refresh: Function;
}
