import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export function Product() {
	const { goBack } = useNavigation();

	return (
		<View
			style={{
				flex: 1,
				padding: 32,
			}}
		>
			<Header>
				<ButtonIcon name="arrow-circle-left" onPress={() => goBack()} />
				<Title>Product</Title>
			</Header>
		</View>
	);
}
