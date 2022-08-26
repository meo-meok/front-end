/*global kakao */

import { useState, useEffect} from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function CategoryMap ({categoryId, setActiveTab}){ 
    const [markers, setMarkers] = useState([])
    const [info, setInfo] = useState()
    const [map, setMap] = useState()

    var searchData = [];
  
    const bounding = new kakao.maps.LatLngBounds()

    useEffect(() => {
      if (!map) return

      fetch('https://jeonjin.pythonanywhere.com/restaurants/')
      .then(results=>results.json())
      .then(results=>{
        results.map((result)=>{
            if(result.category==categoryId){
                searchData.push(result)
            }
        })
        // 데이터리스트 중복 제거
        {
            searchData=searchData.filter((arr,index,callback)=>
            index=== callback.findIndex((d)=>d.restaurant_id === arr.restaurant_id))
        }

        let markers = []

        for (var i = 0; i < searchData.length; i++) {
            markers.push({
                position: {
                    lat: searchData[i].latitude,
                    lng: searchData[i].longitude,
                  },
                content : searchData[i].restaurant_name,
            })
            bounding.extend(
                new kakao.maps.LatLng(searchData[i].latitude, searchData[i].longitude)
            )
        }
        map.setBounds(bounding)
        setMarkers(markers)
      });
    });

    return (
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표 d
          //hello
          lat: 36.081990132484904,
          lng: 129.38588514738146,
        }}
        style={{
            width: "70vw",
            height: "91vh",
        }}
        level={3} // 지도의 확대 레벨
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position} // 마커를 표시할 위치
            
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
  export default CategoryMap
