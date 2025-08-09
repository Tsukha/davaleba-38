"use client";

import { useParams, useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";

function ParamsContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Convert params to a more readable format
  const routeParams = Object.entries(params || {});
  const queryParams = Array.from(searchParams.entries());

  return (
    <div>
      <div className="params-container">
        <h3 className="params-title">Route Information</h3>
        <div className="param-item">
          <span className="param-key">Current Path:</span>
          <span className="param-value">{pathname}</span>
        </div>

        {routeParams.length > 0 && (
          <>
            <h4 style={{ margin: "1rem 0 0.5rem 0", opacity: 0.9 }}>
              Route Parameters:
            </h4>
            {routeParams.map(([key, value]) => (
              <div key={key} className="param-item">
                <span className="param-key">{key}:</span>
                <span className="param-value">
                  {Array.isArray(value) ? value.join(", ") : value}
                </span>
              </div>
            ))}
          </>
        )}
      </div>

      {queryParams.length > 0 && (
        <div className="search-params">
          <h3 className="params-title">Search Parameters</h3>
          {queryParams.map(([key, value]) => (
            <div key={key} className="param-item">
              <span className="param-key">{key}:</span>
              <span className="param-value">{value}</span>
            </div>
          ))}
        </div>
      )}

      {routeParams.length === 0 && queryParams.length === 0 && (
        <div className="card">
          <h3>Parameter Reader</h3>
          <p>
            This component reads route and search parameters. Try navigating to
            different routes or adding query parameters to the URL (e.g.,
            ?search=test&filter=active) to see them displayed here.
          </p>
        </div>
      )}
    </div>
  );
}

export default function ParamsReader() {
  return (
    <Suspense
      fallback={
        <div className="card">
          <p>Loading parameters...</p>
        </div>
      }
    >
      <ParamsContent />
    </Suspense>
  );
}
