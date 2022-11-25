const url = "http://localhost:4000";
const token = "";
async function apiCall(method, endpoint, body) {
  try {
    const options = {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(body),
    };
    let response = await fetch(url + endpoint, options);
    return await response.json();
  } catch (error) {
    return console.error(error);
  }
}

export function GET(endpoint, body) {
  return apiCall("GET", endpoint, body);
}

export function PUT(endpoint, body) {
  return apiCall("PUT", endpoint, body);
}
export function POST(endpoint, body) {
  return apiCall("POST", endpoint, body);
}

export function DELETE(endpoint, body) {
  return apiCall("DELETE", endpoint, body);
}
