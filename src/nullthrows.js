/**
 * @flow strict
 * @format
 */

export default function nullthrows<T>(x: ?T): T {
  if (x == null) {
    const error = new Error("Got unexpected " + String(x));
    // $FlowFixMe
    error.framesToPop = 1; // Skip nullthrows's own stack frame.
    throw error;
  }
  return x;
}
