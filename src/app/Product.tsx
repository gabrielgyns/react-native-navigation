import { View } from "react-native";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

export function Product({ navigation }: DrawerRoutesProps<"product">) {
	return (
		<View
			style={{
				flex: 1,
				padding: 32,
			}}
		>
			<Header>
				<ButtonIcon
					name="arrow-circle-left"
					onPress={() => navigation.goBack()}
				/>
				<Title>Product</Title>
			</Header>
		</View>
	);
}
