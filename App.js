import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrder from './screens/PreparingOrder';
import ContextProvider from './utils/ContextProvider';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <ContextProvider>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
          <Stack.Screen name="Basket" component={BasketScreen}
          options={{
            presentation:'modal',
            headerShown:false
          }}
          />
          <Stack.Screen name="PreparingOrder" component={PreparingOrder} 
          options={{
            presentation:'fullScreenModal',
            headerShown:false
          
          }}
          />
          </Stack.Navigator>
        </ContextProvider>
    </NavigationContainer>
  );
}

export default App;