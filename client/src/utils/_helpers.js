export const asyncTest = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
export const alertValues = (values) => alert(JSON.stringify(values, null, 2))
