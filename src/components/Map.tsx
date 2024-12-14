// components/LeafletMap.tsx
"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type MapProps = {
  latitude: number;
  longitude: number;
};

const LeafletMap: React.FC<MapProps> = ({ latitude, longitude }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([latitude, longitude], 10); // Set initial zoom level

      // Add OpenStreetMap tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker at the given latitude and longitude
      const marker = L.marker([latitude, longitude]).addTo(map);

      // Add a popup with the coordinates
      marker.bindPopup(`Latitude: ${latitude}, Longitude: ${longitude}`).openPopup();

      // Cleanup map on unmount
      return () => {
        map.remove();
      };
    }
  }, [latitude, longitude]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
};

export default LeafletMap;
