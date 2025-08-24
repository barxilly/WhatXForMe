import "@mantine/core/styles.css";
import "./App.css";
import {
  Card,
  Center,
  Grid,
  Image,
  MantineProvider,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState({
    start: "flex",
  });

  return (
    <MantineProvider>
      <Center id="startpage" h="100vh" display={screen["start"]}>
        <Stack maw="90vw">
          <Title order={1} unselectable="off" style={{ textAlign: "center" }}>
            What <b>X</b> For Me
          </Title>
          <Space h="md" />
          <Grid w="70vw">
            <Grid.Col span={{ base: 2, xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card shadow="md" style={{ aspectRatio: "10/11" }}>
                <Card.Section>
                  <Center style={{ aspectRatio: "16/12" }}>
                    <Image
                      title="Eleanor Chin, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e6/S25_Blueblack.png"
                      w="50%"
                    />
                  </Center>
                </Card.Section>
                <Center h="100%">
                  <Title order={4}>Phone</Title>
                </Center>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 2, xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card shadow="md"></Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Center>
    </MantineProvider>
  );
}

export default App;
