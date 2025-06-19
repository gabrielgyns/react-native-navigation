import { MaterialIcons } from "@expo/vector-icons";
import {
	createDrawerNavigator,
	DrawerScreenProps,
} from "@react-navigation/drawer";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type DrawerRoutesList = {
	home: undefined;
	product: undefined;
};

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> =
	DrawerScreenProps<DrawerRoutesList, T>;

const Drawer = createDrawerNavigator<DrawerRoutesList>();

export function DrawerRoutes() {
	return (
		<Drawer.Navigator
			initialRouteName="home"
			screenOptions={{
				headerShown: false,
				drawerActiveTintColor: "#2C46B1",
				drawerInactiveTintColor: "#666666",
				drawerStatusBarAnimation: "slide",
			}}
		>
			<Drawer.Screen
				name="home"
				component={Home}
				options={{
					drawerLabel: "Home",
					drawerIcon: ({ color, size }) => (
						<MaterialIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="product"
				component={Product}
				options={{
					drawerLabel: "Products",
					drawerIcon: ({ color, size }) => (
						<MaterialIcons name="card-giftcard" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}
