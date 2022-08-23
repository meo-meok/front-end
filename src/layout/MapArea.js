/*global kakao */
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapArea({ keyword,activeTab, setActiveTab, searchData }) {
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()

  useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places()
    const bounding = new kakao.maps.LatLngBounds()

    console.log("Map Area : ", searchData)
  // console.log('activeTab',activeTab)
    const name_list = []
    if(activeTab===2){
      console.log('activeTab',activeTab)
      name_list.push(keyword)
    }else{
      for (var i = 0; i < searchData.length; i++) {
        name_list.push(searchData[i].restaurant_name);
      }
    }
    
    console.log("keyword",keyword)
    console.log("name_list", name_list)

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        let markers = []
        console.log("data : ", data)
        

        for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < name_list.length; j++) {
            if (name_list[j] == data[i].place_name) {
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
          }
          // @ts-ignore
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounding)
      }
    }, {
      bounds:
        new kakao.maps.LatLngBounds(
          new kakao.maps.LatLng(36.06365, 129.36525),
          new kakao.maps.LatLng(36.09245, 129.41006))
    }
    )
  }, [map, searchData])

  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "70vw",
        height: "91vh",
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
          {info && info.content === marker.content && (
            <div style={{ color: "black", background: "white" }}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
    </Map>
  )
}

export default MapArea;