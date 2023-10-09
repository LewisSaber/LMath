import EquationTree from "./EquationTree.js"

let LMath = {
  solve(Equation, scope) {
    console.log("solving", Equation)
    let tree = new EquationTree().build(Equation)
    console.log(tree)
    return tree.solve(scope)
  },
}

export default LMath
