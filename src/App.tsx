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

  function gridCard(title: string, image: string, att?: string,w?:string) {
    return (
      <Grid.Col span={{ base: 12, xs: 6, sm: 6, md: 6, lg: 3 }}>
        <Card shadow="md" style={{ aspectRatio: "10/11" }}>
          <Card.Section>
            <Center style={{ aspectRatio: "16/12" }}>
              <Image title={att || undefined} src={image} w={w || "50%"} />
            </Center>
          </Card.Section>
          <Center h="100%">
            <Title order={4}>{title}</Title>
          </Center>
        </Card>
      </Grid.Col>
    );
  }

  return (
    <MantineProvider>
      {window.innerWidth < 575 ? <Space h="65vh"/> :""}
      <Center id="startpage" h="100vh" w="100vw" display={screen["start"]}  mah="100vh">
        
        <Stack maw="90vw">
          <Title unselectable="off" style={{ textAlign: "center",fontSize:"3.2em" }}>
            What <b>X</b> For Me
          </Title>
          <Space h="md" />
          <Grid w="70vw">
            {gridCard(
              "Phone",
              "https://upload.wikimedia.org/wikipedia/commons/e/e6/S25_Blueblack.png",
              "Eleanor Chin, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
            )}
            {gridCard(
              "Laptop",
              "https://upload.wikimedia.org/wikipedia/commons/4/49/MacBook_Pro_Retina_001.jpg",
              "SimonWaldherr, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
              "80%"
            )}
            {gridCard(
              "Headphones",
              "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wireless_3.0_Earbuds_Transparent_3.png",
              "Trent Huss, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
              "90%"
            )}
            {gridCard(
              "Headphones",
              "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wireless_3.0_Earbuds_Transparent_3.png",
              "Trent Huss, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
              "90%"
            )}
          </Grid>
        </Stack>
      </Center>
    </MantineProvider>
  );
}

export default App;
