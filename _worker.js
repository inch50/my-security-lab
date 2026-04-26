export default {
  async fetch(request) {
    const url = new URL(request.url);
    const name = url.searchParams.get('name') || 'World';
    return new Response(`<h1>Hello, ${name}!</h1>`, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
};
