export async function handler(event, context) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzOsK9fWINq8BJ3DHNc_GpnpJ_ErHa33bu6xNXooYjRRMFsyb-LIscrsQ92nGWX1MYu/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: event.body
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}


