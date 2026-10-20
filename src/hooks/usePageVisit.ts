import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useVisit } from "../api/generated/hooks/useVisit";
import { getVisitorKey } from "../utils/visitorKey";

export const usePageVisit = () => {
  const { pathname } = useLocation();
  const lastPath = useRef<string | null>(null);
  const { mutate } = useVisit({ mutation: { retry: false } });

  useEffect(() => {
    // Avoid duplicate visits from re-renders and Strict Mode's effect replay.
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    const visitorId = getVisitorKey();
    const userAgent = navigator.userAgent;

    mutate({ body: { visitorId, userAgent, path: pathname } });
  }, [pathname, mutate]);
};
