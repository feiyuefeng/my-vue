const storage = window.sessionStorage

export function save (key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  storage.setItem(key, value)
}

export function saveMulti (datas) {
  datas.forEach(data => save(data.key, data.value))
}

export function read (key) {
  let val = storage.getItem(key)
  if (val && val !== '') {
    return val
  } else {
    return ''
  }
}

export function readMulti (keys) {
  return keys.map(key => read(key))
}

export function clear (key, clearAll = false) {
  if (clearAll) {
    storage.clear()
  } else {
    storage.removeItem(key)
  }
}

export function clearMulti (keys) {
  keys.forEach(key => clear(key))
}
