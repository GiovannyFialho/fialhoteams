import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { Container, NoneGroup } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera do fut"]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <NoneGroup>Nenhum grupo cadastrado</NoneGroup>
        )}
      />
    </Container>
  );
}
