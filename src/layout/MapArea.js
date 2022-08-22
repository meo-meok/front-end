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
    const bounding = new kakao.maps.LatLngBounds()

    ps.keywordSearch(keyword+'장량동', (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        //const bounds = new kakao.maps.LatLngBounds()

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
          bounding.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        //bounds.extend(new kakao.maps.LatLng())
        setMarkers(markers)
        
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounding)
      }
    }, {bounding : 
        new kakao.maps.LatLngBounds(
          new kakao.maps.LatLng(36.06365, 129.36525), 
          new kakao.maps.LatLng(36.09245, 129.41006))
        }
    ) 
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