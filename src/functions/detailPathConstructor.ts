export default function detailPathConstructor(
  whereFrom: string,
  id?: number
) {
  let path = "/" + whereFrom + "/details/" + id;
  if (id === undefined) {
    path = "/" + id;
  }
  return path;
}
