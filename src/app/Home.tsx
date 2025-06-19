import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export function Home() {
	const navigation = useNavigation();

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
