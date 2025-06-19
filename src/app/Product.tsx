import { View } from "react-native";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { BottomRoutesProps } from "@/routes/BottomRoutes";

export function Product({ navigation }: BottomRoutesProps<"product">) {
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
