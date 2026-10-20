const STORAGE_KEY = "roys-rants.visitor-key";
let visitorKey: string | undefined;

export const getVisitorKey = (): string => {
  if (visitorKey) return visitorKey;

  try {
    const storedKey = localStorage.getItem(STORAGE_KEY);
    if (storedKey) {
      visitorKey = storedKey;
      return storedKey;
    }
  } catch {
    // Storage may be blocked; keep the key in memory for this page session.
  }

  visitorKey = crypto.randomUUID();

  try {
    localStorage.setItem(STORAGE_KEY, visitorKey);
  } catch {
    // The page should still work when persistent storage is unavailable.
  }

  return visitorKey;
};
