/*global kakao */
import { useState, useEffect} from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapArea({ keyword, setActiveTab }){
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()

  useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places()


    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var sw = new kakao.maps.LatLng(36.055304, 129.363541);
        var ne  = new kakao.maps.LatLng(36.098447, 129.401476);

        var ss = new kakao.maps.LatLng(36, 129);
        var nn  = new kakao.maps.LatLng(37, 130);

        const bounds = new kakao.maps.LatLngBounds(ss, nn)
        let markers = []

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          })
          // @ts-ignore
        }
        //bounds.extend(new kakao.maps.LatLng(sw, ne))
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    })
  }, [map, keyword])

  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "70vw",
        height: "87vh",
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => {
            setInfo(marker)
            setActiveTab(2)
          }}
        >
          {info &&info.content === marker.content && (
            <div style={{color:"black", background:"white"}}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
    </Map>
  )
}

export default MapArea;