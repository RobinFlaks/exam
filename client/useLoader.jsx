import { useEffect, useState } from "react";

export async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    method: options.method || "get",
    headers: options.json ? { "content-type": "application/json" } : {},
    body: options.json && JSON.stringify(options.json),
  });

  if (!res.ok) {
    throw new Error(`loading error: ${res.status} -> ${res.statusText};`);
  }

  if (res.status === 200) {
    return await res.json();
  }
}

export function useLoader(loadingFn) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        setData(await loadingFn());
      } catch (error) {
        setError(error);
      }
    };
    loadData().then((r) => setLoading(false));
  }, []);

  return { loading, error, data };
}
