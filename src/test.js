const tape = require("tape")
const evaluate = require("./")

const defaultContext = {}

const tests = [
  { expr: `{haveKids}='yes'`, expect: true },
  { expr: `{haveKids}='yes' and {kids} >= 1`, expect: true },
  { expr: `{matrix.name}='yes'`, expect: true },
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

for (const test of tests) {
  tape.test(test.expr, () => {
    evaluate(test.expr, test.context || defaultContext)
  })
}
