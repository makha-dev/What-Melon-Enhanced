import { YMaps, Map } from 'react-yandex-maps';

const CustomMap = () => {
    return ( 
        <YMaps>
            <Map width={375} height={667} defaultState={{ center: [43.2077457, 76.6668655], zoom: 16 }} />
        </YMaps>
    );
}
 
export default CustomMap;