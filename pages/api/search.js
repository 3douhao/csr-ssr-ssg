import pokeman from '../../pokeman.json'

export default (req, res) => {
  const reg = req.query.q ? new RegExp(req.query.q, 'i') : /.*/
  const searchResult = pokeman
    .filter(pokemon => pokemon.name.english.match(reg))
    .slice(0, 8)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(searchResult))
}
