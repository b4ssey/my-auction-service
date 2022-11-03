async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from https://ekemini.tech" }),
  };
}

export const handler = hello;
