import { useContext } from "react";
import View from "../../components/viewer/viewer";
import { DataContext } from "../../context/contextData";

export function Home() {
    const {data} = useContext(DataContext)
    return <View> 
    {data.map(item => <View key={item.id}> {item.name} </View>)}    
    </View>
}

export default Home;