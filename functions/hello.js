export async function onRequest(context) {
  const url = new URL(context.request.url);
  const name = url.searchParams.get('name') || 'World';
  return new Response(`<h1>Hello, ${name}!</h1>`, {
    headers: { 'Content-Type': 'text/html' },
  });
}
