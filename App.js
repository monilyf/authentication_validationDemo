import React from 'react';

import RootNavigator from './src/router';
import {Provider} from 'react-redux'
import store from './src/redux/store'

const App = () => {
  // const [Splash, setSplash] = useState(true);
  // useEffect(() => {
  //   setTimeout(async () => {
  //     setSplash(false);
  //   }, 4000);
  // }, []);
  // if (Splash) {
  //   return <SplashScreen />;
  // }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
