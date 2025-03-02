import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("players", { group: "rocket" });
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

        <Input placeholder="Nome da turma" style={{ marginBottom: 20 }} />
        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
