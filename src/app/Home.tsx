import { View } from "react-native";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

export function Home({ navigation }: DrawerRoutesProps<"home">) {
	return (
		<View
			style={{
				flex: 1,
				padding: 32,
			}}
		>
			<Header>
				{/* Hamburguer Menu as Toggle to test only */}
				{/* <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} /> */}

				<Title>Home</Title>
				<ButtonIcon
					name="arrow-circle-right"
					onPress={() => navigation.navigate("product")}
				/>
			</Header>
		</View>
	);
}
