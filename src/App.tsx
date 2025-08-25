import "@mantine/core/styles.css";
import "./App.css";
import {
  Card,
  Center,
  createTheme,
  Grid,
  Image,
  MantineProvider,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { use, useEffect, useState } from "react";
import { TiTabsOutline } from "react-icons/ti";

function App() {
  const [screen, setScreen] = useState({
    start: "1",
    phone: "0",
  });

  function gridCard(title: string, image: string, att?: string, w?: string) {
    return (
      <Grid.Col span={{ base: 12, xs: 6, sm: 6, md: 6, lg: 3 }}>
        <Card
          shadow="md"
          className="squirc cardboard"
          style={{ aspectRatio: "10/11" }}
          onClick={() => {
            const newpage = title.toLowerCase();
            let newscreen = screen;
            for (const key in screen) {
              newscreen[key as keyof typeof screen] = "0";
            }
            newscreen[newpage as keyof typeof screen] = "1";
            setScreen(newscreen);
          }}
        >
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

  const [titleWord, setTitleWord] = useState("X");

  useEffect(() => {
    const title = document.getElementById("title") as HTMLElement;
    const words = ["Phone", "Laptop", "Headphones", "Console"];
    if (title) {
      setInterval(() => {
        title.style.animation = "fadeUp 0.3s forwards";
        setTimeout(() => {
          let newWord;
          do {
            newWord = words[Math.floor(Math.random() * words.length)];
          } while (newWord === titleWord && words.length > 1);
          setTitleWord(newWord);
          title.style.animation = "fadeUpBot 0.3s forwards";
        }, 400);
      }, 5000);
    }
  }, []);

  return (
    <MantineProvider defaultColorScheme="dark">
      <style>
        {`
        #rain::before {
    background: linear-gradient(to right, #ff0400, #ff8800, #ffdd00, #0dff00, #26c6da, #0088ff, #5100ff, #e700fc, #ff2268);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  content: attr(data-content);
  transition: all 1s ease;
}
`}
      </style>
      {window.innerWidth < 575 ? <Space h="65vh" /> : ""}
      <Center
        id="startpage"
        className="page"
        h="100vh"
        w="100vw"
        opacity={screen["start"]}
        style={{
          pointerEvents: screen["start"] == "1" ? "auto" : "none",
        }}
        mah="100vh"
        pos="absolute"
        top={0}
        left={0}
      >
        <Stack maw="90vw">
          <Title
            className="title"
            id="title"
            unselectable="off"
            style={{ textAlign: "center", fontSize: "4.2em" }}
          >
            What <span id="rain" data-content={titleWord} /> For Me
          </Title>
          <Space h="md" />
          <Grid w="70vw">
            {gridCard(
              "Phone",
              "https://source.roboflow.com/xeIGEioysOaYB5kZ6a5mhZ7w9Gn1/1kBTzISjLkB4nNz9jb4H/original.jpg",
              "",
              "70%"
            )}
            {gridCard(
              "Laptop",
              "https://upload.wikimedia.org/wikipedia/commons/8/8f/Dell_XPS_13_%282018%29.png",
              "",
              "65%"
            )}
            {gridCard(
              "Headphones",
              "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wireless_3.0_Earbuds_Transparent_3.png",
              "Trent Huss, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
              "90%"
            )}
            {gridCard(
              "Console",
              "https://upload.wikimedia.org/wikipedia/commons/f/f2/Nintendo_Switch_2-Spieleequipment_20250605.png",
              "Nintendo Inc., CC BY-SA",
              "90%"
            )}
          </Grid>
        </Stack>
      </Center>
      <Center
        id="phonepage"
        className="page"
        h="100vh"
        w="100vw"
        opacity={screen["phone"]}
        style={{
          pointerEvents: screen["phone"] == "1" ? "auto" : "none",
        }}
        mah="100vh"
        pos="absolute"
        top={0}
        left={0}
      ></Center>
    </MantineProvider>
  );
}

export default App;
