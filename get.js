
/**
 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。

添加版本
3.7.0

参数
object (Object): 要检索的对象。
path (Array|string): 要获取属性的路径。
[defaultValue] (*): 如果解析值是 undefined ，这值会被返回。
 */
var object = { 'a': [{ 'b': { 'c': 3 } }] };
const _ =  {
  get
}


console.log(_.get(object, 'a[0].b.c'));
// // => 3
 
// _.get(object, ['a', '0', 'b', 'c']);
// // => 3
console.log(_.get(object, ['a', '0', 'b', 'c']))
 
// _.get(object, 'a.b.c', 'default');

console.log(_.get(object, 'a.b.c', 'default'))
console.log(_.get(object, [], 'default'))


function get (obj, path, defaultValue) {
  if (typeof obj != 'object' || !obj) throw new Error('need an object')
  if (typeof path !== 'string' && !Array.isArray(path) || (Array.isArray(path) && !path.length)) return defaultValue

  if (typeof path === 'string') {
    const reg = /[^\[\].\s]/g
    path = path.match(reg)
  }

  console.log('path', path)
  
  let value = obj
  for (const key of path) {
    if (value == null && typeof value !== 'object') return defaultValue
    value = value[key]
    if (value === void 0) return defaultValue
  }
  return value
}
