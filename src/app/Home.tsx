import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { StackRoutesList } from "@/routes/StackRoutes";

type Props = NativeStackScreenProps<StackRoutesList, "home">;

export function Home({ navigation }: Props) {
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
