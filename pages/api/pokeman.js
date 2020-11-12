// import pokemon from '../../pokeman.json'

// export default (req, res) => {
//   console.log(req.query)
//   if (!req.query.name) {
//     res.statusCode = 400
//     res.end('Must have a name')
//   } else {
//     const found = pokemon.filter(
//       ({ name: { english } }) => english.toLowerCase() === req.query.name
//     )
//     if (found.length === 0) {
//       res.statusCode = 404
//       res.end(`Pokemon ${req.query.name} not found`)
//     } else {
//       res.statusCode = 200
//       res.setHeader('Content-Type', 'application/json')
//       res.end(JSON.stringify(found[0]))
//     }
//   }
// }
import pokeman from '../../pokeman.json'

export default (req, res) => {
  if (!req.query.name) {
    res.statusCode = 400
    res.send('Must provide a name')
  } else {
    const found = pokeman.filter(
      ({ name: { english } }) => english.toLowerCase() === req.query.name
    )
    if (found.length === 0) {
      res.statusCode = 404
      res.send(`${res.query.name} is not here`)
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(found[0]))
    }
  }
}
