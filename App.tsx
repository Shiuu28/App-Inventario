import * as React from 'react';
import { HomeScreen } from './src/Presentation/views/home/home';
import { RegisterScreen } from './src/Presentation/views/register/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriasScreen } from './src/Presentation/views/catalogo/catalogo';
import { catLacteos } from './src/Presentation/views/catalogo/cat_lacteos';
import { Modificar } from './src/Presentation/views/Options/Modificar';
import { AddProduct } from './src/Presentation/views/Options/ProductRegister';
import { catAseo } from './src/Presentation/views/catalogo/cat_aseo';
import { catCarnes } from './src/Presentation/views/catalogo/cat_carnes';
import { catFrutas } from './src/Presentation/views/catalogo/cat_frutas';
import { catVerduras } from './src/Presentation/views/catalogo/cat_verduras';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  catLacteos: undefined;
  AddProduct: undefined;
  Modificar: undefined;
  CategoriasScreen: undefined;
  catAseo: undefined;
  catCarnes:  undefined;
  catFrutas: undefined;
  catVerduras: undefined;
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
          name="catLacteos"
          component={catLacteos}
          options={{
            headerShown: true,
            title: 'Productos - Lácteos',
          }}
        />

        <Stack.Screen
          name="Modificar"
          component={Modificar}
          options={{
            headerShown: true,
            title: 'Modificar Producto',
          }}
        />

        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{
            headerShown: true,
            title: 'Agregar producto',
          }}
        />

        <Stack.Screen
          name="catAseo"
          component={catAseo}
          options={{
            headerShown: true,
            title: 'Productos - Aseo',
          }}
        />


        <Stack.Screen
          name="catCarnes"
          component={catCarnes}
          options={{
            headerShown: true,
            title: 'Productos - Carnes',
          }}
        />


        <Stack.Screen
          name="catFrutas"
          component={catFrutas}
          options={{
            headerShown: true,
            title: 'Productos - Frutas',
          }}
        />

        <Stack.Screen
          name="catVerduras"
          component={catVerduras}
          options={{
            headerShown: true,
            title: 'Productos - Verduras',
          }}
        />

        { /*<Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;