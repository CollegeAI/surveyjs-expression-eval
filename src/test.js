const test = require("tap").test
const evaluate = require("./")

const defaultContext = {
  haveKids: "yes"
}

const tests = [
  { expr: `{haveKids}='yes'`, expect: true },
  { expr: `{haveKids}='yes' and {kids} >= 1`, expect: true },
  { expr: `{array.name}='yes'`, expect: true },
  { expr: `rowsWithValue({quality}, 'disagree') >= 3`, expect: true },
  { expr: `{car} notempty`, expect: true },
  { expr: `{car} contains {item}`, expect: true },
  { expr: `{car.length} > 1`, expect: true },
  { expr: `{car} contains {item} and {item}!={bestcar}`, expect: true },
  {
    expr: `{email} notempty or {phone} notempty or {skype} notempty`,
    expect: true
  }
]

for (const { expr, expect, context, functions } of tests.slice(0, 1)) {
  test(expr, t => {
    t.equal(evaluate(expr, test || defaultContext, functions), expect)
  })
}
