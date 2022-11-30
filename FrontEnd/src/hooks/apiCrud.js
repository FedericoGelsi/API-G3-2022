const url = "http://localhost:4000";
async function apiCall(method, endpoint, body="", token="") {
  try {
    const options = {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    if( method != "GET"){
      options["body"] = JSON.stringify(body);
    }
    let response = await fetch(url + endpoint, options);
    return await response.json();
  } catch (error) {
    return console.error(error);
  }
}

export function GET(endpoint, token="") {
  return apiCall("GET", endpoint,"",token);
}

export function PUT(endpoint, body, token="") {
  return apiCall("PUT", endpoint, body, token);
}
export function POST(endpoint, body, token="") {
  return apiCall("POST", endpoint, body, token);
}

export function DELETE(endpoint, body, token="") {
  return apiCall("DELETE", endpoint, body, token);
}
