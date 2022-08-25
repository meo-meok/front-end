/*global kakao */
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapArea({ activeTab, searchData, activeMap }) {
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()

    useEffect(() => {
        if (!map) return
        const ps = new kakao.maps.services.Places()
        const bounding = new kakao.maps.LatLngBounds()

        if (activeTab === 1) {
            if (activeMap === 2) {
                searchData = [searchData]
            }
        }
        if (searchData.length > 0) {
            let markers = []
            console.log("MapArea2 : ", searchData.latitude)
            for (var i = 0; i < searchData.length; i++) {
                markers.push({
                    position: {
                        lat: searchData[i].latitude,
                        lng: searchData[i].longitude,
                    },
                    content: searchData[i].restaurant_name,
                })
                bounding.extend(
                    new kakao.maps.LatLng(searchData[i].latitude, searchData[i].longitude)
                )
            }
            map.setBounds(bounding)
            setMarkers(markers)
        }
        // console.log("keyword",keyword)
    }, [map, searchData])

    if (markers.length != 0) {
        return (
            <Map // 로드뷰를 표시할 Container
                center={{
                    lat: 36.081990132484904,
                    lng: 129.38588514738146,
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
    else {
        return (
            <Map // 로드뷰를 표시할 Container
                center={{
                    lat: 36.081990132484904,
                    lng: 129.38588514738146,
                }}
                style={{
                    width: "70vw",
                    height: "91vh",
                }}
                level={5}
                onCreate={setMap}
            />
        )
    }

}

export default MapArea;