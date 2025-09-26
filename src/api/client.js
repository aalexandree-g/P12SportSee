export async function getUser(id) {
  const response = await fetch(`http://localhost:3000/user/${id}`)
  const json = await response.json()
  return json.data
}
