import "@mantine/core/styles.css";
import "./App.css";
import {
  Card,
  Center,
  createTheme,
  Grid,
  Image,
  Loader,
  MantineProvider,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { use, useEffect, useState } from "react";
import { TiTabsOutline } from "react-icons/ti";
import { GiFlowerEmblem } from "react-icons/gi";

function App() {
  const [titleWord, setTitleWord] = useState("X");
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState(isLoading ? "loading" : "start");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false),100);
    return () => clearTimeout(timeout);
  }, [titleWord]);

  function changeScreen(screenName: string) {
    setCurrentScreen(screenName);
  }

  function gridCard(title: string, image: string, att?: string, w?: string) {
    return (
      <Grid.Col span={{ base: 12, xs: 6, sm: 6, md: 6, lg: 3 }}>
        <Card
          shadow="md"
          className="squirc cardboard"
          style={{ aspectRatio: "10/11" }}
          onClick={() => {
            const newpage = title.toLowerCase();
            changeScreen(newpage);
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

  useEffect(() => {
    const words = ["Phone", "Laptop", "Headphones", "Console"];
    setTitleWord((prevWord) => {
        let newWord;
        do {
          newWord = words[Math.floor(Math.random() * words.length)];
        } while (newWord === prevWord && words.length > 1);
        return newWord;
      });
    const interval = setInterval(() => {
      setTitleWord((prevWord) => {
        let newWord;
        do {
          newWord = words[Math.floor(Math.random() * words.length)];
        } while (newWord === prevWord && words.length > 1);
        return newWord;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageUrls = [
      "https://source.roboflow.com/xeIGEioysOaYB5kZ6a5mhZ7w9Gn1/1kBTzISjLkB4nNz9jb4H/original.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dell_XPS_13_%282018%29.png/960px-Dell_XPS_13_%282018%29.png",
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wireless_3.0_Earbuds_Transparent_3.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nintendo_Switch_2-Spieleequipment_20250605.png/960px-Nintendo_Switch_2-Spieleequipment_20250605.png",
    ];

    let loaded = 0;
    imageUrls.forEach((url) => {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === imageUrls.length) {
          setIsLoading(false);
          setCurrentScreen("start");
        }
      };
      img.src = url;
    });
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
      .fadeUp {
        animation: fadeUp 0.3s forwards;
      }
      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      `}
    </style>
      {window.innerWidth < 575 ? <Space h="65vh" /> : ""}
      <Center
        id="loadingpage"
        className="page"
        h="100vh"
        w="100vw"
        opacity={currentScreen === "loading" ? "1" : "0"}
        style={{
          pointerEvents: currentScreen === "loading" ? "auto" : "none",
        }}
        mah="100vh"
        pos="absolute"
        top={0}
        left={0}
      >
        <Loader color="white" />
      </Center>
      <Center
        id="startpage"
        className="page"
        h="100vh"
        w="100vw"
        opacity={currentScreen === "start" ? "1" : "0"}
        style={{
          pointerEvents: currentScreen === "start" ? "auto" : "none",
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
            What <span id="rain" data-content={titleWord} className={animate ? "fadeUp" : ""} /> For Me
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
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dell_XPS_13_%282018%29.png/960px-Dell_XPS_13_%282018%29.png",
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
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nintendo_Switch_2-Spieleequipment_20250605.png/960px-Nintendo_Switch_2-Spieleequipment_20250605.png",
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
        opacity={currentScreen === "phone" ? "1" : "0"}
        style={{
          pointerEvents: currentScreen === "phone" ? "auto" : "none",
        }}
        mah="100vh"
        pos="absolute"
        top={0}
        left={0}
      ></Center>

      <Center h="5em" w="100vw" pos="fixed" bottom={0}>
        By&nbsp;<a href="https://benjs.uk/">BenJS</a>&nbsp;- 2025<br/>
        <a href="https://"></a>
      </Center>
    </MantineProvider>
  );
}

export default App;
