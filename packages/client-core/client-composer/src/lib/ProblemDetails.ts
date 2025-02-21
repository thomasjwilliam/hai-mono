/**
 * Problem Details
 * Inspired by "Problem Details for HTTP APIs"
 * @see https://www.rfc-editor.org/rfc/rfc9457.html
 */
export type ProblemDetails = {
  /**
   * A unique reference that identifies the problem type.
   */
  type: string
  /**
   * A short, human-readable summary of the problem type.
   */
  title: string
  /**
   * A human-readable explanation specific to this occurrence of the problem.
   * The "detail" string, if present, ought to focus on helping the client
   * correct the problem, rather than giving debugging information.
   */
  detail?: string
  /**
   * An array of error details to accompany a problem details response.
   */
  errors?: Array<{
    /**
     * A granular description on the specific error related to a body property,
     * query parameter, path parameters, and/or header.
     */
    detail: string
    /**
     * A JSON Pointer to a specific request body property that is the source of error.
     */
    pointer?: string
  }>
}