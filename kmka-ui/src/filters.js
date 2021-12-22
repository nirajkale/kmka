function localdatetime_fn(value) {
  if (!value) return ''
  value = value.toString()
  let dateObj = new Date(value);
  return dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString();
}

export { localdatetime_fn }