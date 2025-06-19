import { View } from "react-native";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { StackRoutesProps } from "@/routes/StackRoutes";

export function Home({ navigation }: StackRoutesProps<"home">) {
	return (
		<View
			style={{
				flex: 1,
				padding: 32,
			}}
		>
			<Header>
				<Title>Home</Title>
				<ButtonIcon
					name="arrow-circle-right"
					onPress={() => navigation.navigate("product")}
				/>
			</Header>
		</View>
	);
}
