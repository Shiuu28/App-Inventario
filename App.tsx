import * as React from 'react';
import { HomeScreen } from './src/Presentation/views/home/home';
import { RegisterScreen } from './src/Presentation/views/register/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriasScreen } from './src/Presentation/views/catalogo/catalogo';
import { cat_lacteos } from './src/Presentation/views/catalogo/cat_lacteos';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  cat_lacteos: undefined;
}


const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Registro',
          }}
        />

        <Stack.Screen
          name="CategoriasScreen"
          component={CategoriasScreen}
          options={{
            headerShown: true,
            title: 'Categorias',
          }}
        />

        <Stack.Screen
          name="cat_lacteos"
          component={cat_lacteos}
          options={{
            headerShown: true,
            title: 'Productos - Lácteos',
          }}
        />

        { /*<Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;