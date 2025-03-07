import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";

import { AppError } from "@utils/AppError";

import { groupCreate } from "@storage/group/groupCreate";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");
  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Nova turma", "informe o nome da turma.");
      }

      await groupCreate(group);

      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova turma", error?.message);
      } else {
        Alert.alert("Nova turma", "Não foi possível criar uma nova turma.");
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
          style={{ marginBottom: 20 }}
          onSubmitEditing={handleNew}
          returnKeyType="done"
        />

        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
