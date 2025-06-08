import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const targetPosition: [number, number] = [19.3098107, -69.4800762];

const AnimateToLocation = () => {
  const map = useMap();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        map.flyTo(targetPosition, 17, {
          duration: 2.5,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [map]);

  return null;
};

const AnimatedMap = () => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer
        center={[19.3, -69.5]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        />
        <Marker position={targetPosition} />
        <AnimateToLocation />
      </MapContainer>
    </div>
  );
};

export default AnimatedMap;
