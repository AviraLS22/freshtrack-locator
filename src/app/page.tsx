// pages/analytics.tsx
"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import GoogleMap from "../components/Map";
import LeafletMap from "../components/Map";

// Dynamically import the Map component with ssr: false to prevent server-side rendering issues
const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

const AnalyticsPage = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 28.6139, // Default location (New Delhi)
    lng: 77.2090,
  });

  // Simulate receiving new latitude and longitude from the backend (replace this with actual API call)
  useEffect(() => {
    // Example of how you might fetch this data (replace with real API)
    setTimeout(() => {
      setLocation({ lat: 19.0760, lng: 72.8777 }); // Coordinates for Mumbai (just as an example)
    }, 3000); // Update location after 3 seconds
  }, []);

  return (
    <div className="bg-black">
      <LeafletMap latitude={0} longitude={0}/>
    </div>
  );
};

export default AnalyticsPage;
