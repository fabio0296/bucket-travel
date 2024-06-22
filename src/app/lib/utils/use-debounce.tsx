const debounce = <F extends (...args: Parameters<F>) => Promise<unknown>>(
  func: F,
  waitFor: number,
) => {
  let timeout: NodeJS.Timeout

  const debounced = (...args: Parameters<F>) => {
    clearTimeout(timeout)
    timeout = setTimeout(async() => func(...args), waitFor)
  }

  return debounced
}

export default debounce;