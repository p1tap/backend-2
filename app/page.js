export default function Page({ searchParams }) {
  const name = searchParams.name || 'World';
  return <h1>Hello {name}!</h1>
}