import Navbar from "./components/Navbar";
import CustomThemeProvider from "./components/CustomThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import MergeIcon from "@mui/icons-material/Merge";
import LinkCard from "./components/LinkCard";

export default function App() {
    const links = [
        {
            title: "GitHub",
            subtitle: "My GitHub profile",
            link: "https://github.com/jharrisong830",
            icon: <MergeIcon />
        }
    ];
    return (
        <CustomThemeProvider>
            <CssBaseline />
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    color: "primary.contrastText",
                    backgroundColor: "primary.main",
                    minHeight: "100vh"
                }}
            >
                <Navbar />
                {/* header */}

                <Stack spacing={2} p={4}>
                    {links.map((link, index) => (
                        <LinkCard key={index} {...link} />
                    ))}
                </Stack>
            </Container>
        </CustomThemeProvider>
    );
}
