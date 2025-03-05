import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";

import { AppError } from "@utils/AppError";

import { type PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";

import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicionar."
      );
    }

    const newPlayer: PlayerStorageDTO = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      fetchPlayersByTeam();

      setNewPlayerName("");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        Alert.alert("Nova pessoa", "Não foi possível adicionar.");
        console.log(error);
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);

      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Pessoas",
        "Não foi possível filtrar as pessoas do time selecionado."
      );
    }
  }

  function handleRemovePlayer() {}

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          autoCorrect={false}
        />

        <ButtonIcon iconName="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={handleRemovePlayer} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
