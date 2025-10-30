const DEFAULT_API_BASE_URL = import.meta.env.DEV ? "http://localhost:4000" : "";

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL;
const API_BASE_URL = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

function buildUrl(path) {
  if (!path) return API_BASE_URL;
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function readAuthToken() {
  try {
    const raw = window.localStorage.getItem("buymeacoffee.africa.auth.token");
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn("Unable to read auth token from storage", error);
    return null;
  }
}

export async function apiRequest(path, options = {}) {
  const headers = new Headers(options.headers ?? {});

  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  const token = readAuthToken();
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(buildUrl(path), {
    method: options.method ?? "GET",
    credentials: options.credentials ?? "include",
    ...options,
    headers,
  });

  const contentType = response.headers.get("content-type") ?? "";
  const isJson = contentType.includes("application/json");
  const payload = isJson ? await response.json().catch(() => null) : await response.text();

  if (!response.ok) {
    const message = isJson && payload?.message ? payload.message : `Request failed with status ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.data = payload;
    throw error;
  }

  return payload;
}

export function apiPost(path, body, options = {}) {
  return apiRequest(path, {
    method: "POST",
    body: JSON.stringify(body ?? {}),
    ...options,
  });
}
