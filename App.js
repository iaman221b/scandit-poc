import {View , Text} from 'react-native'
import { useEffect } from 'react';

import {
  DataCaptureContext
} from 'scandit-react-native-datacapture-core';

const App = () => {

  useEffect(() => {

    const dataCaptureContext = DataCaptureContext.forLicenseKey('-- ENTER YOUR SCANDIT LICENSE KEY HERE --');
    const viewRef = React.createRef();

  },[])

 
  return ( 
    <View style={{margin:100}}>
      <Text>hELLO</Text>
    </View>
   );
}
 
export default App;