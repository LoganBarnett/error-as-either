// @flow

export default <T>(f: () => T): T | Error => {
  try {
    return f()
  } catch(e) {
    return e instanceof Error ? e : new Error(e)
  }
}
