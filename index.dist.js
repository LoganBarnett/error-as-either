export default (f => {
  try {
    return f();
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
});
